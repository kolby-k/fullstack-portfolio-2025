export interface CustomButtonProps {
  label: string;
  onClick: () => void;
  animatedBorder?: boolean;
}

function CustomButton({
  label,
  onClick,
  animatedBorder = false,
}: CustomButtonProps) {
  return (
    <div
      className={`theme-btn ${animatedBorder && "animated-border"}`}
      onClick={onClick}
    >
      <div>{label}</div>
    </div>
  );
}

export default CustomButton;
