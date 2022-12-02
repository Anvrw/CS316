import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeUser, currUser, users } from "./state";


export default function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();
        for(let i = 0; i<=users.length; i++){
            if(username === users[i].username && password === users[i].password){
                navigate('/account');
                changeUser(i);
            }
        }
        props.toggleState();
    }

    return (
    <body className="container-lg">
        <main>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                crossOrigin="anonymous">
        </script>
        <form action="myAccount.html" method="post" onSubmit={e => onSubmit(e)}>
            <div style={{textAlign:"left", margin:"10px"}} className="container">
                <label style={{textAlign:"left", margin:"10px"}} htmlFor="uname"><b>Username:</b></label>
                <input style={{textAlign:"left", margin:"10px"}} type="text" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)} required/>
                            <label htmlFor="psw"><b>Password:</b></label>
                            <input style={{textAlign:"left", margin:"10px"}} type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} required/>

                                <button type="submit"> Login </button>

            </div>

            </form>
        </main>
    </body>

    );
}
