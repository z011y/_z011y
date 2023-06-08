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
        <ThemeToggle />
        <a href="https://github.com/z011y" target="_blank" className="a-icon">
          <GithubLogo />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
