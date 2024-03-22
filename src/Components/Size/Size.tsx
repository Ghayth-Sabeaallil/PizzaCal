import "./Size.css"
const Size = () => {
    return (<>
        <h2>Size:</h2>
        <div className="size-div">
            <div>
                <input type="checkbox" id="small" name="small" />
                <label>S</label>
            </div>
            <div>
                <input type="checkbox" id="medium" name="medium" />
                <label>M</label>
            </div>
            <div>
                <input type="checkbox" id="large" name="large" />
                <label>L</label>
            </div>

            <div>
                <input type="checkbox" id="x-large" name="large" />
                <label>XL</label>
            </div>

        </div>
    </>)
}

export default Size