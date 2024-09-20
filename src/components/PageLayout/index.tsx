import { Navbar } from "../Navbar";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <>
      <Navbar />

      <main className="container mt-5">
        <div className="d-flex justify-content-between">
          {title && <h3 className="link-primary">{title}</h3>}
        </div>
        <div className="row justify-content-center">{children}</div>
      </main>
    </>
  );
};

export default PageLayout;
