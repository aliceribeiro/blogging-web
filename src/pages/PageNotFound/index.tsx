import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { FeedbackWrapper } from "../../templates/FeedbackWrapper";
import { PageLayout } from "../../templates/PageLayout";
import { Typography, TypographyVariant } from "../../components/Typography";
import { Paths } from "../../routes/paths";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <PageLayout>
            <FeedbackWrapper>
                <Typography component="h1" variant={TypographyVariant['title-bold']}>
                    Ops, página não econtrada!
                </Typography>
                <Typography>
                    Para ser redirecionado à página inicial, basta clicar no botão abaixo.
                </Typography>
                <Button onClick={() => navigate(Paths.BASE)}>Ir para o início</Button>
            </FeedbackWrapper>
        </PageLayout>
    );
};

export default PageNotFound;