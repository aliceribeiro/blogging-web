import type { PropsWithChildren } from "react";

import "./styles.css";

type FeedbackWrapperProps = PropsWithChildren

export const FeedbackWrapper = ({ children }: FeedbackWrapperProps) => (
    <section className="feedback-container">
        {children}
    </section>
);