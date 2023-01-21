# Description

A mini project to practice my frontend skills. Used React and SASS. This will include a show list of the features which I implemented (which I thought was quite cool and would like to share just for fun and my reference!)

## Running Locally

`npm start` should do the trick.

## Notes

- To ensure that React components take up the entire screen space. Will need to ensure `height: 100vh` or `100%` is utilize. Without this, spaces will not be filled. Applicable for when we want child components to have specific width or take up a part of the parent's width component as well<br /><br />
- The class `.order-body` is a perfect example of having a wrapper around a component that you would want to take up the rest of the empty spaces of the screen vertically <b>while still ensuring the components are ordered in a different direction (horizontally)</b> with the use of second wrapper wrapper - `.order-body-main`
- This is important and it serves as a reminder that sometimes 2 different wrappers are needed; the first to ensure the second takes up the rest of the screen space vertically and the second to ensure content is ordered as preferred - horizontally
- Related resources found to be useful: https://stackoverflow.com/questions/50649191/flexbox-fill-remaining-space and https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/ (to include more notes and examples to better understand what happens underneath `flex`<br /><br />
- With large images, it may take a second or more (which is obvious since image will render slower than the rest of the content); so an alternative is to add content to the `index.html` file within the `root` tags which will render first before the rest of the react content that will render after that which replaces all the loading content that you has been added.
- Related resources found: https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering<br /><br />
- Rather than changing the images and re-renderring them when user clicks a specific button which causes the image to have that short obvious loading moment - we can reposition them outside of the viewing screen. With the use of `position: absolute` and moving images either on top of the parent container or below. However, the image moved to the bottom will take up space - making it visible to users which we don't want.
- We want to give users the illusion of a new image sliding into the screen instead. To achieve this, we use `overflow: hidden` on the parent component of where we place all the images. `overflow: hidden` on the parent component (which is the main body that occupies the entire screen) will hide content/images that are beyond the container - which we have deliberately done to produce a sliding effect later on.<br /><br />
- It is worth noting that ensuring your main body width is set to a specific `max-width` so that the body actually takes the width of the window. A lesson well learn during the development is forgetting to do this thus causing issues / buggy styling when setting a child's width to a specific percentage. As a child's width `%` (applies to height as well) would be based on its parents' width - not setting a max width would cause the parent's width to continue to grow as long as more child items are added to the very same container (which causes the parent's width to unncessarily grow in width - causing a chain reaction to the child's width to grow at the same time). 
- Related resources found: https://css-tricks.com/almanac/properties/w/width/ <br /><br />
- Project does not have <code>React.FC</code> or <code>React.FunctionComponent</code> in the code because it doesn't seem to show any benefits to doing so. There are also a few unintentional cons like: causing the component to implicitly take a child component, not being able to support generic component, etc. (more can be found in the link included)
- Related resources found: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components <br /><br />
