import { useEffect } from "react";

import { CardPost } from "../../components/CardPost";
import { EmptyState } from "../../components/EmptyState";
import { FormPost } from "../../components/FormPost";
import { ListWrapper } from "../../templates/ListWrapper";
import { FormSearch } from "../../components/Form/FormSearch";
import { PageLayout } from "../../templates/PageLayout";
import { SearchFormValues } from "../../components/Form/FormSearch/FormSearchSchema";
import { useListPosts } from "../../hooks/useListPosts";
import { usePermission } from "../../hooks/usePermission";
import { useSearchPost } from "../../hooks/useSearchPost";

import styled from "./styles";

const Timeline = () => {
  const { getListPosts, postsList, requestStatus } = useListPosts()
  // TODO: Get proper user profile
  // const { hasPermission } = usePermission("teacher");
  const { hasPermission } = usePermission("student");
  // TODO: Add loading e o resultado né
  const { searchPost } = useSearchPost();

  useEffect(() => {
    void getListPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmitSearch = async (data: SearchFormValues) => {
    const { word } = data;
    await searchPost(String(word));
  };

  return (
    <PageLayout showNavbar title="Linha do tempo">
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
        <ListWrapper onTryAgain={() => void getListPosts()} status={requestStatus}>
          {!postsList.length ? <EmptyState description="Ainda não há nenhuma publicação" /> : (
            <section>
              {postsList.map((post, index) => (
                <CardPost key={index} post={post} />
              ))}
            </section>
          )}
        </ListWrapper>
      </styled.Container>
    </PageLayout >
  );
};

export default Timeline;
