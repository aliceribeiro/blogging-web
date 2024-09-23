import { useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "../../components/Button";
import { PageLayout } from "../../templates/PageLayout";
import styled from "./styles";
import bloggingLogo from "/blogging.svg";
import { Paths } from "../../routes/paths";
import DATA from "../../utils/date";

const PostDetails = () => {
  const navigate = useNavigate();
  return (
    <PageLayout title="Detalhes da publicação">
      <styled.Flex>
        <Button onClick={() => navigate(Paths.POSTS)} type="button" variant="">
          Voltar
        </Button>
      </styled.Flex>
      <styled.Container>
        <Avatar src={bloggingLogo} alt="logo" name="" size={100} />

        <styled.Title>Titulo</styled.Title>

        <p>Descrição</p>
        <div>
          <styled.CreationDate>Data de criação:</styled.CreationDate>
          <span>{DATA.format(new Date(), "dd/MM/yyyy")}</span>
        </div>
      </styled.Container>
    </PageLayout>
  );
};

export default PostDetails;
