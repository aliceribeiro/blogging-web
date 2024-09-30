import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { DeletePostTemplate } from "../../components/DeletePostTemplate";
import { PageContentWrapper } from "../../templates/PageContentWrapper";
import { PageLayout } from "../../templates/PageLayout";
import { Typography } from "../../components/Typography";
import { usePermission } from "../../hooks/usePermission";
import { usePostDetails } from "../../hooks/usePostDetails";
import { dateHandler } from "../../utils/dateHandler";
import { Paths } from "../../routes/paths";

import "./styles.css";

const PostDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { hasPermission } = usePermission();

  const id = params.postId ?? ''

  const { getPostDetails, post, requestStatus } = usePostDetails(id);

  const showActionButtons = hasPermission && Boolean(Object.keys(post ?? {}).length);

  useEffect(() => {
    void getPostDetails();
  }, [id]);

  return (
    <PageLayout showCreatePostButton={hasPermission} showNavbar title="Detalhes da publicação">
      <PageContentWrapper
        onTryAgain={() => void getPostDetails()}
        status={requestStatus}
        variant="circular"
      >
        <section className="post-details-container">
          <header className="post-details-header">
            <div>
              <Typography component="h1" variant="subtitle-medium">{post?.title}</Typography>
              <div className="publish-date-container">
                <Typography component="p" variant="paragraph-xsmall-regular">
                  Data da publicação: {dateHandler(post?.createdAt).format('DD/MM/YYYY')}
                </Typography>
                <Typography
                  component="p"
                  variant="paragraph-xsmall-regular"
                >
                  Última edição: {dateHandler(post?.updatedAt ?? post?.createdAt).format('DD/MM/YYYY')}
                </Typography>
              </div>
            </div>
          </header>
          <hr />
          <Typography component="p">{post?.content}</Typography>
          {showActionButtons && (
            <div className="actions-container">
              <Button onClick={() => navigate(Paths.EDIT_POST(id))} variant="primary">
                Editar
              </Button>
              <DeletePostTemplate postId={id} />
            </div>
          )}
        </section>
      </PageContentWrapper>
    </PageLayout >
  );
};

export default PostDetails;
