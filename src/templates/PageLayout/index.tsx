import type { PropsWithChildren } from "react";

import { FormPost } from "../../components/FormPost";
import { Navbar } from "../../components/Navbar";
import { Snackbar } from "../../components/Snackbar";
import { Typography, TypographyVariant } from "../../components/Typography";
import { usePermission } from "../../hooks/usePermission";
import { useSnackbar } from "../../hooks/useSnackbar";

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
  // TODO: Get proper user profile
  const { hasPermission } = usePermission('teacher');
  const snackbar = useSnackbar();

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
          {showCreatePostButton && <FormPost />}
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
