import { themeClass } from "./page.css" 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={themeClass}>{children}</body>
    </html>
  )
}
