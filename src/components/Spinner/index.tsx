import { FeedbackWrapper } from "../../templates/FeedbackWrapper";

export const Spinner = () => (
    <FeedbackWrapper>
        <div
            className="spinner-grow text-light"
            style={{ width: '3rem', height: '3rem' }}
            role="progressbar"
        >
            <span className="visually-hidden">Carregando...</span>
        </div >
    </FeedbackWrapper >
);
