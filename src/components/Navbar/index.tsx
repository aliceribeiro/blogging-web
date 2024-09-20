import bloggingLogo from "/blogging.svg";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
      <div className="container">
        {/* TODO: redirecionar pra página inicial e deslogar o usuário */}
        <a
          className="navbar-brand d-flex gap-2"
          href="#"
          onClick={() => console.log("Cliquei em Blogging")}
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
