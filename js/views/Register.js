import createView from "../createView.js"
import {getHeaders, isLoggedIn} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/users/create`;

export default function Register(props) {
    return `<div class='register'>
                <h1>Register Form</h1>
                <form id="register-form">
                    <label for="username">Username</label>
                    <input id="username" name="username" type="text" placeholder="Username">
                    <label for="firstname">First name</label>
                    <input id="fisrtName" name="firstname" type="text" placeholder="First Name">
                    <label for="lastname">Username</label>
                    <input id="lastName" name="lastname" type="text" placeholder="Last Name">
                    <br>
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Email">
                    <label for="dob">Date of Birth</label>
                    <input id="dob" name="dob" type="date" min="1950-01-01">
                    <br>
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="Password">
                    <label for="cPassword">Confirm Password</label>
                    <input id="cPassword" name="cPassword" type="password" placeholder="Password">
                    <br>
                    <button id="register-btn" type="button">Register</button>
                </form>
            </div>
`;
}

export function RegisterEvent(){
    console.log("am I logged in ? " + isLoggedIn());

    document.querySelector("#register-btn").addEventListener("click", function(){

        // make a new user object from the provided fields
        let newUser = {
            username: document.querySelector("#username").value,
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value
        }

        console.log(newUser);

        // make the request to send to the backend
        let request = {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(newUser)
        }

        fetch(BASE_URI, request)
            .then(response => {
                console.log(response.status);
                createView("/");
            })

    });
}