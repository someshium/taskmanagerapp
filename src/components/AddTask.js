import {useState} from 'react'





const AddTask = ({onAdd}) => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder,setReminder ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert("Please enter a text")
        }

        onAdd({text, day, reminder})

        setText("")
        setDay("")
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
              <label htmlFor="">Task</label>
              <input type="text" placeholder="Add Task" value={text} onChange={(e) => {setText(e.target.value)}} />
          </div>
          <div className="form-control">
              <label htmlFor="">Day and Time</label>
              <input type="text" placeholder="Add Day & Time " value={day} onChange={(e) => {setDay(e.target.value)}}/>
          </div>
          <div className="form-control form-control-check">
              <label htmlFor="">Set Remainder</label>
              <input type="checkbox" value={reminder} onChange={(e) => {setReminder(e.currentTarget.checked)}} checked={reminder}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Task</label>
              <button className="btn btn-block">Save Task</button>
          </div>
        </form>
    )
}

export default AddTask
