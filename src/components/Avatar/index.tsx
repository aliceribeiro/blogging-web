import { Typography, TypographyVariant } from "../../components/Typography";

import "./styles.css";

type AvatarProps = {
  src?: string;
  name?: string;
  size?: number;
}

export const Avatar = ({ name, size = 50 }: AvatarProps) => (
  <div
    aria-hidden
    className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      fontSize: `${size / 4}px`,
    }}
  >
    <Typography
      component="span"
      variant={TypographyVariant['paragraph-sm-medium']}
    >
      {name?.charAt(0).toUpperCase()}
    </Typography>
  </div>
);
