import { SAVE_NODE, RESET_NODE, SAVE_STATE_CHILDREN  } from "./constant";

const initialState = {
  node: [],
  children: []
};

export default function mainContainerReducer (state = initialState, action) {
  switch (action.type) {
    case SAVE_NODE:
      return {
        ...state,
        node: [...state.node,  action.node]
      };
      case RESET_NODE:
      return {
        ...state,
        node: []
      };
      case SAVE_STATE_CHILDREN:
      return {
        ...state,
        children: action.children
      };
    default:
      return state;
  }
};