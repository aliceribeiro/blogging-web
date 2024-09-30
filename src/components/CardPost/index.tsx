import type { PostResponse } from "../../api";

import { useNavigate } from "react-router-dom";

import { Typography } from "../../components/Typography";
import { Paths } from "../../routes/paths";

import "./styles.css";

type CardPostProps = {
    post: PostResponse;
};

export const CardPost = ({ post }: CardPostProps) => {
    const navigate = useNavigate();

    const { content, id, title } = post

    return (
        <div className="mb-3 custom-collapse">
            <div className="card" onClick={() => navigate(Paths.POST_DETAILS(id))}>
                <div className="card-header">
                    <Typography
                        className="post-card-title"
                        component="p"
                        variant="subtitle-medium"
                    >
                        {title}
                    </Typography>
                </div>
                <div className="collapse show">
                    <div className="card-body post-card-body">
                        <Typography
                            className="post-card-content"
                            component="p"
                            variant="paragraph-lg-regular"
                        >
                            {content}
                        </Typography>
                    </div>
                </div>
            </div>
        </div >
    );
};
