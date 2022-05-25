import { LayoutWrapper, Main } from "./styled";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
  isHeader: boolean;
};

export default function Layout({ children, isHeader }: LayoutProps) {
  return (
    <LayoutWrapper>
      {isHeader && <Header />}
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
}
