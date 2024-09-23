import { PageLayout } from "../../templates/PageLayout";
import { FormPost } from "../../components/FormPost";
import { usePermission } from "../../hooks/usePermission";
import styled from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { Paths } from "../../routes/paths";
import { Button } from "../../components/Button";

const Posts = () => {
  // TODO: Get proper user profile
  //const { hasPermission } = usePermission("teacher");
  const { hasPermission } = usePermission("student");
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Record<string, any>>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    //Mock
    setPosts([
      {
        id: "1",
        title: "Post 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.",
        createdAt: "2024-09-22T00:00:00.000Z",
      },
      {
        id: "2",
        title: "Post 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.",
        createdAt: "2024-09-22T00:00:00.000Z",
      },
      {
        id: "3",
        title: "Post 3",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.",
        createdAt: "2024-09-22T00:00:00.000Z",
      },
    ]);
  }, []);

  const handleDelete = (id: string) => {
    // TODO: Integração com o delete
    console.log(id);
  };

  const handleEdit = (id: string) => {
    // TODO: Integração com o update
    console.log(id);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleGoToPostDetails = (id: string) => {
    navigate(Paths.POST_DETAILS);
    console.log(id);
  };

  return (
    <PageLayout title="Linha do tempo">
      <styled.Container>
        <div className="d-flex align-items-center justify-content-between">
          <styled.Search>
            <Input
              type="text"
              name="filter"
              placeholder="escrever palavra chave"
              value={filter}
              onChange={handleInput}
              label="Buscar por:"
            />
          </styled.Search>
          <div className=" mb-4 ">{hasPermission && <FormPost />}</div>
        </div>
        {posts.map((post: string | any) => (
          <div key={post.id} className="mb-3 custom-collapse">
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
                    </div>
                    {/* TODO: Verificar validação */}
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
                          variant="tertiary"
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
    </PageLayout>
  );
};

export default Posts;
