import React, { useState } from "react";

const Form = (props) => {

    const {taskList, setTaskList} = props;

    const [task, setTask] = useState("");

    // const [taskList, setTaskList] = useState([]);

    // const [taskComplete, setTaskComplete] = useState(false);

    const [errorMsg, setErrorMsg] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();

        if(task.length === 0 || task.length < 3) {
            setErrorMsg("Use your words, bro.")
        }

        else{

        // newTask = {
        //     text: task,
        //     complete: false
        // }
        // setTaskList([...taskList, newTask])

        // or 
        // setTaskList([...taskList, {
        //     text: task,
        //     complete: false
        // }])

        setTaskList([...taskList, {
            text: task,
            complete: false
            // id: Math.floor(Math.random() * 1000000) alt addition to help with delete function
        }])
        
        setTask("")
        setErrorMsg("")
        }
    }


    // const handleDeleteTask = (indexForTask) => {
    //     // new variable = filter method which removes index arguement 
    //     const filterTask = taskList.filter((element, index) => index !== indexForTask);
    //     // new variable (that is filtered) using setter to set new array -- using state and filter method
    //     setTaskList(filterTask);
    // }


// create a form to add
// a checkbox that will strike through -- boolean?
// a delete function - filter?


    return (
        <div>
            <form onSubmit={ submitHandler }>

                {errorMsg && <p>{errorMsg}</p> }
                <label></label>
                <input onChange={ (e) => setTask(e.target.value)} type="text" value={task} />

                <button style={{backgroundColor:'green', color:'white'}}>Add</button>
            </form>

            {/* // items to display */}
            
            {/* <h1>All Tasks</h1>
            {taskList.map((element, index) => {
                return(
                    <div key={index}> */}
                        {/* <p>Task: {element}</p> */}
                        {/* error message - objects are not valid as React child - found: object with keys - use dot notation */}
                        {/* error happens when element is an object */}
                        {/* <label style={{fontSize: '20px'}}>Task: {element}</label>
                        <input type="checkbox" style={{marginLeft: '10px'}} />

                        <button 
                        onClick={() => handleDeleteTask(index) }
                        style={{backgroundColor: 'black', color: 'white', marginLeft: '10px'}} 
                        >Delete</button>
                        <br/>
                        <br/>
                    </div>
                )
            })} */}

        </div>
    );
};

export default Form;