import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { deletePost as deletePostService } from "../api";
import { useErrorHandler } from "./useErrorHandler";
import { usePermission } from "./usePermission";
import { useSnackbar } from "./useSnackbar";
import { Paths } from "../routes/paths";

type UseDeleteParams = {
  id: string | number;
  onToggleModal: () => void;
};

export const useDeletePost = ({ id, onToggleModal }: UseDeleteParams) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { errorHandler } = useErrorHandler();
  const { token } = usePermission();
  const { setSnackbar } = useSnackbar();

  const deletePost = async () => {
    setLoading(true);
    try {
      await deletePostService(id, token);

      setSnackbar({
        closable: true,
        message: "Publicação excluída com sucesso.",
        variant: "success",
      });

      navigate(Paths.BASE);
    } catch (e: unknown) {
      errorHandler(e, 'Não foi possível excluir a publicação. Por favor, tente novamente mais tarde.');
    } finally {
      onToggleModal();
      setLoading(false);
    }
  };

  return {
    loading,
    deletePost,
  };
};
