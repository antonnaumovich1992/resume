let contentDiv = document.getElementById('content');

let routes = {
    '/': homepage,
    '/index.html': homepage,
    '/aboutme': aboutme,
    '/contacts': contact,
    '/work': work,
    '/education': education,
    '/resume': resume,
    '/projects': projects

};

window.onpopstate = () => {
    contentDiv.innerHTML = routes[window.location.pathname];
}

let onNavItemClick = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    contentDiv.innerHTML = routes[pathName];
}

contentDiv.innerHTML = routes[window.location.pathname];