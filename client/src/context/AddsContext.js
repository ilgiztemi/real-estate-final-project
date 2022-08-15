import { createContext, useContext, useEffect, useReducer } from "react";
const initialTabs = sessionStorage.getItem("tabs");
const initialState = {
  adds: null,
  barFlag: false,
  page: 0,
  perPage: 3,
  tabs: initialTabs ? initialTabs : "gallery",
  newAdd: {},
  edit: false,
  editAdd: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add-all-adds": {
      return { ...state, adds: action.data };
    }
    case "page": {
      return { ...state, page: action.index };
    }
    case "tabs": {
      return { ...state, tabs: action.data };
    }
    case "edit-add": {
      return { ...state, editAdd: action.data, edit: !state.edit };
    }
    case "handle-edit-input": {
      return {
        ...state,
        editAdd: {
          ...state.editAdd,
          [action.payload.property]: action.payload.event,
        },
      };
    }
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};
export const AddsContext = createContext();
export const AddsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("/api/adds")
      .then((res) => res.json())
      .then((data) => addAllAddsFn(data));
  }, [state.adds]);
  const addAllAddsFn = (data) => {
    dispatch({
      type: "add-all-adds",
      ...data,
    });
  };
  const deleteAnAdd = (_id) => {
    fetch("/api/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });
  };
  const editAddFn = (data) => {
    dispatch({
      type: "edit-add",
      data,
    });
    if (state.editAdd) {
      fetch("/api/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.editAdd),
      });
    }
  };
  const tabsHandler = (data) => {
    dispatch({
      type: "tabs",
      data,
    });
    sessionStorage.setItem("tabs", data);
  };
  const paginate = (index) => {
    dispatch({
      type: "page",
      index,
    });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    fetch("/api/add/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: Math.floor(Math.random() * 14000000),
        image: [e.target[0].value],
        price: e.target[1].value,
        street: e.target[2].value,
        city: e.target[3].value,
        postal_code: e.target[4].value,
        province: e.target[5].value,
        bathrooms: e.target[6].value,
        bedrooms: e.target[7].value,
        agency: "Final Project Agency",
        center: {
          lat: parseFloat(e.target[8].value),
          lng: parseFloat(e.target[9].value),
        },
      }),
    });
  };
  const handleEditInput = (property) => (event) => {
    dispatch({
      type: "handle-edit-input",
      payload: { property, event: event.target.value },
    });
  };
  return (
    <AddsContext.Provider
      value={{
        state,
        actions: {
          paginate,
          tabsHandler,
          handleSubmitForm,
          deleteAnAdd,
          editAddFn,
          handleEditInput,
        },
      }}
    >
      {children}
    </AddsContext.Provider>
  );
};
export const useAdds = () => useContext(AddsContext);
