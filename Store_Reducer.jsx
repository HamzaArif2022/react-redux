const intialeState = {
  result: 0,
  valeur1: 0,
  valeur2: 0,
  operator: "",
};
console.log(intialeState.result);
export const Reducer = (state = intialeState, action) => {
  switch (action.type) {
    case "soustraction":
      return {
        result: Number(action.values.val1) - Number(action.values.val2),
        valeur1: Number(action.values.val1),
        valeur2: Number(action.values.val2),
        operator: action.pyload,
      };

      break;
    case "addition":
      return {
        result: Number(action.values.val1) + Number(action.values.val2),
        valeur1: Number(action.values.val1),
        valeur2: Number(action.values.val2),
        operator: action.pyload,
      };
      break;
    case "Multiplication":
      return {
        result: Number(action.values.val1) * Number(action.values.val2),
        valeur1: Number(action.values.val1),
        valeur2: Number(action.values.val2),
        operator: action.pyload,
      };

      break;
    case "division":
      return {
        result: Number(action.values.val1) / Number(action.values.val2),
        valeur1: Number(action.values.val1),
        valeur2: Number(action.values.val2),
        operator: action.pyload,
      };

      break;

    default:
      return state;
      break;
  }
};
