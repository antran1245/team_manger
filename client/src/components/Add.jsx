import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        prefPosition: ""
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/players/new', form);
            navigate('/players/list')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add Player</h3>
            <div className="form-group">
                <label htmlFor="name">Player Name: </label>
                <input type="text" name="name" onChange={(e) => setForm({...form, name: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="position">Preferred Position: </label>
                <input type="text" name="position" onChange={(e) => setForm({...form, prefPosition: e.target.value})}/>
            </div>
            <input type="submit" value="ADD" />
        </form>
    );
}