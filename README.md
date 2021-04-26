# Setup

**Please do not fork this repo. This will keep your solution private.** Instead, please clone the project into a new repository and share it with us when you are finished.

This repo was created for use on macOS and tested in the Chrome browser.

From the repo root open one tab and run:
```
cd server
yarn
yarn start
```
In another tab, run:
```
cd client
yarn
yarn start
```

The `/server` component of this project exists only to serve mock data to the client. **All of your work will be in the `/client` folder.**

# Your Code

### Please write your code as if you were contributing to a large production application.

#### What we care about seeing in your solution:
- **Code quality**: DRY, modular, clear, maintainable, well-thought-out, type safe code with good separation of concerns and encapsulation. Show us code you're proud of!
- **Thinking**: how you organize your solution, and what considerations are expressed in your code. If you find the mock resources of this repo are not sufficient to implement a consideration that is important to you, or you simply run out of time, consider a few well-placed comments to communicate additional considerations you had 
- **Functionality**: All tasks described below should be complete and functional, with no TypeScript compile errors or runtime errors
- **Communication**: Where asked, please answer the questions in this document to give us an idea of what communicating with you professionally looks like
#### What we do not care about seeing in your solution:
- **Styling**: for simplicity, and to reduce emphasis, the limited styling in this repo is done inline. In production, we use styled-components. Please style just enough to communicate UI intent and keep the UX clear

# Your Tasks

Your tasks in this repo are mocks of real features implemented by our engineers in our mobile app,. We chose to present the tasks to you as a React web application instead of a React Native application for ease of setup.

Because the features you are tasked with building require use of file system capabilities not available in the browser, we created a mock third party library in `mocks/fetchBlob`, and corresponding components that consume the mock file system content in `mocks/validators`.

- Do not modify any contents of the `client/src/mocks` folder 
- Do not access `localStorage` directly, use the mocked function `fetchBlob` and the mocked `fs` methods
- You do not need to modify any contents of the `client/src/graphql` folder (the many fields selected in those queries are those we use in production)
- Do not modify any contents of the `server` folder

Your tasks below are broken into two sections: (1) strictly TypeScript issues, and (2) a new feature that needs to be implemented.

## Your Tasks (1): TSFixMe's
Before you begin your task, your team members need some help with a few TypeScript issues.
- [ ] The team agreed that our custom navigation solution needs to be type safe, and that we should be able to add and remove screen components with a single line of code. Looking at `NavigationProvider`, you see the engineer who started this work has the right pattern in the `routes` object he has created, but couldn't figure out the types. Without changing the JS code, you fix the types such that calls to `navigate()` can only be made with valid arguments---that is, `activeRoute` exists in `routes`, and the provided `params` object matches the screen component's props. If you've done this correctly, you should find some errors in `FavoritesScreen`. Please commit your work with the message `TSFixMe 1`.
- [ ] Moments after pushing your commit, a junior dev pings you asking for help resolving new errors on `FavoritesScreen` introduced by your fix. You take a look and see you'll have to correctly type the parameter `item` of the `onClickItem` callback. Your first thought is to add some conditionals before the `navigate()` call, but you remember this component is used in hundreds of location and this approach would necessitate slightly different conditional checks at each call site. Being the resident TypeScript rockstar, you immediately think of a better solution, and let the junior know he's about to learn something really cool. You make this fix without modifying any code in `FavoritesScreen`, and verify that `item` is now correctly typed by changing `route` to a player screen for a different content type and witnessing the accompanying TypeScript error. Please commit your work with the message `TSFixMe 2`.
- [ ] You're just about to step away when you notice the many `ts-ignore` comments in `FavoritesScreen` just above. The junior devs eye's light up as he tells you this was another problem he was having, and asks if you know how to solve it. You like the JS code he's already written, and see you can solve the issue without altering its structure in any way, just fixing the types. He asks if we can use `as` here. You explain to him the issues with that approach, and show him the right way to handle this. In the space provided below, please write out the explanation you gave for why we should not use `as` here, and commit your work with the message `TSFixMe 3`.

##### Response to the Junior Dev

* "We should not use `as` here because... **@TODO_WRITE_YOUR_ANSWER_HERE**"

## Your Tasks (2): New Download Feature
The team is grateful for your help resolving those TypeScript issues! Now, you sit down to read your requirements for the new Downloads feature you've been tasked with.

You know that currently users can see content recommended to them on the `HomeScreen`, and click that content to be navigated to that content's respective content screen (i.e. the `ClassScreen`, `MeditationScreen`, `ArticleScreen`, or `CourseScreen`). It looks like this new feature asks you to let users download any of those pieces of content for offline viewing.

#### New functionality to add:
- [ ] Add a Download button to each content screen which, when clicked, begins to download whatever is necessary to view the same content, in this same screen, while offline.
- [ ] When the download button is clicked, replace it with a Cancel button and a progress bar. The progress bar should display accurately represent completion percent, and should also display the completion percent in number form (e.g. 56%)
- [ ] When the Cancel button is clicked, the download should be stopped and any partial content removed
- [ ] When the download is finished, a Remove download button should replace the Cancel button, and the progress bar should be removed
- [ ] The same Cancel button with progress bar, as well as Remove button, should be shown on the `DownloadCard` used on the `DownloadScreen`
- [ ] After a download is finished, a user should be able to see the content offline (simulated by clicking the Go Offline button in the upper right of the application, navigating to the corresponding content screen, and seeing all green checks---no red X's or console errors). Hint: we'll want to continue to use the media from the field `media_source` while online, but download and use the media from `media_download` field while offline.
- [ ] If the application is closed or refreshed, downloads should not be lost
- [ ] Though this requirement was not specified, you realize that when the data requirements for content screens or `DownloadCard`s change, the persisted content will be outdated, and any TypeScript definitions describing data going in to and coming out of the persistance layer will falsely describe that data, leading to runtime errors. You recall that images, media, and PDFs are rarely changed, and since they are so large, opt NOT to redownload these after an app update. The content data, however, (that which powers content screens and the download card) WILL change. You know that the app has an API that accepts a callback after an update has been installed. Putting these things together you have a clear plan of attack. Before you begin implementing this feature, please describe your approach below, as though you were talking to a fellow engineer, and commit your response with the commit message `Implementation plan`

##### Implementation Plan

**@TODO_WRITE_YOUR_ANSWER_HERE**
