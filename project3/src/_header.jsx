import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { currUser } from "./state";

export default function Header(props) {
    return (
        <header className="row">
            <div className="col-12">
                <h1>CS316 - PA3</h1>
            </div>
            <div className="col">
                <nav style={{textAlign:"left", margin:"5px"}}class="nav">
                    <p><a><Link className="nav-item nav-link" to='./login'>Login</Link></a></p>
                    <p><a><Link className="nav-item nav-link" to="./signup">New User</Link></a></p>
                    <p><a><Link className="nav-item nav-link" to="./account">My Account</Link></a></p>
                </nav>
                <br></br>
            </div>
            <div>
                Hello {currUser.username}!
            </div>
        </header>
    );
}