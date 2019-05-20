import { combineReducers, createStore as createReduxStore } from 'redux';
const commands = [];


export function createCommand(reducer, name) {
    const id = name || generateAction();
    let func = (data) => {
        return {
            type: id,
            payload: data
        }
    }
    func.TYPE = id;
    func.handler = reducer;
    return func;
}

export function createStore(commandArray) {
    const reducers = {};
    for (var key in commandArray) {
        let command = commandArray[key];
        if(isCommand(command)) {
            commands[command.TYPE] = command.handler;
            reducers[key] = createReducer();
        } else {
            let b = command.commands;
            for(var k in b) {
                let c = b[k];
                commands[c.TYPE] = c.handler;
            }
            reducers[command.name] = createReducer();
        }
    }
    return createReduxStore(combineReducers(reducers));
}

export function combineCommands(name, ...comms) {
    return {
        name: name,
        collection: true,
        commands: comms
    };
}

function createReducer() {
    return (state = [], action) => {
        let reduce = commands[action.type];
        if(reduce) {
           return reduce(state, action.payload);
        }
        return state || null;
    }
}

function isCommand(command) {
    return !command.collection;
}

function generateAction() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}