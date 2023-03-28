import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="text-center d-flex align-items-center justify-content-center bottom-50">
        <div className=" p-5 m-3 border-radius">
          <Link to="/todo" className="link-btn">Todo</Link>
        </div>
        <div className=" p-5 m-3 border-radius">
          <Link to="/todo-with-redux" className="link-btn">Todo with redux </Link>
        </div>
      </div>
    </>
  )
}

export default Home
