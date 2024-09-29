import "./styles.css";

type SkeletonProps = {
    height: string;
    srLabel?: string;
    styles?: Record<string, string | number>;
    width: string;
};

export const Skeleton = ({ height, srLabel = 'Carregando', styles, width }: SkeletonProps) => (
    <div
        className="skeleton"
        style={{ height, width, ...styles }}
        role="progressbar"
    >
        <span className="sr-only">{srLabel}</span>
    </div>
);

// ta parecendeo