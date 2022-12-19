# Description

A mini project to practice my frontend skills. Used React and SASS. This will include a show list of the features which I implemented (which I thought was quite cool and would like to share!)

## Running Locally

`npm start` should do the trick.

## Notes

- To ensure that React components take up the entire screen space. Will need to ensure `height: 100vh` or `100%` is utilize. Without this, spaces will not be filled<br /><br />
- The class `.order-body` is a perfect example of having a wrapper around a component that you would want to take up the rest of the empty spaces of the screen vertically <b>while still ensuring the components are ordered in a different direction (horizontally)</b> with the use of second wrapper wrapper - `.order-body-main`
- This is important and it serves as a reminder that sometimes 2 different wrappers are needed; the first to ensure the second takes up the rest of the screen space vertically and the second to ensure content is ordered as preferred - horizontally
- Related resources found to be useful: https://stackoverflow.com/questions/50649191/flexbox-fill-remaining-space and https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/ (to include more notes and examples to better understand what happens underneath `flex`<br /><br />
- With large images, it may take a second or more (which is obvious since image will render slower than the rest of the content); so an alternative is to add content to the `index.html` file within the `root` tags which will render first before the rest of the react content that will render after that which replaces all the loading content that you has been added.
- Related resources found: https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
