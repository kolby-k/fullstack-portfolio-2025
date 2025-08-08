import useTheme from "../hooks/useTheme";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
export default function ThemeToggle() {
  const { toggle, dark } = useTheme();
  return (
    <>
      {dark ? (
        <IoMdSunny className="cursor-pointer" onClick={toggle} size={26} />
      ) : (
        <IoMdMoon className="cursor-pointer" onClick={toggle} size={26} />
      )}
    </>
  );
}
