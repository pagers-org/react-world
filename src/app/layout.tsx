// import { centerAlign } from './layout.css';
import '../styles/global.css';
import '../styles/theme.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
