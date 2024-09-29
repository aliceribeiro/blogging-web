import type { PostResponse } from "../../api";

import { useNavigate } from "react-router-dom";

import { Typography, TypographyVariant } from "../../components/Typography";
import { Paths } from "../../routes/paths";

import "./styles.css";

type CardPostProps = {
    post: PostResponse;
};

export const CardPost = ({ post }: CardPostProps) => {
    const navigate = useNavigate();

    const { author, content, id, title } = post

    return (
        <div className="mb-3 custom-collapse">
            <div className="card" onClick={() => navigate(`${Paths.POST_DETAILS}`, { state: { id, title } })}>
                <div className="card-header">
                    <Typography
                        className="post-card-title"
                        component="p"
                        variant={TypographyVariant['subtitle-medium']}
                    >
                        {title}
                    </Typography>
                </div>
                <div className="collapse show">
                    <div className="card-body post-card-body">
                        <Typography
                            className="post-card-content"
                            component="p"
                            variant={TypographyVariant['paragraph-lg-regular']}
                        >
                            {content}
                        </Typography>
                        <Typography
                            component="p"
                            variant={TypographyVariant['paragraph-sm-regular']}
                        >
                            Autor: {author}
                        </Typography>
                    </div>
                </div>
            </div>
        </div >
    );
};
