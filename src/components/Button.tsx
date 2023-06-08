import { Link } from 'wouter';

type ButtonProps = {
  text: string;
  href: string;
};

function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href}>
      <div className="button">{text}</div>
    </Link>
  );
}

export default Button;
