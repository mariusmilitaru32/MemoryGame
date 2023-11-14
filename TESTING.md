- ### Validator Testing
  - HTML Validator
  - [HTML results home page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmariusmilitaru32.github.io%2FMemoryGame%2Findex.html): no errors/warnings
  - [HTML results contact page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmariusmilitaru32.github.io%2FMemoryGame%2Fcontact.html): two warning from EmailJs script
  - CSS Validator
  - [CSS Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmariusmilitaru32.github.io%2FMemoryGame%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en): no errors/warnings

- ### Browser Compatibility
  - Testing has been carried out on the following browsers with no issues:
    - Chrome Version 119.0.6045.124 (Official Build) (64-bit)
    - Firefox Version 119.0.1 (64-bit)
    - Edge Version 119.0.2151.58 (Official build) (64-bit)
  - No issues/warnning are been reported in browser console:
   - ![Index page console](documentation/tests/IndexPageConsole.png)
   - ![Index page console](documentation/tests/ContactPageConsole.png)


- ### User Story Testing
  
| User Story                                                                                                  | Screenshot                                         |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| As a first time visitor, I want to easily understand how I to play the game.                                | ![screenshot](documentation/tests/HowToPlayUser.png)|
| As a first time visitor, I want to be able to easily reset the game.                                        | ![screenshot](documentation/startbutton.png)       |
| As a first time visitor, I want to be able to easily start the game.                                        | ![screenshot](documentation/startbutton.png)       |
| As a first time visitor, I want to be able to easily find how I can get in contact with the business owner. | ![screenshot](documentation/contactpage.png)       |
| As a returning visitor, I want to be able to send a quick feedback to the business owner.                   | ![screenshot](documentation/contactpage.png)       |
| As a returning visitor, I want to be able to remember how I can play the game.                              | ![screenshot](documentation/tests/HowToPlayUser.png)|

 - ### Lighthouse test
    
   | Page      | Device  | Screenshot                                                    | Notes                                                                                        |
   | --------- | ------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
   | Home      | Mobile  | ![screenshot](documentation/tests/LighthouseIndexMobile.png)  |                                                                                              |
   | Hone      | Desktop | ![screenshot](documentation/tests/LighthouseIndexDesktop.png) |                                                                                              |
   | Contact   | Mobile  | ![screenshot](documentation/tests/LighthouseContactMobile.png)|                                                                                              |
   | Contact   | Desktop | ![screenshot](documentation/tests/LighthouseContactDekstop.png)|                                                                                             |

- ### Responsiveness
  The website has been tested on different screen size using Google Chrome developer tool simulating devices like Iphone 14 Pro Max, Samsung S20 Ultra and Surface Pro 7.
   - [Iphone 14 Pro Max DevTool Screenshoot](documentation/tests/Iphone14ProMax.png)
   - [Samsung S20 Ultra Screenshoot](documentation/tests/Galaxys20Ultra.png)
   - [Surface Pro](documentatation/tests/SurfacePro.png)
   - [My mobile phone](documentation/tests/GalaxyNote20Ultra.PNG)