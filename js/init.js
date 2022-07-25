import createView from './createView.js';

export default function init() {
    loadViewOnPageRequest();
    addListenerToNavLinks();
}
function loadViewOnPageRequest() {
    window.addEventListener('DOMContentLoaded', function() {
        //TODO: Switched to location.pathname so the route would be accurate to current view
        createView(location.pathname);
        document.querySelector("footer").innerHTML = "MARKSmedia&trade;. Version " + FRONTEND_VERSION;
    });
}
function addListenerToNavLinks() {
    document.addEventListener('click', (event) => {
        if(event.target.type && event.target.type === "checkbox") {
            return;
        }
        if(event.target.matches('label')) {
            return;
        }
        event.preventDefault();
        if (event.target.dataset['link'] !== undefined) {
            const URI = event.target.href.substring(location.origin.length);
            createView(URI);
        }
    });
}

