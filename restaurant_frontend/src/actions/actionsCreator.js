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

export const updateBagel = (id, index) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/bagels/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "LIKE",
          payload: { data, index },
        });
      });
  };
};

export const deleteBagel = (id, index) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/bagels/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id }),
    })
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

export const createBagel = (e) => {
  e.preventDefault();
  debugger;
  console.log(e);
};

export const updateOrder = (order) => {
  return (dispatch) => {
    const promises = order.map((item) => {
      return fetch(`http://localhost:3000/api/v1/bagels/${item.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ item }),
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    });
    Promise.all(promises).then((bagels) => console.log(bagels)); //dispatch action here
  };
};

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
