import './App.css'
import {Progress} from "../packages/progress"
import {Footer} from "../core";

function App() {
    return (
        <div className="App">
            <div className="Container">
                <Progress/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
