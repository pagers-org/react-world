import { FooterContainer, FooterNavbar } from '@/layouts/footer/footer.css';

export const Footer = () => (
  <footer class={FooterNavbar}>
    <div class={FooterContainer}>
      <a href="/">Pagers</a>
      <span>
        An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code
        &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
);
