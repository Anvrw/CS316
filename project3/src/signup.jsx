import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {changeUser, currUser, users} from "./state";

export default function SignUpPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        users.push({
            username,
            password,
            email,
            phone
        });
        navigate('/account');   
        props.toggleState();
        console.log(users);
        let i = users.length
        changeUser(i-1);
    }

    return (
        <body className = "container-lg">
        <form onSubmit={e => onSubmit(e)}>
        <h2>Sign Up</h2>
        <div style={{textAlign:"left", margin:"10px"}} class="form-group">
          <label for="username">Username</label>
          <input style={{margin:"10px"}} type="text" class="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div style={{textAlign:"left", margin:"10px"}} class="form-group">
          <label for="email"/>Email
          <input style={{margin:"10px"}} type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div style={{textAlign:"left", margin:"10px"}} class="form-group">
          <label for="password">Password</label>
          <input style={{margin:"10px"}} type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div style={{textAlign:"left", margin:"10px"}} class="form-group">
          <label for="verify_password" value="vPassword">Verify Password</label>
          <input style={{margin:"10px"}} type="password" class="form-control" id="verify_password"/>
        </div>
        <div style={{textAlign:"left", margin:"10px"}} class="form-group">
          <label style={{margin:"10px"}}for="phone">Phone</label>
          <input style={{margin:"10px"}} type="text" class="form-control" value={phone} onChange={e => setPhone(e.target.value)}/>
        </div>
        <button type="submit" class="btn btn-primary">Sign up</button>
      </form>
    </body>
    );
}