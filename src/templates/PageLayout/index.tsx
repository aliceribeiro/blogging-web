import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Navbar } from "../../components/Navbar";
import { Snackbar } from "../../components/Snackbar";
import { Typography, TypographyVariant } from "../../components/Typography";
import { useSnackbarContext } from "../../hooks/useSnackbarContext";
import { Paths } from "../../routes/paths";

import "./styles.css";

type PageLayoutProps = PropsWithChildren<{
  title?: string;
  showCreatePostButton?: boolean;
  showNavbar?: boolean;
}>;

export const PageLayout = ({
  children,
  title,
  showCreatePostButton = false,
  showNavbar = false,
}: PageLayoutProps) => {
  const navigate = useNavigate();
  const { snackbar } = useSnackbarContext();

  return (
    <>
      {showNavbar && <Navbar />}
      <main className="container mt-5 mb-5">
        <header className="header-container">
          {title && (
            <Typography component="h1" variant={TypographyVariant["title-bold"]}>
              {title}
            </Typography>
          )}
          {showCreatePostButton && <Button onClick={() => navigate(Paths.CREATE_POST)} variant="primary">
            Criar nova publicação
          </Button>}
        </header>
        <section className="row justify-content-center">{children}</section>
        <Snackbar
          closable={snackbar.closable}
          message={snackbar.message}
          open={snackbar.open}
          variant={snackbar.variant}
        />
      </main>
    </>
  );
};
