import { Button } from "../../components/Button";
import { FeedbackWrapper } from "../../templates/FeedbackWrapper";
import { Typography, TypographyVariant } from "../../components/Typography";

type ErrorStateProps = {
    onTryAgain: () => void;
}

export const ErrorState = ({ onTryAgain }: ErrorStateProps) => (
    <FeedbackWrapper>
        <Typography component='h2' variant={TypographyVariant['subtitle-bold']}>
            Ocorreu um erro
        </Typography>
        <Typography className='error-text'>
            Não conseguimos efetuar a busca. Por favor, tente novamente.
        </Typography>
        <Button onClick={onTryAgain}>Tentar novamente</Button>
    </FeedbackWrapper >
);
