import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currUser } from "./state";


export default function LoginPage(props) {
    const [username, setUsername] = useState(currUser.username);
    const [email, setEmail] = useState(currUser.email);
    const [phone, setPhone] = useState(currUser.phone);
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        currUser.username = username;
        currUser.email = email;
        currUser.phone = phone;

        navigate('/account');
    }

    return (
        <body className="container-lg">
        <form onSubmit={e => onSubmit(e)}>
        <h2>User Page</h2>
        <div style={{textAlign:"left", margin:"10px"}} class="form-group">
          <label for="username">Username</label>
          <input style={{margin:"10px"}} type="text" placeholder={currUser.username} class="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div style={{textAlign:"left", margin:"10px"}} class="form-group">
          <label for="email">Email</label>
          <input style={{margin:"10px"}}  type="email"  placeholder={currUser.email} class="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div style={{textAlign:"left", margin:"10px"}} class="form-group">
          <label for="phone">Phone</label>
          <input style={{margin:"10px"}} type="text"  placeholder={currUser.phone} class="form-control" value={phone} onChange={e => setPhone(e.target.value)}/>
        </div>
        <button style={{textAlign:"left", margin:"25px"}} type="submit" class="btn btn-primary">Update</button>
      </form>
    </body>
    );
}



