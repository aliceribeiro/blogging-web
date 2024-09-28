import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "../../components/Button";
import { PageLayout } from "../../templates/PageLayout";
import styled from "./styles";
import bloggingLogo from "/blogging.svg";
import { Paths } from "../../routes/paths";
import DATA from "../../utils/date";
import { useEffect, useState } from "react";
import api from "../../axios/api";
import IPost from "../../interfaces/Post";

const PostDetails = () => {
  const location = useLocation();
  const [post, setPost] = useState<IPost>()
  const [postDate, setPostDate] = useState()

  useEffect(() => {
    api.get(`/posts/${location.state.id}`)
      .then(response => {
        setPost(response.data.data)
        setPostDate(DATA.format(new Date(response.data.data.createdAt), "dd/MM/yyyy"))
      })
      .catch(error => {
        console.error("Error get post: ", error)
      })
  }, [])
  const navigate = useNavigate();
  return (
    <PageLayout title="Detalhes da publicação">
      <styled.Flex>
        <Button onClick={() => navigate(Paths.POSTS)} type="button" variant="tertiary">
          Voltar
        </Button>
      </styled.Flex>
      <styled.Container>
        <Avatar src={bloggingLogo} alt="logo" name="" size={100} />

        <styled.Title>{post?.title}</styled.Title>

        <p>{post?.content}</p>
        <div>
          <styled.CreationDate>Data de criação:</styled.CreationDate>
          <span>{postDate}</span>
        </div>
      </styled.Container>
    </PageLayout>
  );
};

export default PostDetails;
