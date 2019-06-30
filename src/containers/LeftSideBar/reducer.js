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
      // const unSelect = state.selectedElement.filter(
      //   item => item.id !== action.id
      // );
      return {
        ...state,
        selectedElement: initialState.selectedElement
      };
    default :
      return state;
  }
}