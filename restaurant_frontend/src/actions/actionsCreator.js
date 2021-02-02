export const getBagels = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/bagels")
      .then((res) => res.json())
      .then((data) => {
        const amendedBagels = data.map((bagel) => ({
          ...bagel,
          ordered: 0,
        }));
        dispatch({
          type: "SET_BAGELS",
          payload: amendedBagels,
        });
      });
  };
};

export const updateBagel = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/bagels/${id}`, {
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({id})
    })
      .then((res) => res.json())
      .then((data) => {
        //
        });
    
  }
}

export const addToOrder = (bagel, index) => {
  return {
    type: "ADDTOORDER",
    payload: { bagel, index },
  };
};

export const removeFromOrder = (bagel, index) => {
  return {
    type: "REMOVEFROMORDER",
    payload: { bagel, index },
  };
};

export const like = (bagel, index) => {
  return {
    type: "LIKE",
    payload: { bagel, index },
  };
};
