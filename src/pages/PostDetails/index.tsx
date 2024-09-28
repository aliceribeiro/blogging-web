import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Avatar from "../../components/Avatar";
import { Button } from "../../components/Button";
import { PageLayout } from "../../templates/PageLayout";
import { usePostDetails } from "../../hooks/usePostDetails"
import { Paths } from "../../routes/paths";
import bloggingLogo from "/blogging.svg";
import DATA from "../../utils/date";

import styled from "./styles";

const PostDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const id = String(location?.state?.id);

  // TODO: Handle error and loading
  const { getPostDetails, post } = usePostDetails(id);

  useEffect(() => {
    void getPostDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <PageLayout title="Detalhes da publicação">
      <styled.Flex>
        <Button onClick={() => navigate(Paths.POSTS)} type="button" variant="tertiary">
          Voltar
        </Button>
      </styled.Flex>
      <styled.Container>
        <Avatar src={bloggingLogo} size={100} aria-hidden />
        <styled.Title>{post?.title}</styled.Title>
        <p>{post?.content}</p>
        <div>
          <styled.CreationDate>Data de criação:</styled.CreationDate>
          <span>{DATA.format(new Date(String(post?.createdAt)), "dd/MM/yyyy")}</span>
        </div>
      </styled.Container>
    </PageLayout>
  );
};

export default PostDetails;
