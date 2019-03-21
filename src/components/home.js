import React from 'react'
import {Link} from 'react-router-dom'

const Home =({tasks})=>{
    
    const taskList = tasks.map ((task)=>{
        return (
            <div className="post card">
                <div className="card-content">
                <Link to ={'/task/'+task.id}>
                    <h2 className='card-title'>{task.title}</h2>
                </Link>
                </div>
                <p >{task.body}</p>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="center">
             <h1>HOME</h1>
             {taskList}
            </div>center
        </div>
    )
}

export default Home