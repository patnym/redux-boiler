import { createCommand } from '../extension/boiler';

const handler = (state, payload) => {
    return [
        ...state,
        {
          text: payload,
          completed: false
        }
    ]
}

export default createCommand(
    handler
);