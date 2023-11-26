class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <img id="logo" src="../assets/Roammates Logo.png" alt="">
                <ul>
                    <li><a href="listOfGroups.html" class="button banner"><img src="" alt="">Home</a></li>
                    <li><a href="myGroups.html" class="button banner"><img src="" alt="">My Groups</a></li>
                    <li><a href="profile.html" class="button banner"><img src="" alt="">Profile</a></li>
                    <li><a href="contacts.html" class="button banner"><img src="" alt="">Contact Us</a></li>
                </ul>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', Navbar);
