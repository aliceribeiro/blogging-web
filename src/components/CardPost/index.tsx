import type { PostResponse } from "../../api";

import { useNavigate } from "react-router-dom";

import { DeletePostTemplate } from "../../components/DeletePostTemplate";
import { FormEditPost } from "../../components/FormEditPost";
import { usePermission } from "../../hooks/usePermission";
import { Paths } from "../../routes/paths";

import styled from "./styles";

type CardPostProps = {
    post: PostResponse;
};

export const CardPost = ({ post }: CardPostProps) => {
    const navigate = useNavigate();
    // TODO: Get proper user profile and improve name
    const { hasPermission } = usePermission("student");

    const { author, content, id, title } = post

    return (
        <div className="mb-3 custom-collapse">
            <div className="card" onClick={() => navigate(`${Paths.POST_DETAILS}`, { state: { id } })}>
                <div className="card-header">
                    <styled.Title>{title}</styled.Title>
                </div>
                <div className="collapse show">
                    <div className="card-body">
                        <styled.CardBody>
                            <div>
                                <styled.Description>{content}</styled.Description>
                                <b>Autor: {author}</b>
                            </div>
                            {hasPermission && (
                                <div className="d-flex flex-column align-items-start">
                                    <FormEditPost defaultValues={{ content, title }} postId={id} />
                                    <DeletePostTemplate postId={id} />
                                </div>
                            )}
                        </styled.CardBody>
                    </div>
                </div>
            </div>
        </div >
    );
};
