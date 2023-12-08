import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className=" mb-16 flex w-fit items-center gap-2 px-4 py-1 font-semibold shadow-lg dark:text-vLGrayL"
    >
      <IoIosArrowRoundBack className=" text-2xl" />
      Back
    </button>
  );
}
