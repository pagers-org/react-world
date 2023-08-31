export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <script></script>

        {children}
      </body>
    </html>
  );
}
