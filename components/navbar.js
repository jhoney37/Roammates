class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <img id="logo" src="" alt="">
                <a href="listOfGroups.html" class="banner"><img src="" alt="">Home</a>
                <a href="myGroups.html" class="banner"><img src="" alt="">My Groups</a>
                <a href="profile.html" class="banner"><img src="" alt="">Profile</a></li>
                <a href="contacts.html" class="banner"><img src="" alt="">Contact Us</a></li>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', NavBar);
