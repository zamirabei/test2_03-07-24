const initialState = {
  title: "Geeks for Geeks",
};

export default function mainReducer(state = initialState, action) {
  if (action.type === "CHANGE") {
    return {
      ...state,
      title: "hui",
    };
  }
  return state;
}
