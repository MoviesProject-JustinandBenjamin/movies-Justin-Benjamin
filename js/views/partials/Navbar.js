import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    const loggedIn = isLoggedIn();

    // everyone can see home
    let html = `
   <nav>
      <div class="navbar">
        <div class="container nav-container box" >
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="menu-items">
            <li><a href="/" data-link>Home</a></li>
            <li><a href="/recommend" data-link>Recommend</a></li>
            <li><a href="/edit" data-link>Edit</a></li>
            <li><a href="/users" data-link>Portfolio</a></li>
            <li><a href="/logout" data-link>Logout</a></li>
          </div>
        </div>
      </div>
    </nav>`;
    html = html + `</nav>`;
    return html;
}