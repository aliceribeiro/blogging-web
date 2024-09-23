import { PageLayout } from "../../templates/PageLayout";
import { FormPost } from "../../components/FormPost";
import { usePermission } from "../../hooks/usePermission";

const Posts = () => {
  // TODO: Get proper user profile
  const { hasPermission } = usePermission('teacher');

  return (
    <PageLayout title="Linha do tempo">
      {hasPermission && <FormPost />}
      <div>Conteúdo</div>
    </PageLayout>
  );
};

export default Posts;
