# Holberg Financial Tech Challenge

This project is a technical challene from Holberg Financial for a position as a software engineer.

For the prompt, see [the prompt](prompt.md).

## Getting Started

To run this web application locally, open your terminal and type:

```
  >$ npm install
  >$ npm run build-dev -- --open
```

Note: This method uses Webpack Dev Server to compile and serve the application from memory with source-mapping enabled. On older computers and computers running many processes, this can occasionally be problematic.

The calculator will parse both valid and "invalid" Roman numerals, but will only return valid Roman numerals. Enjoy the ability to do math!

## Future Work

Were I to continue working on this, I would:

- fix the very primitive UI and theme
- modify responsiveness of both application and font-size in screen
- add in error handling (i.e. - Some kind of punny "We don't handle negatives")
- add a very simplistic "Halp!" drop-down on the page for usage instructions
- add a "classic" mode that just has an abacus (and instructions on how to use)
- possibly build a server with some kind of cache for handling large values

## Blockers

I ran into a large number of issues due to my decision to tackle the front end using Babel 7 rather than sticking with what I am familiar with in Babel 6. By sticking with what I know, I could have saved at least 45 minutes which is valuable in the context of a coding challenge.

I also ran into several issues by building everything into one component with a few dumb children to manage styling and semantic render functions. I could have used more meta-programming practices to create more modular code and avoid the need to hard-code as much of the logic.

I spent more time than necessary working on the math to establish what the appropriate font-size would be in relative units for the text to be responsive. I also (as always) ended up fighting with CSS to try to get the text centered on each Button component, eventually overcoming that hurdle be adding a child to the button.
