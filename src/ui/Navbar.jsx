import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa6";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  function handleDarkLight() {
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
  }
  return (
    <nav className=" py-7 shadow-md transition-colors dark:bg-dBlued dark:text-vLGrayL">
      <Container classes=" flex justify-between">
        <Link to="/" className=" flex text-xl font-bold">
          Where in the World?
        </Link>
        <button
          onClick={handleDarkLight}
          className=" group/icon flex items-center gap-2 font-semibold"
        >
          {isDark ? (
            <FaSun className=" group-hover/icon:scale-125" />
          ) : (
            <MdDarkMode className=" group-hover/icon:scale-125" />
          )}
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </Container>
    </nav>
  );
}
