import Home, {HomeEvents} from "./views/Home.js";
import Recommend, {RecommendEvents} from "./views/Recommend.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register, {RegisterEvent} from "./views/Register.js"
import UserIndex, {UserEvents} from "./views/User.js";
import Logout, {LogoutEvents} from "./views/Logout.js";
import editPage, {editPageEvents} from "./views/Edit.js";



/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {
                movies: {
                    url: "https://sleepy-stitch-script.glitch.me/movies",
                },
                tvShows: {
                    url: "https://sleepy-stitch-script.glitch.me/tvShows"
                }
            },
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvents
        },
        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/',
            title: 'Logout',
            viewEvent: LogoutEvents
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/users': {
            returnView: UserIndex,
            state: {},
            uri: "/users",
            title: 'User Info',
            viewEvent: UserEvents
        },
        '/recommend': {
            returnView: Recommend,
            state: {},
            uri: '/recommend',
            title: 'Recommend pick',
            viewEvent: RecommendEvents
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR'
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...'
        },
        '/edit': {
            returnView: editPage,
            state: {},
            uri: '/edit',
            title: 'Edit Movie Page',
            viewEvent: editPageEvents
        }
    };
    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }
    return routes[URI];
}
