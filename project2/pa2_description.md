# Programming Assignment 2

The goal of this assignment is for you to gain experience with front end web design. Specifically, you will be using Bootstrap to create the front end of a website. You will not be connecting the front end to any backend so any information included on the page can be hard coded. Pretend that you are making a website prototype for the company you are working for.

You and potentially one group member will be tasked with creating a basic three page website using HTML, CSS (or SASS), JavaScript, and Bootstrap. You will earn points for this assignment by implementing specific parts of the page designs. For each of the pages, I will give you a list of requirements that the page must fulfill. These requirements will largely be input fields required on the various forms.

A few reminders about how groups work in CS316
- When you decide on a group you must inform me of your decision
- You may not switch groups throughout the semester

## Page Descriptions

All design choices outside of the page descriptions are left up to you. I'm not requiring that the page be beautiful, since this is not a website design course. However, I do expect that you will use Bootstrap effectively to create the wire frame for a website that could be styled later by a UX designer.

I recommend that you look at GitHub's website when implementing this assignment since they use their own flavor of Bootstrap. You do not need to stick to their design but it will give you a good starting point.

### Navbar

Your pages must all contain a common navbar with the following links `./user.html`, `./login.html`, and `./new.html`. Your navbar must be implemented using Bootstrap.

### Footer

Your pages must all contain a common footer that contains the members of your group. Your footer must be implemented using Bootstrap.

### Login Page

The login page should contain a login form which accepts a username and password combination. The username field can either be a username or the user's email address. The form would log in a user to the system assuming they entered a valid username password pair (your form does not need to do anything on submit).

To earn full credit your page must include the following elements and be styled using Bootstrap.
- A form containing...
	- An input field for the user's username
	- An input field for the user's password
	- A `Sign in` button to submit the form
- A navbar as described above
- A footer as described above

### Sign Up Page

The sign up page must contain a sign up form which accepts a username, email, password, verified password, and phone number. On submission, the form would create a new user that can access the system (your form does not need to do anything on submit).

To earn full credit your page must include the following elements and be styled using Bootstrap.
- A form containing...
	- An input field for the user's username
	- An input field for the user's email
	- An input field for the user's password
	- An input field for the user's verified password (they would type their password again)
	- An input field for the user's phone
	- A `Sign up` button to submit the form
- A navbar as described above
- A footer as described above

### Account Page

The account page must include a form with the current logged in user's information. You do not need to worry about filling this page with dynamic user information. We are only designing the front end so just hard code some values in the form fields. On submission, the form would update the user in the server (your form does not need to do anything on submission).

To earn full credit your page must include the following elements and be styled using Bootstrap.
- A form containing...
	- An input field for the user's username
	- An input field for the user's email
	- An input field for the user's phone
	- An `Update` button to submit the form updating the user
- A navbar as described above
- A footer as described above

## Rubric

- total 25 pts: login page
	- 5 pts: all necessary components included
	- 20 pts: bootstrap used to style page
- total 25 pts: sign up page
	- 5 pts: all necessary components included
	- 20 pts: bootstrap used to style page
- total 25 pts: account page
	- 5 pts: all necessary components included
	- 20 pts: bootstrap used to style page
- 10 pts: bootstrap header with navbar on all pages
- 10 pts: bootstrap footer on all pages
- 5 pts: css/classes used to space out the content on the page

## Extra Credit Opportunity

You may earn 5 pts extra credit by implementing either of the following extra credit opportunities. Doing both will not earn you more than 5 pts extra credit.

1. You may earn 5 pts extra credit by implementing form validation on all forms. If you implement the following form validation you will earn the full extra credit.

- username fields - may not be empty
- email fields - may not be empty and must match the format of an email
- password fields - may not be empty
- phone fields - may not be empty
- verified password - must match the other password input field

2. You may earn 5 pts extra credit by implementing at least two themes for all of the pages. Your implementation must use SASS/SCSS, generate themes using modules or mixins, and work based off of a root level class on the body element. The specific colors you choose do not matter as long as you chose them yourself and do not use the built in theming by bootstrap.