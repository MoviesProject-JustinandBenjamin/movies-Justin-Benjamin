// import {showNotification} from "../messaging.js";
// import {getUser} from "../auth.js";
const BASE_URI = `${BACKEND_HOST}/api/s3/download`;
export default function Home(props) {
    let html =  `
        <header><h1>Home Page</h1></header>
        <main><div class="gallery">
    `;
    for (let i = 0; i < props.movies.length; i++) {
        html += `
        <div class="movie">
            <div class="poster">
             
            </div>
            <div class="name">
                ${props.movies[i].name}
            </div>
            <div class="movie-footer"><a href="/edit" data-link>Edit</a></div>
        </div>
        `;
    }
    html += `</div></main>`;
    return html;
}
//   <img src="${props.movies[i].id}.jpg" alt="${props.movies[i].id}">
export function HomeEvents() {


//     const user = getUser();
//     if(!user) {
//         // showNotification("Welcome visitor", "secondary");
//     } else {
//         // showNotification("Welcome " + user.userName, "info");
//     }
}