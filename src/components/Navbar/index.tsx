import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes/paths";
import bloggingLogo from "/blogging.svg";

export const Navbar = () => {
  const navigate = useNavigate();

  // TODO: redirecionar pra página inicial e deslogar o usuário
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
          <img src={bloggingLogo} alt="Blogging logo" />
          <h4 className="m-0">Blogging</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
};
