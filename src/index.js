import { createStore } from "./extension/boiler";
import todoCommands, { addTodo, toggleTodo } from "./new";
import { createStore as createReduxStore } from 'redux';
import todoApp from './old/reducers';
import {
    addTodo as addTodoOrig,
    toggleTodo as toggleTodoOrig
} from './old/actions';

const reduxStore = createReduxStore(todoApp)

  
// Log the initial state
console.log(reduxStore.getState())
  
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribeRedux = reduxStore.subscribe(() => console.log(reduxStore.getState()))
  
// Dispatch some actions
reduxStore.dispatch(addTodoOrig('Learn about actions'))
reduxStore.dispatch(addTodoOrig('Learn about reducers'))
reduxStore.dispatch(addTodoOrig('Learn about store'))
reduxStore.dispatch(toggleTodoOrig(0))
reduxStore.dispatch(toggleTodoOrig(1))
  
// Stop listening to state updates
unsubscribeRedux()

console.log("FINISHED ORIGINAL EXAMPLE ----------- RUNNING BOILER EXAMPLE");


const store = createStore({
    todoCommands
});

// Log the initial state
console.log(store.getState())
  
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))
  
// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
  
// Stop listening to state updates
unsubscribe()
