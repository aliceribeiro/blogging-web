import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Paths } from "../../routes/paths";
import bloggingLogo from "/blogging.svg";

// TODO: Checar se o usuário está logando e adicionar botão de logout
export const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate(Paths.BASE, { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
      <div className="container">
        <a
          className="navbar-brand d-flex gap-2"
          href={Paths.BASE}
          onClick={handleClick}
        >
          <img src={bloggingLogo} aria-hidden />
          <h4 className="m-0">Blogging</h4>
        </a>
        <Button onClick={() => navigate(Paths.LOGIN)} srLabel="Entrar na sua conta" variant="secondary">
          Entrar
        </Button>
      </div>
    </nav>
  );
};
