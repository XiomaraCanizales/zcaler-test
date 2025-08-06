<!-- Compose an email message to the customer describing the asset you have created.
Detail the features, expected behavior, and capabilities in non-technical terms. -->

<!-- This Walnutter is comfortable using HTML/CSS and would like to know how they can
change the colors in the grid. Include instructions on what code changes they can
make to alter the color palette. -->

Subject: Your New Interactive Grid Game is Ready!

Hello, {customer name}

I want to share with you the custom asset that was created for you. It´s a fun and engaging challente designed to be intuitive and visual appealing.

## Asset Description
This is a 5x5 grid of cells that will randonly display in white or yellow. 
There are two versions of the asset. The first one, displays the grid and hovers from color to color.
The second one, is a little game where the goal is to find a hidden image by interacting with the cells.

### How to Play the Game
1. Start a New Game: Just play "Start Game", this will randomize all cell colors on the grid and hide an image in one of the yellow cells. The hover action is been count.
2. Explore the Grid: Move the mouse over the cells. 
    - When you hover over any cell, its color will termporarily flip to the oppoiste color.
    - The counter will increase each time you hover over the white cell, causing it to turn yellow. This tracks how many guesses you make before finding the image.
3. Find the Hidden Image: The game continues as you hover over vells. When your mouse passes over the yellow cell that contains the hidden image, the image will instantly appear.
4. Game Over & Restart: Once the image is found, the game ends, the counter stops and you can restart the game by pressing the "Play Game " button.

### Capabilities
The interactive grid provides a simple and engaging experience.
It´s designed to be:
- Visual Responsive
- Easy to Understand
- Interactive Fun

## How to Change Your Game´s Colors
Your game's colors are controlled by CSS variables defined in a special section of the code. When you change the color inside the container, every part of the game that uses that container's name will automatically update!
1. Locate the color palette section: Open the styles.css file and locate the following code:
:root {
    --primary-color: rgb(45, 33, 82);
    --secondary-color: #ff56bb;
    --secondary-color-hover: #e64ea9;
    --white-color: #f0f0f0;
    --yellow-color: #E9B845;
}

2. Change each color varialble: You can change the color value for each variable using hex codes, RGB values or color names.
Here's what each variable controls and how you might change it:

--primary-color:
What it controls: This color is used for the border of your grid, and the text for the game status ("Find the image!") and the hover counter.
To change it: Replace rgb(45, 33, 82) with your desired color.

--secondary-color:
What it controls: This is the main background color of your "Start Game" button.
To change it: Replace #ff56bb with your desired color.

--secondary-color-hover:
What it controls: This is the color the "Start Game" button changes to when you hover your mouse over it. It should typically be a slightly different shade of your --secondary-color for a nice visual effect.
To change it: Replace #e64ea4 with your desired hover color.

--white-color:
What it controls: This is one of the two main colors for your grid cells. It's also used as the background color for the entire page and the text color for the button.
To change it: Replace #f0f0f0 with your desired "first" grid cell color.

--yellow-color:
What it controls: This is the other main color for your grid cells. The hidden image will always appear in a cell that has this color.
To change it: Replace #E9B845 with your desired "second" grid cell color.

3. You don't need to change any other CSS rules for the hover effect to work correctly with your new palette.
Feel free to play around with different color combinations in the :root section. Save your changes and refresh the page to see your new color scheme in action. It's a great way to personalize your game!


I hope you enjoy playing around with it. Please let me know if you have any questions or would like any further adjustments.

Best regards,

Xiomara Canizales
Customer Experience Team