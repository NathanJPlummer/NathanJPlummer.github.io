---
#Project 1
---

##UI/UX Creation using CSS

FOLDERS:

1.  Images
	- Images that are processed and either complete or good enough for testing.  Integrated into the HTML code/ Webpage.
2. Scalable_GFX
	- Vector based images which allow for further editing/tweaking without quality loss.
3. Original_Images
	- Source Images before they were modified, in the event we have to start over with an image.

---
#Assignment Parameters
---

After looking through the assignment again, we are supposed to create our UI/UX while anything that's interactive will be added in the next JavaScript course.  I will list issues that probably need JavaScript first, and then things we can work on now in HTML/CSS.


---
#Current Issues that probably need JavaScript (UI/UX Only)
---

- Color Select
	- The circular color images can't be added to the color choices
		- A background image can be added to the select box (see the pencil icon) but there's no way to add specific images to the individual options.
		- My guess is in JavaScript we can use a transparent image icon and then fill in the color based on a JavaScript variable.
		- Furthermore if we had that feature this shouldn't even be a select box, ideally it would be a text box and the user could input any color he/she chooses.  Since that's not possible with CSS I'm leaving as is for now.
		- I also tried to change the background color when you hover over a select box option.  Oddly enough it seems you can't do this in CSS/HTML.
		- Though it's not in the original design, when we come back to this for the JavaScript course we may consider adding some sort of color picker.

---
#Fixed Issues/Complete
---

*Complete*
~~Missing Text Boxes~~
~~Theres a lot of span/text areas that really should be text boxes and allow user input.  I was focused more on visual aspect and really just didn't pay enough attention to this.  The following text should be input type textbox:~~
		~~- Room Name~~
		~~- Names 1 - 4~~
		~~- Roles (Product Manager, 3D Animator, Concept Artist, Product Manager)~~


*COMPLETE:  Fixed using Flexbox code*
~~Aligned divs
The "roles" div and the "color" div should be equal total height.  This is currently "fixed" by manually changing the margins of id "colors."  Perhaps there's a more eloquent solution, though?~~

---
#Current issues that probably can be fixed in HTML/CSS
---

- Flexbox Browser Support
	- Flexbox not supported is some browsers.  Normalize will help but browser testing will be especially necessary.
    
COMPLETE:  Fixed after fixing code merge with error.
~~Odd misalgnment of divs~~
~~Odd error causes two mid divs to not be aligned.  Alignment is off by just a couple pixels and hard to notice.~~
~~After 2 hours still couldn't fix this.~~
