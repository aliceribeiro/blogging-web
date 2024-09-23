import type { PropsWithChildren } from "react";

import { Navbar } from "../../components/Navbar";
import { Typography, TypographyVariant } from "../../components/Typography";

type PageLayoutProps = PropsWithChildren<{
  title?: string;
}>

export const PageLayout = ({ children, title }: PageLayoutProps) => (
  <>
    <Navbar />
    <main className="container mt-5">
      <header className="d-flex justify-content-between">
        {title && <Typography component="h1" variant={TypographyVariant['title-bold']}>{title}</Typography>}
      </header>
      <section className="row justify-content-center">{children}</section>
    </main>
  </>
);
