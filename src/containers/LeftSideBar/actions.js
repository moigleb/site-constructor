import { SELECTED_ELEMENT, UNSELECTED_ELEMENT } from "./constants"

export const selectedElement = (selectedElement) => ({ type: SELECTED_ELEMENT, selectedElement });
export const unSelectedElement = (id) => ({ type: UNSELECTED_ELEMENT, id });