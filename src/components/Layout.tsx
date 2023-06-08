import { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = { children: ReactNode };

export function Layout({ children }: LayoutProps) {
  return (
    <div className="base-container">
      <Header />
      {children}
    </div>
  );
}
