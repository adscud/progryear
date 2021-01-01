import './App.css'
import { Header } from '../core'
import {Progress} from "../packages/progress";

function App() {
    return (
        <div className="App">
            <div className="Container">
                <Header />
                <Progress />
            </div>
        </div>
    );
}

export default App;
