import { Route } from 'wouter';

import { ThemeProvider } from './contexts/theme';
import { Layout } from './components/Layout';

const pages = import.meta.glob('./pages/*.tsx', { eager: true });

function getRoutes(pages: Record<string, unknown>) {
  const getPageName = (path: string) => {
    const matches = path.match(/\.\/pages\/(.*)\.tsx$/);
    if (matches) {
      return matches[1];
    } else {
      throw new Error(`No matches for path ${path}`);
    }
  };

  const getPathName = (name: string) => {
    return name === 'Home' ? '/' : `/${name.toLowerCase()}`;
  };

  const getComponent = (path: string) => {
    return pages[path].default;
  };

  return Object.keys(pages).map((path) => {
    const pageName = getPageName(path);
    const pathName = getPathName(pageName);
    const component = getComponent(path);
    return {
      pageName,
      pathName,
      component,
    };
  });
}

export function App() {
  const routes = getRoutes(pages);

  return (
    <>
      <ThemeProvider>
        <Layout>
          {routes.map((route) => (
            <Route
              key={route.pageName}
              path={route.pathName}
              component={route.component}
            />
          ))}
        </Layout>
      </ThemeProvider>
    </>
  );
}
