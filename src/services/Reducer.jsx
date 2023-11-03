import { v4 as uuidv4 } from "uuid";

const Reducer = (state, action) => {
  switch (action.type) {
    case "TRANSFORM_STATE": {
      const goal = action.payload;
      const newState = {
        order: goal.map((goal) => goal.id),
        objects: goal.reduce(
          (object, goal) => ({ ...object, [goal.id]: goal }),
          {}
        ),
      };
      localStorage.setItem("metas", JSON.stringify(newState));
      return newState;
    }

    case "CREATE": {
      const ID = uuidv4();
      const newState = {
        order: [...state.order, ID],
        objects: {
          ...state.objects,
          [ID]: action.payload,
        },
      };
      console.log(newState);
      localStorage.setItem("metas", JSON.stringify(newState));
      return newState;
    }

    case "UPDATE": {
      const id = action.payload.id;
      state.objects[id] = {
        ...state.objects[id],
        ...action.payload,
      };
      const newState = { ...state };
      localStorage.setItem("metas", JSON.stringify(newState));
      return newState;
    }

    case "DELETE": {
      const id = action.payload;
      const newOrder = state.order.filter((goalID) => goalID !== id);
      delete state.objects[id];
      const newState = {
        order: newOrder,
        objects: state.objects,
      };
      localStorage.setItem("metas", JSON.stringify(newState));
      return newState;
    }

    default:
      throw new Error();
  }
};

export default Reducer;
