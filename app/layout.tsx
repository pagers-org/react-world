import { ReactNode } from 'react';

import 'styles/normalize.css';
import 'styles/tailwind.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
