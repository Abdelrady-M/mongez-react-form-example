import { MantineProvider } from "@mantine/core";
import Footer from "../Footer";
import Header from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <MantineProvider
        defaultColorScheme="auto"
        cssVariablesSelector="html"
        withCssVariables={true}
        deduplicateCssVariables={true}
        withStaticClasses={true}
        withGlobalClasses={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </MantineProvider>
    </>
  );
}
