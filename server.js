import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  console.log('creating Vite server...');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  console.log('SUCCESS');

  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      console.log('reading index.html...');
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      );

      // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
      //    and also applies HTML transforms from Vite plugins, e.g. global
      //    preambles from @vitejs/plugin-react
      console.log('applying Vite HTML transforms...');
      template = await vite.transformIndexHtml(url, template);
      console.log('SUCCESS');

      // 3. Load the server entry. ssrLoadModule automatically transforms
      //    ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      console.log('loading server entry...');
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      console.log('SUCCESS');

      // 4. render the app HTML. This assumes entry-server.js's exported
      //     `render` function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      console.log('rendering app HTML...');
      const appHtml = await render(url);
      console.log('SUCCESS');

      // 5. Inject the app-rendered HTML into the template.
      console.log('injecting rendered HTML...');
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
      console.log('SUCCESS');

      // 6. Send the rendered HTML back.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(5173);
}

createServer();
