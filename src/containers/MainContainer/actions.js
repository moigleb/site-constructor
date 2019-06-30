import { SAVE_NODE, RESET_NODE, SAVE_STATE_CHILDREN } from "./constant";

export const addNode = (node) => ({type: SAVE_NODE, node});
export const resetNode = (node) => ({type: RESET_NODE});
export const saveStateChildren = (children) => ({type: SAVE_STATE_CHILDREN, children});