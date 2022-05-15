import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import '../App.css';

export default () => {
    const { num } = useParams();
    const [list, setList] = useState([])

    useEffect(() => {
        const callAxios = async() => {
            const resp = await axios.get('http://localhost:8000/api/players');
            let filterGame = [];
            if(num === "1") {
                filterGame = resp.data.map(({_id, name, gameOne:game, ...rest}) => {return {_id, name, game}})
            } else if(num === "2") {
                filterGame = resp.data.map(({_id, name, gameTwo:game, ...rest}) => {return {_id, name, game}})
            } else if(num === "3") {
                filterGame = resp.data.map(({_id, name, gameThree:game, ...rest}) => {return {_id, name, game}})
            }
            setList(filterGame);
        }
        callAxios();
    }, [num])

    const changeAction = async(game, id) => {
        let gameNum = '';
        if(num === "1") {
            gameNum = 'gameOne'
        } else if(num === "2") {
            gameNum = 'gameTwo'
        } else if(num === "3") {
            gameNum = 'gameThree'
        }
        let form = {[gameNum]: game}
        await axios.put(`http://localhost:8000/api/players/${id}`, form)
        const newList = list.map(obj => {
            if(obj._id === id) {
                return {...obj, game: game};
            }
            return obj
        })
        setList(newList)
    }   
    return(
        <div>
            <h1>Player Status - Game {num}</h1>
            <div>
                <Link to={"/status/game/1"}>Game 1</Link> |
                <Link to={"/status/game/2"}>Game 2</Link> |
                <Link to={"/status/game/3"}>Game 3</Link>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, i) => {
                            return <tr key={i}>
                                <td>{item.name}</td>
                                <td className="buttonBar">
                                    <button style={{backgroundColor: item.game==="Playing" && 'green'}} onClick={() => changeAction('Playing', item._id)} >Playing</button>
                                    <button style={{backgroundColor: item.game==="Not Playing" && 'red'}} onClick={() => changeAction('Not Playing', item._id)}>Not Playing</button>
                                    <button style={{backgroundColor: item.game==="Undecided" && 'yellow'}} onClick={() => changeAction('Undecided', item._id)}>Undecided</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}