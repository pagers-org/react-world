import { getThemeCookieValue } from "@/utils/getThemeCookieValue";
import { generateThemeScript } from "@/utils/generateThemeScript";
import Card from "@/components/composables/Card/Card";
import Header from "@/components/Header/Header";
import ContentCard from "@/components/composables/Card/ContentCard";
import Footer from "@/components/composables/Footer/Footer";
import "./global.css";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentTheme = getThemeCookieValue();
  const themeInitializerScript = generateThemeScript(currentTheme);

  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning={true}>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitializerScript }}
        ></script>

        <Card>
          <Header currentTheme={currentTheme} />
          <ContentCard>{children}</ContentCard>
          <Footer />
        </Card>
        <div id="toast-root"></div>
      </body>
    </html>
  );
}
