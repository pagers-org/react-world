import { container } from '@/styles/common.css';
import { footer, footerIcon, footerLink } from '@/styles/layout.css';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={container}>
        <BsGithub className={footerIcon} />
        <Link href="https://github.com/hyeon9782/react-world/tree/team4/jeong-ho" className={footerLink}>
          Fork on GitHub
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
