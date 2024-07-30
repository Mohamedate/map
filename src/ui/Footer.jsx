import { FaHeart } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className=" py-4 text-center font-semibold transition-all duration-300 dark:bg-dBlued dark:text-vLGrayL">
      <p className=" flex items-center justify-center gap-2">
        Created By
        <FaHeart className=" text-red-600" />
        <a
          className=" underline"
          href="https://atef.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Mohamed Atef
        </a>
      </p>
    </footer>
  );
}