export const menu = {
  initial: {
    height: 0,
    width: 0,
  },
  enter: {
    width: "100%",
    height: "200px",
    transition: { duration: 0.3 },
  },
  exit: {
    height: 0,
    width: 0,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
export const menuItem = {
  initial: {
    opacity: 0,
    x: 20,
  },
  enter: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
      delay: index * 0.1,
    },
  }),
  exit: (index) => ({
    opacity: 0,
    x: 20,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  }),
};