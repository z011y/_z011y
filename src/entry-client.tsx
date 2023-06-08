import { hydrateRoot } from 'react-dom/client';
import { Router } from 'wouter';
import { App } from './App';

const root = document.getElementById('root');

if (root) {
  hydrateRoot(
    root,
    <Router>
      <App />
    </Router>
  );
  console.log('hydrated');
}
