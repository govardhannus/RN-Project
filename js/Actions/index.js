import {ADD_NEW_TASK} from './actionTypes'
let newTaskId =0;

export const addNewTask = (inputTaskName,imageName) => {
    return{
        type: ADD_NEW_TASK,
        taskId:newTaskId++,
        taskName: inputTaskName,
        imageName:imageName
    }
}

export const toggleTask =(taskId) =>{
    return{
        type:"toogleTask",
        taskId:taskId
    }
}