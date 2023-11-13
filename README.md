#MemoryGame
<h1 align="center">Memory Card Game</h1>

[View the live project here](https://mariusmilitaru32.github.io/MemoryGame/)

I built this memory card game as a fun and interactive way to challenge the mind and improve memory skills. The concept of the game is simple yet engaging, making it a great pastime for people of all ages. This project allowed me to apply and showcase my skills in JavaScript, HTML, and CSS. It was a great opportunity for me to experiment with different techniques and libraries, and to learn more about Javascript and user experience design.

![Mockup](documentation/responsive.png)

## Index – Table of Contents
- [Index – Table of Contents](#index--table-of-contents)
- [User Experience (UX)](#user-experience-ux)
- [Features](#features)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Bugs](#bugs)
- [Unfixed bugs](#unfixed-bugs)
- [Acknowledgements](#acknowledgements)


## User Experience (UX)

- ### User stories
  - #### A. First Time Visitor
    1. As a first time visitor, I want to easily understand how I to play the game.
    2. As a first time visitor, I want to be able to easily reset the game.
    3. As a first time visitor, I want to be able to easily start the game.
    4. As a first time visitor, I want to be able to easily find how I can get in contact with the business owner.
   
   -   #### B. Returning Visitor 
    1. As a returning visitor, I want to be able to send a quick feedback to the business owner.
    2. As a returning visitor, I want to be able to remember how I can play the game.
   
## Features

- ### Start Game
   As part of the the memory card game, start game button is part of the gaming interface. It helps users to start the game at any time.
 
  ![startGame](documentation/startbutton.png)

- ### Reset Button
   When clicked, it instantly clears the current game progress and starts a new game. This means all the cards are shuffled and placed face down again, and the score, if applicable, is reset to its initial state.
  
  ![ResetButton](documentation/startbutton.png)

- ### Cards grid
  The memory card game is set up on a grid of 4x4, making a total of 16 cards. Each card is a tile that the player can flip by clicking on it. The cards are arranged randomly on the grid at the start of each game.
  There are 8 pairs of matching cards, and each pair has a unique design. The challenge for the player is to remember the locations of each pair as they flip the cards.
  When a card is clicked, it flips over to reveal its design. The goal of the game is to find all 8 pairs by remembering where each card is located. When the player flips over two cards with the same design in succession, it’s a match, and those cards remain face up. If the cards don’t match, they flip back over.

  ![CardsGrid](documentation/cardsgrid.png)

- ### How to Play
  The “How to Play” button is designed to help players understand the rules and objectives of the memory card game. When this button is clicked, a pop-up window appears on the screen with detailed instructions on how to play the game.

  ![HowToPlay](documentation/howtoplay.png)

- ### Contact Us
  
  Contact form can be found on contact page. I have included following required fields: name, email address, message/feedback for the developer and the send button which create a post requested to the emailjs.

  ![ContactUs](documentation/contactpage.png)

- ### Contact Form confirmation and return to home page
  
  Emailjs has been integrated into the contact form. After the post response is received, a message is displayed to the user to confirm that the email has been sent. Also, an automatic redirect has been implemented after the email-sent message is displayed.

  ![EmailConfirmation](documentation/email.png)
  ![Redirect](documentation/redirect.png)

## Design
  - ### Color scheme
      As part of designing the site I decided to use orange, red and black as main colours. The pallete has been generated using [coolors.co](https://coolors.co/).

  ![color-pallete](documentation/MemoryGameColors.png)

- ### Typography
  - Google Fonts were used to import Roboto into style.css

- ### Wireframes 
   - Home Page <br>
     [Home page desktop](documentation/wireframes/IndexDesktop.png)<br>
     [Home page mobile](documentation//wireframes/IndexMobile.png)
   - How To Play <br>
     [How To Play Desktop](documentation/wireframes/HowToPlayDesktop.png)<br>
     [How to Play Mobile](documentation/wireframes/HowToPlayMobile.png)
   - Contact Page <br>
     [Contact page desktop](documentation/wireframes/ContactDesktop.png)<br>
     [Contact page mobile](documentation//wireframes/ContactMobile.png)

## Technologies Used
  - ### Languages Used
    -   [HTML5](https://en.wikipedia.org/wiki/HTML5)
    -   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    -   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
  - ### Frameworks, Libraries and Programs Used
    -   [Google Fonts:](https://fonts.google.com/) was used to import the 'Roboto' font into the style.css file 
    -   [Git:](https://git-scm.com/) was used for version control by utilising VSCode terminal to commit to Git and Push to GitHub.
    -   [GitHub:](https://github.com/) was used as the repository for the projects code after being pushed from Git.
    -   [Visual Studio Code](https://code.visualstudio.com/) was used as IDE editor.
    -   [Balsamiq:](https://balsamiq.com/) was used to create the wireframes.
    -   [EmailJs:](https://www.emailjs.com/) was used to be able to send messages   through contact form. 
  
## Testing
  - ### For testing please refer to the [TESTING.md](/TESTING.md)

## Deployment
  - ### How this site was deployed
    - In the GitHub repository, navigate to the Settings tab, then choose Pages from the left hand menu 
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment
    - Any changes pushed to the master branch will take effect on the live project
  - ### Cloning
    - Go to the [GitHub repository](https://github.com/mariusmilitaru32/MemoryGame) 
    - Locate the Code button above the list of files and click it
    - Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
    - Open Git Bash or Terminal
    - Change the current working directory to the one where you want the cloned directory
    - In your IDE Terminal, type the following command to clone my repository: "git clone https://github.com/mariusmilitaru32/MemoryGame.git".
  - ### Forking
    By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
    You can fork this repository by using the following steps:
    
      - Log in to GitHub and locate the [GitHub Repository](https://github.com/mariusmilitaru32/MemoryGame.git)
      - At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
      - Once clicked, you should now have a copy of the original repository in your own GitHub account!
## Credits
  - CodeInstitute for the EmailJs code
  - [CodePen](https://codepen.io/) for the how to play pop up window and contact form 

## Bugs
  - First bug discovered in the building process was when the game was finished the timmer was not stopped. To fix this bug I had to add the global method "clearInterval(timerInterval);" to the gameFinished function.
  - The second bug that was discovered involved the cards being clickable even when the game had not started. To address this issue, I created a boolean variable called 'gameStarted.' When the start button is clicked, the 'startGame()' function sets 'gameStarted' to true. The 'onCardClick()' function checks if 'gameStarted' is true before allowing the cards to flip.

## Unfixed bugs
 - There are not any bugs left that I am aware of.

## Acknowledgements
  -I would like to thank [Codeinstitute](https://codeinstitute.net/) slack community for helping me during my studies and project creation.