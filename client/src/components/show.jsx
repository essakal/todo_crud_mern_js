import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Show() {
    const [data, setData] = useState([])
    const [task, setTask] = useState('')

    const [up, setup] = useState(false)
    const [t, sett] = useState('')
    const [task1, setTask1] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(res => setData(res.data))
    }, [data])

    const ajouter = e => {
        axios.post('http://localhost:5000/add', { task })
        setTask('')
    }
    const modifier = e => {
        axios.put('http://localhost:5000/' + t, { task: task1 })
        setup(false)
        sett('')
        setTask1('')
    }
    return (
        <div>
            {/* <h1>{task}</h1> */}
            {!up ?
                <div>
                    <input type="text" onChange={e => { setTask(e.target.value) }} value={task} />
                    <button onClick={ajouter}>ajouter</button>
                </div>
                :
                <div>
                    <input type="text" onChange={e => { setTask1(e.target.value) }} value={task1} />
                    <button onClick={modifier}>update</button>
                </div>
            }
            <table>
                <tbody>
                    {data.map(item => (<tr key={item._id}>
                        <td>{item.task}</td>
                        <td>
                            <button onClick={() => {
                                // axios.put('http://localhost:5000/' + item.task, { task: task1 })
                                setup(true)
                                sett(item.task)
                                setTask1(item.task)
                            }}>edit</button>
                        </td>
                        <td>
                            <button onClick={() => {
                                axios.delete('http://localhost:5000/' + item.task)
                            }}>delete</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>

        </div>
    )
}
