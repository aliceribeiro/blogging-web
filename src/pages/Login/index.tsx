import { FormLogin } from "../../components/FormLogin";
import { Typography } from "../../components/Typography";
import { Snackbar } from "../../components/Snackbar";
import { useSnackbarContext } from "../../hooks/useSnackbarContext";

import bloggingLogo from "/blogging.svg";

const Login = () => {
  const { snackbar } = useSnackbarContext();

  return (
    <main className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <section
        className="d-flex justify-content-center align-items-center w-75 gap-4 py-5 px-1 bg-light rounded small shadow"
        style={{ maxWidth: '560px' }}
      >
        <div className="d-flex flex-column align-items-center w-100">
          <img src={bloggingLogo} aria-hidden />
          <Typography component="h1" variant="title-bold">
            Blogging
          </Typography>
          <FormLogin />
          <Snackbar
            closable={snackbar.closable}
            message={snackbar.message}
            open={snackbar.open}
            variant={snackbar.variant}
          />
        </div>
      </section>
    </main>
  );
};

export default Login;
