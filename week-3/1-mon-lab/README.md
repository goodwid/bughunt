# Paired lab: Friday, 19 Feb 2016

## Create a webpage from a design comprehensive

**Main Goal**: Build a static webpage based on the design comprehensive ("design comp") shown in https://github.com/codefellows/portland-201d2/blob/master/week-3/1-mon-lab/lab-assets/_0_PREVIEW.jpg.

This lab focuses on HTML and CSS. You may choose to do this project with no JS at all, or add some as a finishing touch. You can earn extra credit points by coding CSS animations; see details below.

---

In this paired project you may choose to do all of your team's work on one person's laptop. You can use the other laptop however you want: a reference to look up information, or as a second laptop to do coding. Whatever you decide, spend time with your partner to **plan** your workflow. You are not obligated to use the driver/navigator model of pair programming, since for this lab you and your partner will submit a GitHub URL for the same commit hash.

If you want to do simultaneous coding on both computers, you can use one of the following two methods:

1. "Fork/PR": Have one person set up a GitHub repo, and then the other person can fork (on GitHub) and clone (using the terminal on a laptop) that repo. This is the way open source is often developed, where a repo's owner decides which features get merged into his/her app. Use pull requests to merge changes into the main repo.

- "Collaborate": Or, as an alternative, have one person set up a repo, then add the partner as a collaborator (use the 'Settings' tab in GitHub to add a collaborator). In this setup, each person has equal privileges to push and merge and manage that repo.  This is the way teams in the course will work during Project Week, so this alternative is a good way to start getting comfortable working together as collaborators.

If you choose one of these two alternatives, be sure to do frequent merges. In #1, make frequent pull requests and merges. In #2, do pull-merge-resolve-push cycles frequently. To avoid merge conflicts, do your best to not work on the same lines of code in the same file(s) at the same time; do good planning/re-planning, and use frequent and timely communication.

**GitHub Repository & Project Setup**

Create a new repo. Decide whether you'll use the Nav/Driver, Fork/PR, or Collaborate method.

**Assignment Overview**

The assets (files such as images) are in **lab-assets** sub-folder. Copy all of the assets **except** "\_0\_PREVIEW.jpg" to your workspace. But print or open "\_0\_PREVIEW.jpg" so you can use it as a reference for what your page should finally look like. You may want to print a hard copy of the comp and write notes on it to identify image asset filenames and layout locations, elements you need to code in HTML, and styles you need to code in CSS.

Suggestion: Set up your work directory like this:
* index.html
* style.css
* app.js *(if you choose to use JS)*
* img/   *(folder that contains all of your image assets)*

Rename any image files if you'd like.

**Requirements**

Use good HTML structure to scaffold this site. Up to this point, your sites have not required container elements to manage the structure, and ultimately the style. Container elements (a box outside of your content box that might contain multiple content boxes) are very useful in managing layout. You need to think about the relationship between parent and child/descendant elements, as well as the order in which you define them in your HTML. Remember you can use *display: inline* in CSS to force block elements (which would ordinarily stack), to sit side-by-side, the same way that words in a paragraph behave.

Use semantic HTML. Use &lt;section&gt;, &lt;footer&gt; &lt;aside&gt;, and/or other tags such that you don't get lots in a "sea of &lt;div&gt; elements" when working with your HTML file.

Use CSS to style the page to replicate every visual feature shown in the comp image. Some of the features may be new to you so work with your partner to be resourceful. When coding in CSS, you may discover that there are many ways to achieve the same visual effect; some of those ways are easier to code that others, so explore a bit before committing to a complex solution for any given feature; there may be a simpler, more compact way to code it. Test your page using Chrome, and at least one other browser (Safari, Firefox, IE, or other) and make sure your page looks the same. Use caniuse.com to see if a particular CSS feature is widely supported.

OPTIONAL: Add some JS functionality! Get creative, but make sure all your CSS and HTML code is done before adding JS.

[**+0.5 Extra Credit per item below**] Using CSS only:
1. Fade in the page when it is first loaded.
- Slide in the footer.
- Highlight at least one section of the page based on the mouse-over (hover) event
- On mouse hover on any of the social media icons, make the icon 50% larger
- Extend #4 such that the social media icon grows smoothly to its larger size using CSS transitions.
- Extend #4 such that each icon rotates 360 degrees on mouse hover.

---

## Submitting

Submit your work at [https://canvas.instructure.com/courses/1012436/assignments/4488801?module_item_id=9187569].

1. Submit the GitHub URL for the git commit hash that corresponds to your app's final version for this assignment.
- Indicate the names of the other member(s) of your team.
- Add comments to your Canvas submission with answers to the following questions:
 - How was the pair/group component of this project overall?
 - In what parts of the project did you contribute the most?
 - What did you learn from your partner? What were you able to teach?
 - What observations or questions do you have about what you've learned?