import { SELECTED_ELEMENT, UNSELECTED_ELEMENT } from "./constants"

const initialState = {
  selectedElement: {}
};

export default function selectedElementReducer(state = initialState, action) {
  switch(action.type) {
    case SELECTED_ELEMENT:
      return {
        ...state,
        selectedElement: action.selectedElement
      };

    case UNSELECTED_ELEMENT:
      return {
        ...state,
        selectedElement: initialState.selectedElement
      };

    default :
      return state;
  }
}