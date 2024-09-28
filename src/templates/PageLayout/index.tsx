import type { PropsWithChildren } from "react";

import { Navbar } from "../../components/Navbar";
import { Snackbar } from "../../components/Snackbar";
import { Typography, TypographyVariant } from "../../components/Typography";
import { useSnackbar } from "../../hooks/useSnackbar";

type PageLayoutProps = PropsWithChildren<{
  title?: string;
  showNavbar?: boolean;
}>;

export const PageLayout = ({
  children,
  title,
  showNavbar = false,
}: PageLayoutProps) => {
  const snackbar = useSnackbar();

  return (
    <>
      {showNavbar && <Navbar />}
      <main className="container mt-5">
        <header className="d-flex justify-content-between">
          {title && (
            <Typography component="h1" variant={TypographyVariant["title-bold"]}>
              {title}
            </Typography>
          )}
        </header>
        <section className="row justify-content-center">{children}</section>
      </main>
      <Snackbar
        closable={snackbar.closable}
        message={snackbar.message}
        variant={snackbar.variant}
      />
    </>
  );
};
