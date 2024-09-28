import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PageLayout } from "../../templates/PageLayout";
import { Button } from "../../components/Button";
import { FormPost } from "../../components/FormPost";
import { FormSearch } from "../../components/Form/FormSearch";
import { SearchFormValues } from "../../components/Form/FormSearch/FormSearchSchema";
import { useListPosts } from "../../hooks/useListPosts";
import { usePermission } from "../../hooks/usePermission";
import { useSearchPost } from "../../hooks/useSearchPost";
import { Paths } from "../../routes/paths";

import styled from "./styles";

// Rename: timeline is better
const Posts = () => {
  const navigate = useNavigate();
  // TODO: Handler with loading e error
  const { getListPosts, postsList } = useListPosts()
  // TODO: Get proper user profile
  // const { hasPermission } = usePermission("teacher");
  const { hasPermission } = usePermission("student");
  // TODO: Add loading
  const { searchPost } = useSearchPost();

  useEffect(() => {
    void getListPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id: string) => {
    // TODO: Integração com o modal de deletar
    console.log(id);
  };

  const handleEdit = (id: string) => {
    // TODO: Integração com o modal de editar
    console.log(id);
  };

  const handleGoToPostDetails = (id: string) => {
    // Aqui é melhor tá na URL do que no state ._.
    navigate(`${Paths.POST_DETAILS}`, { state: { id: id } });
  };

  const handleSubmitSearch = async (data: SearchFormValues) => {
    const { word } = data;
    await searchPost(String(word))
  }

  return (
    <PageLayout title="Linha do tempo">
      <styled.Container>
        <FormSearch
          id="search-post"
          label="Buscar publicação:"
          onSubmit={handleSubmitSearch}
          placeholder="Buscar"
          srLabel="Campo para buscar uma publicação" />
        <div className="d-flex align-items-center justify-content-between">
          <div className=" mb-4 ">{hasPermission && <FormPost />}</div>
        </div>
        {postsList.length == 0 &&
          <p>Nenhum post encontrado</p>
        }
        {postsList.map((post, i: number) => (
          <div key={i} className="mb-3 custom-collapse">
            <div className="card">
              <div
                className="card-header"
                onClick={() => handleGoToPostDetails(post.id)}
              >
                <styled.Title>{post.title}</styled.Title>
              </div>
              <div className={`collapse show `}>
                <div className="card-body">
                  <styled.CardBody>
                    <div onClick={() => handleGoToPostDetails(post.id)}>
                      <styled.Description>{post.content}</styled.Description>
                      <b>Author: {post.author}</b>
                    </div>
                    {hasPermission ? (
                      <div className="d-flex flex-column align-items-start">
                        <Button
                          onClick={() => () => handleEdit(post.id)}
                          type="button"
                          variant="primary"
                        >
                          Editar
                        </Button>

                        <Button
                          onClick={() => handleDelete(post.id)}
                          type="button"
                          variant="danger"
                        >
                          Excluir
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Button
                          onClick={() => handleGoToPostDetails(post.id)}
                          type="button"
                          variant="primary"
                        >
                          Visualizar
                        </Button>
                      </div>
                    )}
                  </styled.CardBody>
                </div>
              </div>
            </div>
          </div>
        ))}
      </styled.Container>
    </PageLayout >
  );
};

export default Posts;
