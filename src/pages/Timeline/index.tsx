import type { PostResponse } from "../../api";

import { useEffect, useState } from "react";

import { CardPost } from "../../components/CardPost";
import { EmptyState } from "../../components/EmptyState";
import { ListWrapper } from "../../templates/ListWrapper";
import { FormSearch } from "../../components/Form/FormSearch";
import { PageLayout } from "../../templates/PageLayout";
import { SearchFormValues } from "../../components/Form/FormSearch/FormSearchSchema";
import { useListPosts } from "../../hooks/useListPosts";
import { useSearchPost } from "../../hooks/useSearchPost";

import styled from "./styles";

const Timeline = () => {
  const [currentList, setCurrentList] = useState<Array<PostResponse>>([])

  const { getListPosts, postsList, requestStatus } = useListPosts()
  const { loading, searchPost, posts } = useSearchPost();

  const pageState = loading ? 'loading' : requestStatus;

  const handleSubmitSearch = async (data: SearchFormValues) => {
    const { word } = data;
    await searchPost(String(word));
  };

  useEffect(() => {
    setCurrentList(postsList)
  }, [postsList])

  useEffect(() => {
    setCurrentList(posts)
  }, [posts])

  useEffect(() => {
    void getListPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageLayout showNavbar title="Linha do tempo">
      <styled.Container>
        <FormSearch
          id="search-post"
          label="Buscar publicação:"
          onSubmit={handleSubmitSearch}
          placeholder="Buscar"
          srLabel="Campo para buscar uma publicação"
          disableButton={loading}
        />
        <ListWrapper onTryAgain={() => void getListPosts()} status={pageState}>
          {!currentList.length ?
            <EmptyState description="Que tal criar uma publicação com o tema que estava buscando?" />
            : (
              <section>
                {currentList.map((post, index) => (
                  <CardPost key={index} post={post} />
                ))}
              </section>
            )}
        </ListWrapper>
      </styled.Container>
    </PageLayout>
  );
};

export default Timeline;
