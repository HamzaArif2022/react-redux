export const Sous = (OP) => {
  return { type: "soustraction", values: OP, pyload: "-" };
};
export const add = (OP) => {
  return { type: "addition", values: OP, pyload: "+" };
};
export const multi = (OP) => {
  return { type: "Multiplication", values: OP, pyload: "*" };
};
export const div = (OP) => {
  return { type: "division", values: OP, pyload: "/" };
};
