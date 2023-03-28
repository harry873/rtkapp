import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import {
  faCircleCheck,
  faPen,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons"
import { AddTask } from "./redux/actions"

const TodoWithRedux = () => {
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState("")

  const todos = useSelector((state) => state.todoReducer)
  console.log("todos", todos)
  const addTask = () => {
    const date = new Date()
    const time = date.getTime()
    const newObj = {
      id: time,
      title: newTask,
      status: false
    }
    dispatch(AddTask(newObj))
    setNewTask("")
  }
  return (
    <>
      <h3 className=" py-3 text-center">To Do List App(Redux)</h3>
      <div className="row m-2">
        <div className="col">
          <input
            required
            className="form-control form-control-lg"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-lg addbtn"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
      </div>
      {todos &&
        todos
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((item, i) => {
            return (
              <div className="col taskBg my-3 m-3" key={item.id}>
                <div className={item.status ? "done" : ""}>
                  <span className="taskNumber"> {i + 1}</span>
                  <span className="taskText"> {item.title}</span>
                </div>
                <div className="iconsWrap">
                  <span
                    title="Completed"
                    //    onClick={() => markDone(item.id)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {item.status ? null : (
                    <span
                      title="Edit"
                      //   onClick={() =>
                      //     setUpdateData({
                      //       id: item.id,
                      //       title: item.title,
                      //       status: item.status ? true : false
                      //     })
                      //   }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  <span
                    title="Delete"
                    //    onClick={() => deleteTask(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            )
          })}
    </>
  )
}

export default TodoWithRedux
