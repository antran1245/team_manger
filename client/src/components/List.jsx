import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';

export default () => {
    const [list, setList] = useState([])
    useEffect(() => {
        const callAxios = async() => {
            try {
                const resp = await axios.get('http://localhost:8000/api/players')
                // console.log(resp.data)
                setList(resp.data)
            } catch (err) {
                console.log(err)
            }
        }
        callAxios()
    }, [])

    const removePlayer = async(id)  => {
        await axios.delete(`http://localhost:8000/api/players/${id}`)
        const arr = list.filter(element =>  element._id !== id)
        setList(arr)
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, i) => {
                    return <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.prefPosition}</td>
                        <td><button onClick={() => removePlayer(item._id)}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}