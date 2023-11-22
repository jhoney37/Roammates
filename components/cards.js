// Member Card
// -----------
// Used for displaying another user's info in a small button-like window
class MemberCard extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="member">
                <p>Name</p>
                <p>Pronouns</p>
                <img src="" alt="">
            </div>
        `;
    }
}
customElements.define('member-card', MemberCard);


// Profile Setup card
// ------------------
// Displays after successfully verifying email in the sign-up section
// Information gets stored under the user's profile information
//
// One other instance
class ProfileSetup extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class = "card" id="profile-setup">
                <h1>Set Up Your Profile</h1>
                <div class="profile-picture">
                    <p>Upload an Avatar</p>
                    <img src="" alt="">
                </div>
            
                <h1>What is your name?</h1>
                <form>
                    <input type="text" id="name" name="name" class="input-field" required>
                    <button type="submit" class="basic blue">Next</button>
                </form>
            
                <button class="basic orange">Skip</button>
            </div>
        `;
    }
}
customElements.define('profile-setup-card', ProfileSetup);


// Contact card
// ------------
// Basic area for displaying information on school resources, where to contact us, etc.
class ContactCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="contact">
                <h1>Contact Us</h1>
                <p>To contact us, please email: <a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
                
                <div class="card resources">
                    <h1>University Resources</h1>
                    
                    <ul class="resource-list">
                        <li><a href="https://caps.charlotte.edu/" target="_blank">CAPS</a></li>
                        <!-- Add more orgs later -->
                    </ul>
                </div>    
            </div>
        `;
    }
}
customElements.define('contact-card', ContactCard);


// Group card
// ----------
// Displays a group's summary for the 'list of groups' page
class GroupCard extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="group">
                <div class="text">
                    <ul>
                        <li class="primary">Title</li>
                        <li class="secondary">Location</li>
                        <li class="secondary"># of Members</li>
                    </ul>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <button class="basic blue">Join</button>

                    <img src="" alt="">
                </div>
            </div>
        `;
    }
}
customElements.define('group-card', GroupCard);


// Profile card
// ------------
// Displays the user's profile information such as their name, pronouns, avatar, and also contains a 
// carousel for displaying their active groups
// 
// One other instance
class ProfileCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="profile">
                <div class="text">
                    <ul>
                        <li class="primary">Name</li>
                        <li class="secondary">Pronouns</li>
                    </ul>
            
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            
                <img src="" alt="">
            
                <div class="carousel">
                    <div id="header">
                        <p>Groups</p>
                    </div>
                    <button id="left-carousel-arrow"></button>
                    <button id="right-carousel-arrow"></button>
                </div>
            
                <button class="basic blue">Edit</button>
            </div>
        `;
    }
}
customElements.define('profile-card', ProfileCard);


// Mini Group card
// ---------------
// A miniature version of the group card to be used in the profile carousel
class MiniGroupCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="mini-group">
                <ul>
                    <li class="primary">Title</li>
                    <li class="primary">Location</li>
                </ul>
            
                <img src="" alt="">
            </div>
        `;
    }
}
customElements.define('mini-group-card', MiniGroupCard);


// Sign-in Card
// ------------
// Allows the user to sign in with a username/password form
// Contains a button to go to the sign-up screen/card
class SignInCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="sign-in">
                <h1>Welcome</h1>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" class="input-field" 
                    placeholder="Enter your username" required> <br>
            
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" class="input-field"
                    placeholder="Enter your password" required> <br>
                    
                    <button type="submit" class="basic blue">Sign in</button>
                </form>
                <p class="sub-primary">Don't have an account?</p>
                <button class=<button type="button" id="signup-button" class="basic orange">Sign up</button></button>

            </div>
        `;
    }
}
customElements.define('signin-card', SignInCard);


// Sign-up card
// ------------
// Allows the user to fill out a form for sign-up
//
// One other instance
class SignUpCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="sign-up">
                <h1>Sign up</h1>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" class="input-field" 
                    placeholder="Enter your username" required> <br>
            
                    <label for="signup-password">Password:</label>
                    <input type="password" id="signup-password" name="signup-password" 
                    class="input-field" placeholder="Enter your password" required> <br>
            
                    <label for="cnfrm-signup-password">Confirm Password:</label>
                    <input type="password" id="cnfrm-signup-password" name="cnfrm-signup-password" 
                    class="input-field" placeholder="Confirm your password" required> <br>
            
                    <label for="email">UNCC Email:</label>
                    <input type="text" id="email" name="email" class="input-field"
                    placeholder="Enter your email" required> <br>
                    
                    <button type="button" id="confirm-button" class="basic orange">Confirm</button>
                </form>
            </div>
        `;
    }
}
customElements.define('signup-card', SignUpCard);


// Email Confirmation card
// -----------------------
// Sends the user a confirmation code to their email and allows user to input it into a form to 
// confirm their UNCC address
class EmailConfirmationCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="email-confirmation">
                <p class="sub-primary">A confirmation has been sent to your email.</p>
                <p class="sub-primary">Please type in the confirmation code below.</p> <br>
                <form>
                    <input type="text" id="cnfrm-email" name="cnfrm-email" class="input-field"
                    placeholder="Enter the confirmation code" required> <br>
                    
                    <button type="submit" class="basic orange">Confirm</button>
                </form>
            </div>
        `;
    }
}
customElements.define('email-confirmation-card', EmailConfirmationCard);


// Expanded Post card
// ---------
// An expanded view of a post that shows a scrollable list of the comments as well as the user that posted
class ExpandedPostCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="post">
                <div>
                    <div class="text">
                        <ul>
                            <li class="primary">Title</li>
                            <li class="secondary">Date Posted</li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <member-card></member-card>
                <hr>
                <comment-card></comment-card>
                <button class="basic blue">Reply</button>
            </div>
        `;
    }
}
customElements.define('expanded-post-card', ExpandedPostCard);


// Comment card
// ------------
// For use in expanded post card
// Displays a user's member card, the date posted, and the comment that they typed
class CommentCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="comment">
                <member-card></member-card>
                <h2>Date Posted</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        `;
    }
}
customElements.define('comment-card', CommentCard);


// Post card
// ------------
// Displays a concise version of a post from a group
class PostCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="post">
                <ul>
                    <li class="primary">Title</li>
                    <li class="secondary">Author</li>
                    <li class="secondary">Date Posted</li>
                </ul>
            </div>
        `;
    }
}
customElements.define('post-card', PostCard);
