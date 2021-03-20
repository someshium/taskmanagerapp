import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask.js'
import {useState} from 'react'

function App() {


  
  

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Data Visualization Quiz',
        day:'March 20 at 10:30 pm',
        reminder:true
    },
    {
        id: 2,
        text: 'Learn DBMS',
        day:'March 21 at 10:30 am',
        reminder:true
    },
    {
        id: 3,
        text: 'Study Java concepts',
        day:'March 20 at 10:30 pm',
        reminder:true
    }
]
) 


const [showAddTask, setShowAddTask] = useState(false)


// add tasks
const addTask= (task ) => {
  const id = Math.floor(Math.random()* 10000+ 1)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// delete function
const onDelete = (e) =>{
setTasks(tasks.filter(element => element.id!==e))
}

// toggle remainder
const toggleReminder = (id) =>{
   setTasks(tasks.map((task) => 
     task.id===id ? {...task, reminder: !task.reminder }: task
   ))
}

  return (
    <div className="container">
      
     <Header  onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
     { showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length>0 ? <Tasks tasks={tasks} onDelete={onDelete}  onToggle={toggleReminder}/> : "no task found"
     }
     
    </div>
  );
}

export default App;
