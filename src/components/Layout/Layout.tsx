import React from "react";
import LayoutDesktop from "./LayoutDesktop";
import LayoutMobile from "./LayoutMobile";

type LayoutProps = {
  children: React.ReactNode;
  desktop?: boolean;
}

const Layout = ({ children, desktop }: LayoutProps) => {

  if (!desktop) {
    return <LayoutMobile>{children}</LayoutMobile>
  }

  return <LayoutDesktop>{children}</LayoutDesktop>;
}

export default Layout;
