# Portfolio

Demo: https://arkaes13.github.io/Portfolio/

## Introduction
Every developer needs a portfolio and this one is mine. It will be used to showcase some of my projects, give some brief information about myself, and receive correspondence. Created using React and Webpack.

---

## Breakdown

### Header
I wanted something simple but attention grabbing for the header. The header takes up the entire view height of the screen and animates in an introduction of myself. It features multiple `:hover` effects to showcase fundamental CSS skills without being too flashy. 

### Navbar
Initially, the navbar is hidden offscreen until the user proceeds to the other sections. The navbar then becomes sticky and stays at the top of the screen for the rest of the webpage. It features links that navigate to the other sections of the webpage and tracks which section the user is currently viewing and highlights that section on the navbar. It also features a link to my resume which is hosted on AWS.

### About Me
The about me section features a brief description about my journey as a programmer and has some devIcons to highlight technologies that I have experience with. I decided against adding a photo or personal life description to prevent potential employers from forming preconceptions about me without getting the chance to talk to me first.

### Project Section
The project section is where I will showcase various projects that I am proud of. It features a snippet of the project, a brief description, and two buttons. One button navigates to the live demo and the other navigates to the repository.

### Contact Section
A contact form where users can send me email messages. The fields are validated using regular expressions and submitted through formsubmit.co, which is an easy to use form backend.

---

## Known Issues
When a form is submitted, the user is directed to a formsubmit.co thank you page. The thank you page is supposed to have a link that goes back to the previous page, however, instead of directing to `https://arkaes13.github.io/Portfolio/`, it directs to `https://arkaes13.github.io/` which causes a 404. The thank you page works locally but for some reason this problem occurs when hosted on github pages. Formsubmit.co has a feature that allows you to bypass the thank you page and link to whatever you want. Linking back to the portfolio creates a confusing UX that leaves the user unsure if their message was sent. Additionally, React and webpack also create problems when trying to implement other solutions. Still working on finding a solution that I am happy with.

If you're wondering why my webpack files are in the root folder instead of organized into a /dist folder, it's because github pages expects an index.html file in the root. An easy solution to my portfolio to host on github pages was just to bundle everything in the root folder.
---

## Thank you for your time :)