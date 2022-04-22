# Laptop Customisation Tool app

## Assumptions

1.  Data is assumed to be fetched from some sort of api, so a mocked data is being used.
2.  The UI/UX design given is assumed as the final and agreed design so this work mostly focus on the refactoring of the code base.

## Libraries and tools

1.  Application - React + Typescript
    - To replace normal Html5 and Jquery for building application
2.  State management - React hooks
    - Considering the current state of the app, useState seem to be sufficient for this purpose.
3.  Styling - Sass
    - No library is used and pure sccs is used instead based on the current styling requirement.
4.  Compatibility - Babel
    - Since in this case we are using babel to compile jsx, it also can be used to handle any browser incompatibly and will drop modernizr can be dropped.
5.  Linting - Eslint, Prettier
    - For easy development experience and also the best way to standardise the format across current and future developer.
    - It would help in implementing accessibility(a11y) during development process.
6.  Testing - Jest
    -For performing, snapshot, unit and integration test.

## Getting started

Development

    npm start

Production/Deployment

    npm run build

Linting

    npm run lint

Testing

    npm run test

## Additional info and future consideration

1.  Added a11y in terms of keyboard navigation and selection - eg: tab to jump from one option to another and space bar to select.
2.  Some other state management library could be used based on the necessity.(redux)
3.  Some other css library in case we need more advance feature(emotion)
4.  Could use Docker for production and development.
