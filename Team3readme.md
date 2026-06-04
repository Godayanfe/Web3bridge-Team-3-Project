# Interactive Card Details Form

A Frontend Mentor challenge project built as the Team 3 - Web3Bridge final project. Users fill in their card details on a form and see the card preview update in real time. On successful submission, a completion screen is shown.

## Features

- Live card preview that updates as the user types
- Cardholder name, card number, expiry date (month and year), and CVC fields
- Card number auto-formats with spaces every 4 digits
- Input validation with error messages on submit
- Success/completion screen after valid form submission
- Fully responsive — works on mobile and desktop

## Built With

- HTML5
- Tailwind CSS
- Vanilla CSS - internal and inline CSS
- Javascript

## Project Structure

WEB3BRIDGE-FINAL-PROJECT/
├── design/ # Design reference files
├── images/ # Card and background images
├── src/ # Tailwind CSS source
├── index.html # Main HTML file
├── script.js # JavaScript logic
├── input.css # Tailwind input file
└── README.md

## Team Members

| Name                 | GitHub                  |
| -------------------- | ----------------------- |
| Stephenie Chikaodili | [@chikaodiliogali-lang] |
| Oluwatosin Rotimi    | [@Godayanfe]            |
| Alexandra Okonkwo    | [@devvcyborge]          |
| Dunsin Omowaye       | [@bozzmqn01]            |

## Challenges We Faced

### 1. Button Behaviour

We noticed the confirm button was visible on the page but clicking it did nothing. The issue turned out to be that the button was missing a type="submit" attribute. Without it, the button had no defined behaviour so the form never submitted. Once we added type="submit" to the button, it worked as expected.

### 2. Positioning the Front and Back Cards

Getting the two cards to sit correctly on top of each other — with the back card slightly offset behind the front card — was tricky. On mobile the layout stacks differently than on desktop, so we had to carefully use Tailwind's responsive prefixes (`md:`) to control the position, size, and other properties of each card at different screen sizes. It took several rounds of adjustments to get both cards looking right across all screen sizes.

### 3. Git Merge Conflicts

Since we were working as a team on the same files, we ran into merge conflicts when pushing and pulling code from GitHub. Lines of code that different team members had edited at the same time would clash, and Git could not automatically decide which version to keep. We resolved this by communicating more clearly about who was working on which part of the code, pulling the latest changes before starting work, and carefully manually merging the correct version.

### 4. Applying Google Fonts

We had difficulty getting our custom font from Google Fonts to apply correctly across the page. Tailwind CSS uses its own default font stack, so simply linking the Google Font in the <head> was not enough — Tailwind was overriding it. We had to add a small CSS rule in the <style> block to set the font-family on the body directly, which is one of the cases where we used vanilla CSS alongside Tailwind.

### 5. Background Images on the Cards and Left Panel

Tailwind's utility classes for background images only support static values defined in the config file, so we could not use our custom image paths directly as Tailwind classes. We solved this by using vanilla CSS.. This was a deliberate choice to keep things simple while still getting the result we needed.

## Live Server

github link:
