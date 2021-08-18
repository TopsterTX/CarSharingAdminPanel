export const loadState = () => {
  try {
    const defaultState = localStorage.getItem("state");
    if (defaultState === null) {
      return undefined;
    }
    return JSON.parse(defaultState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const defaultState = JSON.stringify(state);
    localStorage.setItem("state", defaultState);
  } catch (e) {
    return undefined;
  }
};
