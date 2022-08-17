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
  //this hook is used to get all data from mongoDB database
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
  //this function deletes an add based on id
  const deleteAnAdd = (_id) => {
    fetch("/api/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });
  };
  //this function is used to update an add based on id
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
  //this function handles tabs inside of adds components to switch between different features
  const tabsHandler = (data) => {
    dispatch({
      type: "tabs",
      data,
    });
    sessionStorage.setItem("tabs", data);
  };
  //this function helps to change pages 
  const paginate = (index) => {
    dispatch({
      type: "page",
      index,
    });
  };
  //this function helps to create a new add and it adds it to database up on  submitting it
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
  //this function helps to get and change values of the selected add and update it in mongoDB
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
