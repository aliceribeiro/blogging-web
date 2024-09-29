import type { PropsWithChildren } from "react";

type FeedbackWrapperProps = PropsWithChildren;

export const FeedbackWrapper = ({ children }: FeedbackWrapperProps) => (
    <section
        className="d-flex flex-column align-items-center justify-content-center gap-2 px-5"
        style={{ height: '50vh' }}
    >
        {children}
    </section>
);
