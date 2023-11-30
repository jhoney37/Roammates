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
                <div id="name-pronouns">
                    <p>Name</p>
                    <p>Pronouns</p>
                </div>
                <div id="avatar">
                    <img src="../assets/Profile Avatar.jpg" alt="">
                </div>
            </div>
        `;
    }
}
customElements.define('member-card', MemberCard);


// Members List Card
// -----------
// A compact list of users who are currently in a group
class MemberListCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" id="member-list">
                <h1>Members</h1>
                <member-card class="green"></member-card>
                <member-card class="purple"></member-card>
                <member-card class="pink"></member-card>
                <member-card class="red"></member-card>
            </div>
        `;
    }
}
customElements.define('member-list-card', MemberListCard);


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
                    <li><a href="https://caps.charlotte.edu/" target="_blank">Center for Counseling and Psychological Services</a></li>
                    <li><a href="https://cic.charlotte.edu/" target="_blank">Center for Integrated Care</a></li>
                    <li><a href="https://sass.charlotte.edu/" target="_blank">Student Assistance and Support Services</a></li>
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
                        <mini-group-card></mini-group-card>
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
            <div class="card" id="sign-in" style="text-align: center;">
                <h1>Welcome</h1>
                <form>
                    <label for="username">Username:</label > <br>
                    <input type="text" id="signin-username" name="username" class="input-field"> <br>
            
                    <label for="password">Password:</label> <br>
                    <input type="password" id="signin-password" name="password" class="input-field"> <br>
                    
                    <button type="submit" class="basic blue" id="signin-button">Sign in</button>
                </form>
                <p class="sub-primary">Don't have an account?</p>
                <button type="button" id="signup-button" class="basic orange">Sign up</button>

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
            <div class="card" id="sign-up" style="text-align: center;">
                <h1>Sign up</h1>
                <form>
                    <label for="username">Username:</label> <br>
                    <input type="text" id="signup-username" name="username" class="input-field"> <br>

                    <label for="signup-password">Password:</label> <br>
                    <input type="password" id="signup-password" name="signup-password" class="input-field"> <br>

                    <label for="email">UNCC Email:</label> <br>
                    <input type="text" id="signup-email" name="email" class="input-field"> <br>
                    
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
            <div class="card" id="email-confirmation" style="text-align: center;"> 
                <p class="sub-primary">A confirmation has been<br>
                sent to your email.</p>
                <p class="sub-primary">Please type in the<br>
                confirmation code below.</p> <br>
                <!-- Add the id attribute to the form for the event listener -->
                <form id="email-confirmation-form">
                    <input type="text" id="cnfrm-email" name="cnfrm-email" class="input-field"> <br>
                    <button type="submit" class="basic orange" id="submit-confirmation">Next</button>
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
            <div class="card" id="expanded-post">
                <div id="original-post">
                    <div id="post-header">
                        <h1>Title</h1>
                        <h2>Date Posted</h2>
                        <member-card class="green"></member-card>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <hr>
                <comment-card class="purple"></comment-card>
                <comment-card class="pink"></comment-card>
                <comment-card class="red"></comment-card>
                <comment-card class="green"></comment-card>
                <comment-card class="purple"></comment-card>
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
                <div id="comment-header">
                    <member-card></member-card>
                    <h2>Date Posted</h2>
                </div>
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
customElements.define('post-card', PostCard);


// Terms of Service Card
// ---------------------
// style="text-align: left; height: 600px; overflow-y: auto;"
class TermsOfServiceCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
            <div class="card" id="terms-of-service" style="text-align: center;">
                <h1>Terms of Service</h1>
                
                <div class="question">
                    <p>
                        1. All of UNCC's Code of Conduct and integrity policies apply to this platform and must be 
                        followed at all times. Failure to adhere to the University's policies will result in direct 
                        termination of your account. The UNCC Code Of Conduct can be found here:
                        <br><br>https://legal.charlotte.edu/policies/up-406<br><br>
                        Do you agree to be aware of and follow all university policies?
                    </p>
                    <input type="checkbox" id="agree1" name="agree1" class="checkbox">
                </div>

                <div class="question">
                    <p>
                        2. This platform is designed for UNCC students. Therefore, all users of this platform can 
                        access the campus resources such as CAPS, CIC, and SASS. Roammates and UNCC are facilitative 
                        authorities, not responsible authorities. If you have any concerns contacting one of these 
                        resources, use the "Contact Us" page to find them or contact us directly so that we can help 
                        address your needs. Users of this platform must agree to take responsibility for their actions 
                        and behavior in order to use it. Failure to do so will result in termination of your account. 
                        Do you agree?
                    </p>
                    <input type="checkbox" id="agree2" name="agree2" class="checkbox">
                </div>

                <div class="question">
                    <p>
                        3. The following personal data will be collected from all users in order to use this platform: 
                        student information (name, university email), and location. All data collected will be kept 
                        confidential and will only be accessed by the administrators of this website and UNCC. We will 
                        not sell your information to third parties. Do you consent to data collection?
                    </p>
                    <input type="checkbox" id="agree3" name="agree3" class="checkbox">
                </div>

                <div class="question">
                    <p>
                        4. Users can report the inappropriate behavior of other users by using emailing the 
                        administration and using the "Contact Us" page. Users can report safely and Roammates agrees 
                        to keep any reported information confidential. Do you acknowledge this section?
                    </p>
                    <input type="checkbox" id="agree4" name="agree4" class="checkbox">
                </div>

                <div class="question">
                    <p>
                        5. The administration of Roammates reserves the right to terminate any accounts that violate 
                        any previously stated policies, terms, or conditions. Moderators (employees of Roammates) will 
                        be monitoring forums for safety and etiquette. Do you acknowledge this?
                    </p>
                    <input type="checkbox" id="agree5" name="agree5" class="checkbox">
                </div>

                <div class="question">
                    <p>
                        6. The legal terms of service stated here can be modified at any time and must be read and 
                        accepted by users before continuing to use this platform. Notifications regarding these 
                        updates will take place in a pop-up box format on the website and must be acknowledged before 
                        moving. Do you agree to these terms?
                    </p>
                    <input type="checkbox" id="agree6" name="agree6" class="checkbox">
                </div>

                <button type="button" id="confirm-terms" class="basic orange">Agree to Terms</button>
            </div>
        `;

        // Add event listeners for checkboxes
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', checkAllCheckboxes);
        });

        // Add event listener for the "Agree to Terms" button
        document.getElementById('confirm-terms').addEventListener('click', function () {
            if (areAllCheckboxesChecked()) {
                // Add logic to navigate to the next page or perform other actions
                alert('GO TO PROFILE SETUP -- will connect it later');
            } else {
                alert('All terms must be agreed upon to continue.');
            }
        });

        // Function to check if all checkboxes are checked
        function areAllCheckboxesChecked() {
            return Array.from(checkboxes).every(checkbox => checkbox.checked);
        }

        // Function to show alert if the user tries to click the button without checking all checkboxes
        function checkAllCheckboxes() {
            const agreeButton = document.getElementById('confirm-terms');
            agreeButton.removeEventListener('click'); // Remove previous event listener
            agreeButton.addEventListener('click', showAlert); // Add a new event listener
        }

        // Function to show alert
        function showAlert() {
            if (!areAllCheckboxesChecked()) {
                alert('All terms must be agreed upon to continue.');
            }
        }
    }
}
customElements.define('terms-of-service-card', TermsOfServiceCard);
