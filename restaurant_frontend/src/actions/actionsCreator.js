export const getBagels = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/bagels")
      .then((res) => res.json())
      .then((data) => {
        const amendedBagels = data.map((bagel) => ({
          ...bagel,
          order: 0,
        }));
        dispatch({
          type: "SET_BAGELS",
          payload: amendedBagels,
        });
      });
  };
};
