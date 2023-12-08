import { motion } from "framer-motion";
import { Link } from "react-router-dom";
let del = 0;
export const countryAnim = {
  initial: {
    opacity: 0,
    y: 30,
  },
  enter: (i) => {
    if (del > 3) del = 0;
    else del += 1;
    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: del * 0.1,
      },
    };
  },
};
export default function Country({ country, index }) {
  const {
    cca3,
    flags: { png: flag },
    name: { common: name },
    region,
    population,
    capital,
  } = country;

  return (
    <motion.div
      variants={countryAnim}
      whileInView="enter"
      initial="initial"
      viewport={{ once: true }}
      // animate="enter"
      custom={index}
    >
      <Link to={`/detail/${cca3}`} id={cca3}>
        <div className=" h-full cursor-pointer overflow-hidden rounded-md shadow-md hover:shadow-lg dark:bg-dBlued dark:text-vLGrayL dark:shadow-2xl">
          <img className=" h-48 w-full" src={flag} alt="country" />
          <p className="px-6 py-6 text-xl font-bold">{name}</p>
          <div className="flex flex-col gap-1 px-6 pb-10">
            <p>
              <span className=" font-semibold">Population:</span>{" "}
              {population.toLocaleString()}
            </p>
            <p>
              <span className=" font-semibold">Region:</span> {region}
            </p>
            <p>
              <span className=" font-semibold">Capital:</span> {capital?.at(0)}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
