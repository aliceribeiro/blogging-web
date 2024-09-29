/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { DeletePostTemplate } from "../../components/DeletePostTemplate";
import { ListWrapper } from "../../templates/ListWrapper";
import { PageLayout } from "../../templates/PageLayout";
import { Typography, TypographyVariant } from "../../components/Typography";
import { usePermission } from "../../hooks/usePermission";
import { usePostDetails } from "../../hooks/usePostDetails";
import { Paths } from "../../routes/paths";
import DATA from "../../utils/date";

import "./styles.css";

const PostDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // TODO: Get proper user profile and improve name
  const { hasPermission } = usePermission('teacher');

  const id = String(location?.state?.id);

  const { getPostDetails, post, requestStatus } = usePostDetails(id);

  const showActionButtons = hasPermission && Boolean(Object.keys(post ?? {}).length);

  useEffect(() => {
    void getPostDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <PageLayout showNavbar title="Detalhes da publicação">
      <ListWrapper onTryAgain={() => void getPostDetails()} status={requestStatus}>
        <section className="post-details-container">
          <header className="post-details-header">
            <div>
              <Typography component="h1" variant={TypographyVariant['subtitle-medium']}>{post?.title}</Typography>
              <div className="publish-date-container">
                <Typography component="p" variant={TypographyVariant['paragraph-xsmall-regular']}>
                  Data da publicação: {DATA.format(new Date(String(post?.createdAt)), "dd/MM/yyyy")}
                </Typography>
                <Typography
                  component="p"
                  variant={TypographyVariant['paragraph-xsmall-regular']}
                >
                  Última edição: {DATA.format(new Date(String(post?.updatedAt ?? post?.createdAt)), "dd/MM/yyyy")}
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
