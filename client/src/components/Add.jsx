export default () => {
    return(
        <form>
            <h3>Add Player</h3>
            <div className="form-group">
                <label htmlFor="name">Player Name: </label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label htmlFor="position">Preferred Position: </label>
                <input type="text" name="position"/>
            </div>
            <input type="submit" value="ADD" />
        </form>
    );
}