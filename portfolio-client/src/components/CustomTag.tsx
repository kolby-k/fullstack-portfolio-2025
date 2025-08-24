export type CustomTagProps = {
  label?: string;
  size?: "small" | "medium" | "large";
};
function CustomTag({ label = "Tag 1", size = "medium" }: CustomTagProps) {
  let sizeStyle: string;
  switch (size) {
    case "small":
      sizeStyle = "text-sm";
      break;
    case "medium":
      sizeStyle = "text-md font-medium";
      break;
    case "large":
      sizeStyle = "text-lg font-semibold";
      break;
    default:
      sizeStyle = "text-md";
      break;
  }
  return (
    <div
      className={`text-center leading-5 rounded-full border border-(--tag-border-blue) bg-(--tag-bg-blue) text-(--tag-text-blue) px-3 py-2 shadow-[0_0_20px_-6px_rgba(56,189,248,.6)] ${sizeStyle}`}
    >
      {label}
    </div>
  );
}

export default CustomTag;
