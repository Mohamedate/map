import Container from "./Container";
import { MdMilitaryTech } from "react-icons/md";
export default function Army({ coatOfArms }) {
  const armyImage = coatOfArms?.png;
  return (
    <Container classes=" mt-20 md:mt-40">
      <p className="mb-8 flex items-center justify-center gap-2 text-3xl font-semibold dark:text-vLGrayL md:mb-10 md:text-6xl">
        <MdMilitaryTech className=" text-4xl" />
        Coat Of Arms
      </p>
      <div className=" m-auto grid max-w-xl place-content-center">
        <img className=" w-full" src={armyImage} alt="army" />
      </div>
    </Container>
  );
}
