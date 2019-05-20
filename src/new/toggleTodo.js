import { createCommand } from "../extension/boiler";

const handler = (state, payload) => {
    return state.map((todo, index) => {
        if (index === payload) {
            return Object.assign({}, todo, {
                completed: !todo.completed
            })
        }
        return todo
    })
}

export default createCommand(
    handler
);