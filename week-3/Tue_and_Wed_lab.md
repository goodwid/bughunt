# BusMall
## New week, new project!

You're hired by a startup named BusMall, whose product is similar to the SkyMall catalog found in airplane seatback pockets, a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel and nausea induced by jet fuel fumes. But in this case, BusMall catalogs are placed on Portland transit system buses (whose overall travel times are now comparable to cross-country flights, after all...).

Catalogs are expensive to print and distribute, products cost resources to make and store, and BusMall is a lean startup that carefully watches expenses, so it will feature only products in its catalog that are likely to sell well. Thus BusMall will do market analysis on proposed products to gauge consumer interest before actually listing them in its catalog.

BusMall wants a web app that shows potential products to users, showing three products at a time (three images side by side in a row), so you'll need to manage the size and aspect ratio of the images, and may need to edit them a bit by cropping them (alternatively, you can set images' CSS background-size to "cover" or "contain").

Your web page should show three randomly selected product images and let users select the product they'd be most likely to purchase out of the three images, then repeat for a total of 16 selections ("votes").

To keep the marketing analysis unbiased, do not show voting results before all 16 votes have been cast; even after 16 votes, do not automatically show the results; instead, BusMall wants you to show two buttons on the page: one to show voting results, the other to let the user vote 8 more times then show results automatically after the 8th additional vote.<br>
[**Tue**: hide/show the two buttons, but implement the callback only for the "show results" button]<br>
[**Wed**: Implement the "8 more votes" button's callback.]

To show results, your app should show product votes as a histogram.<br>
[**Tue**: Draw the histogram using text characters, DOM elements (e.g., empty rectangles with a solid background color, whose size is proportional to the number of votes for its associated product), or a dynamically generated HTML table.]<br>
[**Wed**: Draw the histogram using a &lt;canvas&gt; element and a graphics library.]

BusMall is interested not only in the total number of votes, but also the percentage of times that an item was clicked when it was shown. Thus your app must also track of how many times each image has been displayed regardless of whether it was ever selected.

[**Wed**: BusMall wants a professional-looking app, so use a custom font(s), color palette, layout with semantic HTML (optionally use flexbox, unsemantic, bootstrap, Skeleton, or other layout library). Choose aesthetically appealing style settings such as font size and weight, padding, borders, margins, etc.]

# User Stories

**DO THIS STEP FIRST**  Part of your assignment is to write your own user stories. Consider the multiple roles involved: marketing research team, developer, focus group user. The commit logs in your repo will have a few initial commits for the scaffolding process (LICENSE, README.md) but next, you should have a 'user stories' commit in place *before* you write any web app code.

## Steps/features due at the end of Tuesday

- Create a new repo or folder for this weekly project called *bus-mall*.
- Scaffold your repo with the usual README.md and LICENSE. Clone your repo and add an *img/* folder to your local workspace to hold product images.
- Write the purpose of your app in README.md, then add your user stories, then git **a-c-p**. Use good Markdown style to make README.md look nice; use the Markdown Preview feature in Atom to help you in this task.
- Populate your img/ folder with at least seven (7) images, then **a-c-p**.
- Write code that randomly selects three images from img/, then display them "side by side by side" in the browser window. [**+1 Extra Credit** if you make your site responsive, such that the images are shown in a column when the browser viewport is narrow.]
- Handle mouse clicks on displayed images, and track clicks and the "times displayed" count for each image.
- When an image is clicked, show three new random images. Images can repeat -- the random selection process should pick randomly from the full set of images each time.
- Write a constructor that creates an object associated with each image, and has these properties:
 - Filename
 - Product Name
 - Number of times shown
 - Number of times clicked
- Include two hidden buttons, one to display votes, one to allow 8 more votes, and make the buttons visible after the 16th vote.
- Implement the callback for the "display votes" button, which is a function that plots vote results.

## Steps/features due at the end of Wednesday
- To display the histogram, use a &lt;canvas&gt; element(s) and a JS graphics library. Show a histogram of votes as a bar chart. Plot percentage values on the same chart (also as bars, or as text labels like "12%"), or plot them in a bar chart in a separate &lt;canvas&gt; element, whichever is easier. The size and look of your chart(s) is up to you, just be sure to put the chart in an area beneath the three images.
- Hide the "show results" and "8 more votes" buttons immediately after the user clicks "show results", then draw the histogram. You should toggle the "visibility" CSS attribute of buttons, not the "display" attribute when showing/hiding buttons. This prevents contents below the buttons (say, a footer, or paragraph that you might place there) from "jumping" vertically on each hide/show action.
- After the histogram is drawn, show (i.e., make visible) a button that lets the user start another round of votes (call this the "restart" button).
- In the restart button's callback, reset enough app state such that the user will have the same experience in the subsequent voting round (the same number of votes should be required to see results, the same buttons should be shown/hidden, etc).
- [**+1 Extra Credit**: *The following feature is required for Thursday's lab that uses the localStorage API, but if you implement this feature by end of Wed, you earn extra credit.* Accumulate long term statistics -- keep a "since this web page was loaded" set of statistics, including the total clicks per image and total views per image. For example, if a user goes through three 16-vote rounds, your histogram should show a total of 48 votes split between all images, and percentages should also be cumulative.
- Implement a callback for the "8 more votes" button. It should hide all buttons first, then allow 8 more votes. After the 8th extra vote, automatically plot the vote histogram and show the "restart" button.

# Submitting

Use https://canvas.instructure.com/courses/1012436/assignments/4488793
- Submit the GitHub URL for your commit hash.
- In a comment in this Canvas submission with answers to the following questions.
 - How long did you take to do this lab?
 - How did this go for you, overall?
 - What observations or questions do you have on what you've learned so far?