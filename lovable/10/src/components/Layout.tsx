import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <SiteHeader />
    <div className="flex-1">{children}</div>
    <SiteFooter />
  </div>
);

export default Layout;
