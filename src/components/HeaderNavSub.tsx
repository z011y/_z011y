import { Link } from 'wouter';

function SubNav() {
  return (
    <nav className="center h-2 border-b bg-bg">
      <div className="flow">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}

export default SubNav;
