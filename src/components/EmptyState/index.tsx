import { FeedbackWrapper } from "../../templates/FeedbackWrapper";
import { Typography, TypographyVariant } from "../../components/Typography";

type EmptyStateProps = {
    description: string;
    title?: string;
};

export const EmptyState = ({ description, title }: EmptyStateProps) => (
    <FeedbackWrapper>
        <Typography component='h2' variant={TypographyVariant['subtitle-bold']}>
            {title || "Nenhuma publicação para exibir"}
        </Typography>
        <Typography>
            {description}
        </Typography>
    </FeedbackWrapper >
);
