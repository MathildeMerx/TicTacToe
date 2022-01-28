import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            <div className="title">
                <h1>Button maker</h1>
                <p>To be done</p>
            </div>
            <div class="content">
                <div className="tab-link">
                    <Link to="/"> Main page</Link>
                </div>
            </div>
        </div>
    );
}

export default App;
