class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <img id="logo" src="../assets/Roammates Logo.png" alt="">
                <ul>
                    <li><a href="listOfGroups.html"><button class="banner"><img src="" alt="">Home</button></a></li>
                    <li><a href="profile.html"><button class="banner"><img src="" alt="">Profile</button></a></li>
                    <li><a href="contacts.html"><button class="banner"><img src="" alt="">Contact Us</button></a></li>
                    <li><a href=""><button class="banner"><img src="" alt="">Sign Out</button></a></li>
                </ul>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', Navbar);
