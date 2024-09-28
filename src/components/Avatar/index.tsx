import "./styles.css"

type AvatarProps = {
  src?: string;
  name?: string;
  size?: number;
}

export const Avatar = ({ src, name, size = 50 }: AvatarProps) => (
  <div
    aria-hidden
    className="d-flex align-items-center justify-content-center rounded-circle bg-secondary text-white"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      fontSize: `${size / 4}px`,
    }}
  >
    {src ? (
      <img
        src={src}
        className="rounded-circle avatar-image"
      />
    ) : (
      <span>{name?.charAt(0).toUpperCase() || "?"}</span>
    )}
  </div>
);
