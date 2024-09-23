interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, name, size = 50 }) => {
  return (
    <div
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
          alt={alt}
          className="rounded-circle"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span>{name?.charAt(0).toUpperCase() || "?"}</span>
      )}
    </div>
  );
};

export default Avatar;
