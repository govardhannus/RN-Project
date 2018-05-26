import {ADD_NEW_TASK} from '../Actions/actionTypes'
const taskReducer = (tasks=[],action) => {
    switch (action.type){
        case ADD_NEW_TASK:
            return[
                ...tasks,{
                taskId:action.taskId,
                    taskName:action.taskName,
                    imageName:action.imageName,
                    completed:false
                }
            ]
        case (action.type === "toogleTask"):
            return tasks.map(task =>
                (task.taskId === actiontaskId)
                ?{...task,completed:!task.completed}
                :task
            )
        default:
            return tasks;
    }
}

export default taskReducer;