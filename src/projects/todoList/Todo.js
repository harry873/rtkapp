import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import {
  faCircleCheck,
  faPen,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons"

const Todo = () => {
  const [todo, setTodo] = useState([])

  const [newTask, setNewTask] = useState("")
  const [updateData, setUpdateData] = useState("")

  const addTask = () => {
    if (newTask) {
      const num = todo.length + 1
      const newEntry = { id: num, title: newTask, status: false }
      setTodo([...todo, newEntry])
      setNewTask("")
    }
  }
  const deleteTask = (id) => {
    console.log(id)
    const newData = todo.filter((task) => task.id !== id)
    setTodo(newData)
  }
  const markDone = (id) => {
    const newValue = todo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status }
      }
      return task
    })
    setTodo(newValue)
  }

  const cancelUpdate = () => {
    setUpdateData("")
  }

  const changeTask = (e) => {
    console.log(e.target.value)
    const newTask = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newTask)
  }

  const updateTask = () => {
    const filterRecords = [...todo].filter(
      (taske) => taske.id !== updateData.id
    )
    const newObject = [...filterRecords, updateData]
    setTodo(newObject)
    setUpdateData("")
  }
  return (
    <div className="text-light text-center container">
      <h3 className=" py-3">To Do List App(ReactJs)</h3>

      {/* Update Task   */}
      {updateData && updateData ? (
        <div className="row m-2">
          <div className="col">
            <input
              className="form-control form-control-lg"
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}
            />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-lg btn-success mr-20"
              onClick={updateTask}
            >
              Update
            </button>
            <button className="btn btn-lg btn-danger" onClick={cancelUpdate}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="row m-2">
          <div className="col">
            <input
              className="form-control form-control-lg"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success" onClick={addTask}>
              Add Task{" "}
            </button>
          </div>
        </div>
      )}

      {/* Display Todo List  */}

      {todo && todo.length ? "" : "No Tasks..."}
      {todo &&
        todo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((item, i) => {
            return (
              <div className="col taskBg my-3 m-2" key={item.id}>
                <div className={item.status ? "done" : ""}>
                  <span className="taskNumber"> {i + 1}</span>
                  <span className="taskText"> {item.title}</span>
                </div>
                <div className="iconsWrap">
                  <span title="Completed" onClick={() => markDone(item.id)}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {item.status ? null : (
                    <span
                      title="Edit"
                      onClick={() =>
                        setUpdateData({
                          id: item.id,
                          title: item.title,
                          status: item.status ? true : false
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  <span title="Delete" onClick={() => deleteTask(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            )
          })}
    </div>
  )
}

export default Todo
