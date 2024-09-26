import { useNavigate } from "react-router-dom";

import { PageLayout } from "../../templates/PageLayout";
import { Paths } from "../../routes/paths";
import WelcomeIllustration from "../../assets/illustrations/Welcome.svg";

const Initial = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <img
        src={WelcomeIllustration}
        className="rounded mx-auto d-block w-25 h-25"
        alt="Ilustração de boas-vindas"
      />

      <div className="d-flex flex-column align-items-center p-5 text-center">
        <h3>Bem-vindo(a) ao Blogging</h3>
        <h5 className="text-primary">Deseja entrar como:</h5>
        <div className="d-grid gap-2 mt-3 d-md-flex justify-content-center w-100">
          <button
            className="btn btn-primary col-12 col-md-4"
            type="button"
            onClick={() => {
              navigate(Paths.POSTS);
            }}
          >
            Aluno
          </button>
          <button
            className="btn btn-primary col-12 col-md-4"
            type="button"
            onClick={() => navigate(Paths.LOGIN)}
          >
            Professor
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Initial;
