import { Link, Routes, Route } from "react-router-dom";
import Add from "./Add";
import List from "./List";

export default () => {
    return(
        <div>
            <h2 style={{marginBottom: '10px'}}>
                <Link to={"/players/list"}>List</Link>
                |
                <Link to={"/players/addplayer"}>Add Player</Link>
            </h2>
            <Routes>
                <Route index path="/players/list" element={<List/>}/>
                <Route path="/players/addplayer" element={<Add/>} />
            </Routes>
        </div>
    );
}