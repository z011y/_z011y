import Nav from './HeaderNav';
import SubNav from './HeaderNavSub';

function Header() {
  return (
    <header className="fix-top w-full">
      <Nav />
      <SubNav />
    </header>
  );
}

export default Header;
