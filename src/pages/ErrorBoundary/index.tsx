import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { FeedbackWrapper } from "../../templates/FeedbackWrapper";
import { PageLayout } from "../../templates/PageLayout";
import { Typography } from "../../components/Typography";
import { Paths } from "../../routes/paths";

export const ErrorBoundary = () => {
    const navigate = useNavigate();

    return (
        <PageLayout>
            <FeedbackWrapper>
                <Typography component="h2" variant="title-bold">
                    Ops, ocorreu um problema!
                </Typography>
                <Typography>
                    Por favor, clique no botão abaixo para ser redirecionado à página inicial.
                </Typography>
                <Button onClick={() => navigate(Paths.BASE)}>Voltar ao início</Button>
            </FeedbackWrapper>
        </PageLayout>
    );
};