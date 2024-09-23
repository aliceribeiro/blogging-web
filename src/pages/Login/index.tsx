import { PageLayout } from "../../templates/PageLayout";
import styled from "./styles";
import bloggingLogo from "/blogging.svg";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes/paths";
import { useState } from "react";
import Input from "../../components/Input";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async () => {
    console.log("form", form);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <PageLayout hasNavbar={false}>
      <styled.Container>
        <styled.FormContainer>
          <img src={bloggingLogo} alt="Blogging logo" />
          <h1 className="m-0">Blogging</h1>
          <div>
            <Input
              type="text"
              name="username"
              placeholder="Digite o nome de usuário"
              value={form.username}
              onChange={handleInput}
              label="Usuário"
            />

            <Input
              type="password"
              name="password"
              placeholder="Digite a senha"
              value={form.password}
              onChange={handleInput}
              label="Senha"
            />
          </div>

          <Button
            onClick={handleSubmit}
            type="submit"
            variant="primary"
            disabled={!form.username || !form.password}
          >
            Entrar
          </Button>
          <Button onClick={() => navigate(Paths.BASE)} type="button" variant="">
            Voltar
          </Button>
        </styled.FormContainer>
      </styled.Container>
    </PageLayout>
  );
};

export default Login;
