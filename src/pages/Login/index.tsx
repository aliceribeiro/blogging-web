import { FormLogin } from "../../components/FormLogin";
import { Typography, TypographyVariant } from "../../components/Typography";

import bloggingLogo from "/blogging.svg";

const Login = () => (
  <main className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <section
      className="d-flex justify-content-center align-items-center w-75 gap-4 py-5 px-1 bg-light rounded small shadow"
      style={{ maxWidth: '560px' }}
    >
      <div className="d-flex flex-column align-items-center w-100">
        <img src={bloggingLogo} aria-hidden />
        <Typography component="h1" variant={TypographyVariant['title-bold']}>
          Blogging
        </Typography>
        <FormLogin />
      </div>
    </section>
  </main>
);

export default Login;
