import { PageLayout } from "../../templates/PageLayout";
import { FormLogin } from "../../components/FormLogin";
import { Typography, TypographyVariant } from "../../components/Typography";

import bloggingLogo from "/blogging.svg";
import styled from "./styles";

const Login = () => (
  <PageLayout>
    <styled.Container>
      <styled.FormContainer>
        <img src={bloggingLogo} aria-hidden />
        <Typography component="h1" variant={TypographyVariant['title-bold']}>
          Blogging
        </Typography>
        <FormLogin />
      </styled.FormContainer>
    </styled.Container>
  </PageLayout >
);

export default Login;
