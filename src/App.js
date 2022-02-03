import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import Header from './components/Header';





function App() {

  const [taskList, setTaskList] = useState([])


  return (
    <div className="App">
      <Header />
      <Form taskList={taskList} setTaskList={setTaskList} />
      <Display taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
