import { motion } from "framer-motion";

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

export default function CountryAnim({ children, index }) {
  return (
    <motion.div
      variants={countryAnim}
      whileInView="enter"
      initial="initial"
      viewport={{ once: true }}
      custom={index}
    >
      {children}{" "}
    </motion.div>
  );
}
