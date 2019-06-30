import { combineReducers } from "redux";
import mainContainerReducer from "../../containers/MainContainer/reducer";
import selectedElementReducer from "../../containers/LeftSideBar/reducer";


const reducers = combineReducers({ mainContainerReducer, selectedElementReducer });

export default reducers;
