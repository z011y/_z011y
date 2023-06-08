import { GithubLogo } from '@phosphor-icons/react';

import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

function Nav() {
  return (
    <nav className="[ split ] [ px bg-bg border-b h-4 ]">
      <div>
        <Logo />
      </div>
      <div className="flow">
        <p style={{ fontFamily: 'var(--mono)', fontSize: '12px' }}>v0.00</p>
        <ThemeToggle />
        <a
          href="https://github.com/z011y"
          target="_blank"
          className="a-icon"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <GithubLogo />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
