/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { DeletePostTemplate } from "../../components/DeletePostTemplate";
import { ListWrapper } from "../../templates/ListWrapper";
import { PageLayout } from "../../templates/PageLayout";
import { Typography, TypographyVariant } from "../../components/Typography";
import { usePermission } from "../../hooks/usePermission";
import { usePostDetails } from "../../hooks/usePostDetails";
import { dateHandler } from "../../utils/dateHandler";
import { Paths } from "../../routes/paths";

import "./styles.css";

const PostDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  // TODO: Get proper user profile and improve name
  const { hasPermission } = usePermission('teacher');

  const id = params.postId ?? ''

  const { getPostDetails, post, requestStatus } = usePostDetails(id);

  const showActionButtons = hasPermission && Boolean(Object.keys(post ?? {}).length);

  useEffect(() => {
    void getPostDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <PageLayout showCreatePostButton={hasPermission} showNavbar title="Detalhes da publicação">
      <ListWrapper onTryAgain={() => void getPostDetails()} status={requestStatus}>
        <section className="post-details-container">
          <header className="post-details-header">
            <div>
              <Typography component="h1" variant={TypographyVariant['subtitle-medium']}>{post?.title}</Typography>
              <div className="publish-date-container">
                <Typography component="p" variant={TypographyVariant['paragraph-xsmall-regular']}>
                  Data da publicação: {dateHandler(post?.createdAt).format('DD/MM/YYYY')}
                </Typography>
                <Typography
                  component="p"
                  variant={TypographyVariant['paragraph-xsmall-regular']}
                >
                  Última edição: {dateHandler(post?.updatedAt ?? post?.createdAt).format('DD/MM/YYYY')}
                </Typography>
                <div className="author-name">
                  <Avatar name={post?.author} size={32} />
                  <Typography component="p">{post?.author}</Typography>
                </div>
              </div>
            </div>
          </header>
          <hr />
          <Typography component="p">{post?.content}</Typography>
          {showActionButtons && (
            <div className="actions-container">
              <Button onClick={() => navigate(Paths.EDIT_POST(id))} variant="secondary">
                Editar
              </Button>
              <DeletePostTemplate postId={id} />
            </div>
          )}
        </section>
      </ListWrapper>
    </PageLayout>
  );
};

export default PostDetails;
