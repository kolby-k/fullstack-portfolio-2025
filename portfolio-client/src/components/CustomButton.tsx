export interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  animatedBorder?: boolean;
  size?: "normal" | "medium";
  variant?: "primary" | "outline" | "ghost";
}

function CustomButton({
  label,
  onClick,
  animatedBorder = false,
  size = "normal",
  variant = "primary",
}: CustomButtonProps) {
  let baseClass: string;

  switch (variant) {
    case "primary":
      baseClass = "main-btn";
      break;
    case "outline":
      baseClass = "main-btn outline-btn";
      break;
    case "ghost":
      baseClass = "ghost-btn";
      break;
    default:
      baseClass = "main-btn";
      break;
  }

  return (
    <div
      className={`${baseClass} ${size === "medium" && "medium-btn"} ${
        animatedBorder && "animated-border"
      }`}
      onClick={onClick}
    >
      <div>{label}</div>
    </div>
  );
}

export default CustomButton;
