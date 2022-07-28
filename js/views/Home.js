// import {showNotification} from "../messaging.js";
// import {getUser} from "../auth.js";
import createView from "../createView.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;
export default function Home(props) {
    let html =  `
        <main>
        <h1>Movies</h1>
        <div class="gallery">
    `;
    console.log(props);
    for (let i = 0; i < props.movies.length; i++) {
        html += `
        <div class="movie flip-card">
            <div class="poster flip-card-inner">
            <div class="flip-card-front">
                <img src="../../Database Files/covers/${props.movies[i].id}.jpg" alt="${props.movies[i].name}">
            </div>
            <div class="flip-card-back">
                <div class="name">
                    <p><b>${props.movies[i].name}</b></p>
                    <p>genre: ${props.movies[i].genre}</p>
                    <p>year: ${props.movies[i].year}</p>
                    <p>director: ${props.movies[i].director}</p>
                    <p>rating: ${props.movies[i].rating}</p>
                </div>
                <button class="delete-btn" data-id="${props.movies[i].name}">Delete</button>
            </div>
        </div>
        </div>
        `;
    }
    html += `</div><br><h1>Tv Shows</h1><div class="gallery">`;
        for (let i = 0; i < props.tvShows.length; i++) {
            html += `
        <div class="movie flip-card">
            <div class="poster flip-card-inner">
            <div class="flip-card-front">
                <img src="../../Database Files/covers/${props.tvShows[i].id}.jpg" alt="${props.tvShows[i].name}">
            </div>
            <div class="flip-card-back">
                <div class="name">
                    <p><b>${props.tvShows[i].name}</b></p>
                    <p>Genre: ${props.tvShows[i].genre}</p>
                    <p>Year: ${props.tvShows[i].year}</p>
                    <p>Director: ${props.tvShows[i].director}</p>
                    <p>Rating: ${props.tvShows[i].rating}</p>
                </div>
                <button class="delete-btn" data-id="${props.tvShows[i].name}">Delete</button>
            </div>
        </div>
        </div>
        `;
    }
    html += `</div></main>`;
    return html;
}
export function HomeEvents() {
    let delBtn = document.querySelectorAll(".delete-btn");
    for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("click", () => {
            // console.log(delBtn[i].parentElement.parentElement.parentElement);
            let mov = delBtn[i].parentElement.parentElement.parentElement;
                mov.style.display = "none";
        });
    }
//     const user = getUser();
//     if(!user) {
//         // showNotification("Welcome visitor", "secondary");
//     } else {
//         // showNotification("Welcome " + user.userName, "info");
//     
}
