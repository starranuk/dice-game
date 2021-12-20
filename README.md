
![enter image description here](https://starranuk.github.io/dice-game/assets/readme_files/site-resp.png)

> Written with [StackEdit](https://starranuk.github.io/dice-game/index.html).
> **About**

# Game - Add the Dots
**The Idea**
The idea for this site/game came from a game my wife came up with for our 3 year old grandson. The game involved taking turns in rolling 2 dice or more with our Grandson, adding up the dots on the dice with the aim rolling a higher score than the other person. Very simple but the real aim of the game is that it gets a 3 year old counting the dots and adding the dice together in his head. His motivation was that he wanted to beat our score but we got him to add up both scores.

In this initial version you play against the computer, if your answer is incorrect the computer receives your points.

**The Game of Add the Dots**

 - Initially the game does require the supervision of an adult as the
   pop-up screens do contain text and information on scores but children
   do pick up the idea of the game very quickly as the basic idea is
   simple.

The game is played on a single page which displays:
 - The branding
 - Player and Computers scores
 - The option to enter their name which is then displayed in SweetAlert
   pop-up modals that display whether the player has entered the correct
   answer .
 - The six game level buttons:

![Game levels](https://starranuk.github.io/dice-game/assets/readme_files/levels.png)

 - Game Levels
   	 - Level 1 is a single dice absolute beginners level where a player only needs 		 to count the dots on the dice. A correct Level 1 answer
   is worth one point.
   	 - Level 2 generates two dice and is worth two points.
   	 - Level 3 generates three dice and is worth three points.
   	 - Level 4 generates four dice and is worth four points.
   	 - Level 5 generates five dice and is worth five points.
   	 - Level 6 generates six dice and is worth six points.

	 
**Random numbers for the dice are generated each time:**

 - The browser is refreshed.
 - The game is reset.
 - A game level button is pressed.
 - The Submit button is pressed.


**The goals of "Add the Dots"**
 - First to have a little fun and second to start teaching simple
   addition simply by counting the dots on the dice, just as a child
   would count the fingers on their hands.
 - The player is encouraged to try the harder levels because the number
   of points  generated increases as they go up the levels.

**Potential Customers**

 - Parents who want to encourage children to start understanding numbers
   through simple addition.

## Site Framework
**Colour list:**

 - Main Background rgb(228, 212, 212);
 - Main Font colour: #02172b
 - Name and Answer box background colours: aqua with a red border.

**Typography**

Although I imported Google Fonts I have mainly used Arial

**Images**

 - Royalty free images from www.freeiconspng.com which were edited in to
   alter their colours in MS paintbrush.
   blank.png - this was used to clear the image cache in the browser when changing from a higher to a lower level.

 - Bootstrap icons for dice buttons/levels and score icons.

**Wire Frame**

**Single Web page**

![Draft Web Page Design](https://starranuk.github.io/dice-game//assets/readme_files/main-wireframe.png)

**Mobile Interpretation**

![Mobile Phone Draft Responsive Design ](https://starranuk.github.io/dice-game//assets/readme_files/mobile-wireframe.png)

## Features

 - The site is a single page with the Header containing the branding,
   player scores, game instructions, game reset button, player name
   field and the Footer containing copyright and email address.

**Responsive layout**

 - The sites responsive design retains the style and branding of the
   site as screen sizes change.
  

**Header**

 - Branding Logo
 - Game title "Add the Dots"
 - The Player and Computer score icons and scores.
 - Game Instructions via pop-up "sweetalert2" .

![Game Instructions](https://starranuk.github.io/dice-game/assets/readme_files/game-inst.png)

 - A reset button and pop-up "sweetalert2" which contains a warning that the reset action can't be undone and that they will lose their scores.


![Reset Alert Message](https://starranuk.github.io/dice-game/assets/readme_files/resetalert.png)
 
 

 - An input field for the player to add their name. This is used when
   updating the player as to whether their answer was correct or
   incorrect. There are no game issues if the player does not enter
   their name.

![Enter your name](https://starranuk.github.io/dice-game/assets/readme_files/name.png)



**Game Level buttons**

 - The game level buttons are Bootstrap Icons/buttons which launch the
   relevant code within the Javascript Function, The level 1 game with
   single dice called when the game and script is first loaded.

![Game Levels](https://starranuk.github.io/dice-game/assets/readme_files/levels.png)

 - Dependant on the level selected the random dice are displayed, either
   when selecting a level or when the previous answer is submitted.

![Random dice](https://starranuk.github.io/dice-game/assets/readme_files/dice_display.png)

 - Thee player adds the dots/dice together and enters their answer for
   their total.

![enter image description here](https://starranuk.github.io/dice-game/assets/readme_files/ans_field_submit.png)
 

 - A correct answer with no player name displays:

 ![A correct answer no name displays](https://starranuk.github.io/dice-game/assets/readme_files/correct.png)
 

 - A correct answer with player name displays:

![enter image description here](https://starranuk.github.io/dice-game/assets/readme_files/correct_with_name.png)
  
  

 

 - A incorrect answer with no player name displays:

 ![A incorrect answer no name displays](https://starranuk.github.io/dice-game/assets/readme_files/incorrect.png)
 
 

 - A incorrect answer with player name displays:

![enter image description here](https://starranuk.github.io/dice-game/assets/readme_files/incorrect_with_name.png)

**Footer**
The footer contains:

 - Copyright © Dicey Game Design Ltd
 - enquiries@dicey.com

## Future Features

 - In this initial version you play against the computer,  if your answer is incorrect the computer receives your points, so a future version could allow for another player.
 - Currently if the answer is wrong the points are allocated to the computer, a future version could allow the player to have another attempt.
 - A more advanced version could also incorporate multiplication, subtraction and division.


## Technology Used

 - **HTML5** – Markup Langauge for structure and functionality.
 - **CSS3** – Cascading Stylsheets for responsiveness and consistant style
 - **Javascript** - To create dynamically update  content
   throughout the site.
 - **Bootstrap 5** – for responsive navigation and image grid.
 - **SweetAlert2** - for responsive alerts. 
 - **Google Fonts** – for Typography.
 - **GitPod** for code editing, saving commits and pushing versions to
   GitHub.
 - **Git** – version control.
 - **Microsoft Paintbrush** – resize images.
 - **Beutifiers** – to format code.
 - **Chrome Developer Tools** – testing page responsiveness.

## Testing

**User Testing**
The initial version of the program scored all of the levels the same and we noticed that while carrying out testing  our 3 year old grandson had worked out that he could earn the same points whatever level he was on so would stick to the lower levels. 

To combat this I updated the system to award 1 point for level 1, 2 points for level 2 and so on up to 6 points for level six. This had the desired result of encouraging him to try the harder levels as his main aim was to gain as many points as possible.

**Program Testing**

 - One of the main issues to solve was when changing from a
   higher to a lower game level the dice from the high level was still
   displayed via the browser cache. The image would disapear if the page is reloaded/refreshed but the scores would be lost.
   
    To resolve this I added a very small blank image which was called, through script, in all the levels apart from 6 and would replace the cached image but not be visible to the player.

**Responsiveness**

The responsive ranges targeted were:

 - For Handheld Touchscreens with screen max-width: 1280px
 - For Handheld Touchscreens with screen max-width: 1080px
 - Mobile phones with screen max-width: 653px
 - Mobile phones with screen max-width: 360px

**Responsiveness Testing**

Testing was initially carried using the Chrome Developer Tools using the responsive ranges listed above. Further developer tool testing was carried out using the Firefox and Microsoft Edge developer tools.

Hardware tested ranged from a Motorola G5s, Samsung Galaxy S5, 10" Amazon Kindle Fire Tablet and a widescreen desktop PC.

**Browser Testing**
Browsers used for testing were:

 - Google Chrome - Desktop and Mobile
 - Firefox - Desktop and Mobile
 - Microsoft Edge
 - Amazon Silk

**Performance Testing**
Performance tested against Google Lighthouse Developer Tools which were very useful for testing and as an aid to increase performance with its suggested improvements.
Initial tests showed that :

 - Performance was adequate at 92 points.

 - Accessibility very poor at 48 points.

 - Best Practices a mediocre 85.

 - SEO an improvable 83.

**Improvements**
 

 - Corrections made from errors picked up during HTML and CSS validation
   improved performance and best practice.

 

 - Accessibility was improved adding alt and aria-label's and by
   altering background contrasts, font colours.
 - SEO was improved by adding more descriptions to the Metafile content.

![enter image description here](https://starranuk.github.io/dice-game/assets/readme_files/final-test.png) 



## User Testing
### Testing - What a user may expect

 **Easy and intuitive game play .**

 - On entering the game site the user immediately see's the game levels in the form of dice 1 to 6 and a level 1 dice ready to play.
 - There is a clear Game Instructions button with a popup displaying game instructions
 - The Enter Name field has a placeholder displaying "Enter your name" in the field.

 **That all buttons within the game work.**

 - All  the the popup alerts "Game instructions" and "Game Reset", as well as the "Submit your answer" buttons work.

 **Site is understandable and viewable regardless of screen size.**
 
 

 - As well as desktop all pages are accessible and viewable    in the
   common Tablet and Mobile formats and tests ranged from a Motorola G5s, Samsung Galaxy S5, 10" Amazon Kindle Fire Tablet and a widescreen desktop PC.

 **Site provides a method of contact.**

 - Although no direct contact is initially predicted a contact email
   address is provided in the footer.

 **In Footer the user will find:**
	
 - Email address for enquiries
 -  Copyright
 

## What a user may want


 **A Parent may want a child to gain a quick understanding of how to play the game without supervision**
   
 

 - The game is simple with the only increase in difficulty coming from
   the addition of extra dice to add up each time the player progresses
   up to the next level.

 
 - The game shows the player whether their answer is correct or
   incorrect.  If incorrect the game shows the player the correct
   answer and allocates the points to the computer.

 - The game keeps a tally of the scores for both player and computer so that the player can see how well they are progressing.


## HTML and CSS Validation

**HTML Testing**
Initially some errors were picked up by both the HTML and CSS Validators. These were minor and ranged from Elements with no closing tags and missing semi colons. However, as the Validators tell you what the error is and on what line code these were easily resolved.
The following images are the pass results for all three pages:

**Game Page**
**HTML Validation**

![enter image description here](https://starranuk.github.io/dice-game/assets/readme_files/htmlChecker.png)

**CSS Validation**
Although a few parsing errors were picked up initially these were resolved and the CSS code has now passed W3C validation with permission to embed their logo's if required.

![enter image description here](https://starranuk.github.io/dice-game/assets/readme_files/W3CSSValidator.png)



## Deployment

**Add Commit and Push files**
With the current project open in **GitPod** and all files saved navigate to the command line:

 1. At the command prompt type git add . and press the Enter key – this
    selects all files in the project.
 2. At the next command prompt type git commit –m “add a relative
    comment” and press the Enter key – this action adds the files to the
    commit.
 3. At the next command prompt type git push and press the Enter key –
    this action commits this version of your project to your GitHub
    repository with the comment from the commit as it the label for any
    files that were updated compared to the previous version.

**Deploying via GitHub Pages**

 1. Open GitHub and select repository for deployment.

 2. Above the repository and last option on the right is Settings,
    select it.

 3. Scroll down to the GitHub Pages section and you will see the following message “Pages settings now has its own dedicated tab! Check it out here!”

 4. Click on the “Check it out here!” link.
 5. This opens up a dedicated GitHub Pages settings page. 
 6. In the Source section select Master Branch from the dropdown menu – the page refreshes.
 7. Next select the Save button – the page refreshes again and you will see the url to the site above - https://starranuk.github.io/dice-game/
 8. The site is now deployed

### Forking
Forking the GitHub Repository
•	When selecting the Fork button the GitHub message displayed was *“Cannot fork because you own this repository and are not a member of any organisations”*


## Credits

**Acknowledgements**
 - Nicola Tarran for original idea and proof reading.
 - This project was inspired by the Code Institute Love Maths walk through by 
 - AJGreaves and includes altered code and methods used in that tutorial.
* The writing data to the DOM and the inclusion of SweetAlerts was suggested by my tutor Brian Macharia.
 - W3Schools - for code and snippets
 















