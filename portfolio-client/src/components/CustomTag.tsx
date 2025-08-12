function CustomTag({ label = "Tag 1" }: { label?: string }) {
  return (
    <div className="flex text-sm border-1 border-(--tag-border-blue) p-2 rounded-lg bg-(--tag-bg-blue) text-(--tag-text-blue)">
      {label}
    </div>
  );
}

export default CustomTag;
