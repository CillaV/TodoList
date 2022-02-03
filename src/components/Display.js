import React, {useState} from "react";

const Display = (props) => {

    const {taskList, setTaskList} = props;

    const handleDeleteTask = (indexForTask) => {
        // new variable = filter method which removes index arguement 
        const filterTask = taskList.filter((element, index) => index !== indexForTask);
        // new variable (that is filtered) using setter to set new array -- using state and filter method
        setTaskList(filterTask);
    }

    // alt delete method -- preferred? but id will be specific vs content could be the same

    // const deleteButton = (contentFromBelow) => {
    //     setTaskList(

    //         taskList.filter((element, index) => {
    //             return element.text !== contentFromBelow;
    //         })
    //     )
    // }

    // variation with id as a property

        // const deleteButton = (idFromBelow) => {
    //     setTaskList(

    //         taskList.filter((element, index) => {
    //             return element.id !== idFromBelow;
    //         })
    //     )
    // }





    // const [taskComplete, setTaskComplete] = useState(false);

    const toggleStatus = (element) => {
        element.complete = !element.complete;
        let updateTask = [...taskList];
        setTaskList(updateTask);
    }

    // complete without mutating -- using slice?

    // Attempt 1

    // const toggleStatus = (elementIndex) => {
    //     const updateTask = {...taskList[elementIndex]};
    //     updateTask.complete = !updateTask.complete;
    //     setTaskList(
    //         [...taskList.slice(0, elementIndex), updateTask]
    //         .concat(
    //             taskList.slice(elementIndex + 1)
    //         )
    //     )
    // }

    // from solution -- also no go

    // function toggleStatus(index) {
    //     const obj = {
    //     ...taskList[index]
    //     };
        
    //     obj.completed = !obj.completed;
        
    //     setTaskList([
    //     ...taskList.slice(0, index),
    //     obj
    //     ].concat(taskList.slice(index + 1)));
    // }




    const style = (complete) => {
        if(complete === true) {
            return "completed"
        }
        else{
            return "notCompleted"
        }
    }

    // class names for completed and notCompleted to provide css line-through

    return(
        
        <div>
            
            <h1>All Tasks</h1>
            {taskList.map((element, index) => {
                return(
                    <div className={style(element.complete)} key={index}>
                        
                        {/* <p>Task: {element}</p> */}
                        {/* error message - objects are not valid as React child - found: object with keys - use dot notation */}
                        {/* error happens when element is an object */}
                        
                        <label style={{fontSize: '20px', marginRight: '10px'}}>{element.text}</label>

                        <input onChange={() => toggleStatus(element)} type="checkbox" />


                        <button onClick={() => handleDeleteTask(index) }style={{backgroundColor: 'black', color: 'white', marginLeft: '10px'}} >Delete</button>
                        {/* alt method vs index */}
                        {/* <button onClick={(e) => deletebutton(element.content)}>Delete</button> */}
                        <br/>
                        <br/>
                    </div>
                )
            })}


        </div>
    );
};

export default Display;