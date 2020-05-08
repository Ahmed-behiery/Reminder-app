import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER} from "./types"

export const add_Reminder = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        text: text,
        date: date

    }
    console.log("text", action);
    
    return action
}
export const remove_Reminder = (id) => {
    const action = {
        type: REMOVE_REMINDER,
        id: id
    }
    console.log("REmove", action);
    return action;
    
}
export const clear_Reminder = () => {
    const action = {
        type: CLEAR_REMINDER
    }
    console.log("CLEAR", action);
    return action;
    
}