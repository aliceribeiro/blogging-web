import type { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Navbar } from "../../components/Navbar";
import { Snackbar } from "../../components/Snackbar";
import { Typography, TypographyVariant } from "../../components/Typography";
import { usePermission } from "../../hooks/usePermission";
import { useSnackbarContext } from "../../hooks/useSnackbarContext";
import { Paths } from "../../routes/paths";

import "./styles.css";

type PageLayoutProps = PropsWithChildren<{
  title?: string;
  showNavbar?: boolean;
}>;

export const PageLayout = ({
  children,
  title,
  showNavbar = false,
}: PageLayoutProps) => {
  const navigate = useNavigate();
  const { snackbar } = useSnackbarContext();
  // TODO: Get proper user profile
  const { hasPermission } = usePermission('teacher');

  // TODO: Ajustar essa logiquinha aqui
  const showCreatePostButton = title && hasPermission;

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
