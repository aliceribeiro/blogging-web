import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { usePermission } from "../../hooks/usePermission";
import { Paths } from "../../routes/paths";
import bloggingLogo from "/blogging.svg";

export const Navbar = () => {
  const navigate = useNavigate();
  const { hasPermission } = usePermission();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
      <div className="container">
        <a
          className="navbar-brand d-flex gap-2"
          href={Paths.BASE}
          onClick={() => navigate(Paths.BASE, { replace: true })}
        >
          <img src={bloggingLogo} aria-hidden />
          <h4 className="m-0">Blogging</h4>
        </a>
        <Button onClick={() => navigate(Paths.LOGIN)} srLabel="Entrar na sua conta" variant="secondary">
          {hasPermission ? 'Sair' : 'Entrar'}
        </Button>
      </div>
    </nav>
  );
};
