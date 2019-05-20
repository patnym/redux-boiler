import { combineCommands } from "../extension/boiler";
import addTodo from "./addTodo";
import toggleTodo from "./toggleTodo";

export {
    addTodo,
    toggleTodo
};

export default combineCommands(
    "todos",
    addTodo,
    toggleTodo
);