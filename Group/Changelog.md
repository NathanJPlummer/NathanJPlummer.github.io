---
#Changelog
---

###07/05/2016

- Reverted back to v2 (master) code base but merging select changes from v3 (Luis).

- ROLES
	- Added proper names instead of "Name 1" etc.
	- Made names italicized

- Gray Separator line (class = .line)
	- Used 5vh margin instead of 6vh

- Page top (class = .topline)
	- Incorporated Luis's margins into page top
	- 1% auto
	- Removed "container" class as we already had #topline ID which can serve this purpose.

- roomName
	- Removed typo "roomNames span" CSS option that didn't do anything
	- Incorporate custom details from Luis for .blockDetails class.
		- But removed custom margin and set input to auto height instead.
		- And cleaned out code already inherited from class.
	- Incorporated Luis's font-sizes

- Latin
	- Removed placeholder from master and added in Latin Text from Luis.

- Cleanup
	- Removed some no longer needed classes, ids, and floats.


###07/13/2016

- Merge "CommentLeft" and "CommentRight" classes into "Comment" class.  Change only when needed.
	- Trim CSS line ".panelBody .commentRight .commentBox"
		- Change to .commentBox
			- Overflow is okay for both sides.  Cleans code.
	- Trim CSS lines:
		.panelBody .commentLeft .commentBox,
		.panelBody .commentRight .commentBox,
	- Since Items have same options can use just .commentBox
		- Also merged with the above .commentBox options

- CSS line: .panelChat .chatbox
	- No need for .panelChat specify.  chatbox class only used once.

- img.user options
	- The follow CSS lines all removed:
		- .panelBody .commentLeft .commentBox img.user,
		- .panelBody .commentRight .commentBox img.user,
		- .panelChat .chatbox img.user
			- They all refer to the same options
				- replaced with img.user{

- .comment options:
	- Removed the following CSS lines
		- .panelBody .commentLeft .commentBox .comment
		- .panelBody .commentRight .commentBox .comment
			- Identical selector options
			- All you need for this is .comment.  Replaced.

- .header options:
	- Removed the following CSS lines
		- .panelBody .commentLeft .commentBox .comment .header
		-  .panelBody .commentRight .commentBox .comment .header
			- Only .header needed for same results.

- .panelBody options:
	- Removed the following CSS lines
		- .panelBody .commentLeft .commentBox .comment .header.userName,
		- .panelBody .commentRight .commentBox .comment .header .userName
			- only need .userName

- .time options options:
	- Removed the following CSS lines
		- .panelBody .commentLeft .commentBox .comment .header .time
		- .panelBody .commentRight .commentBox .comment .header .time
			- only need .time

- .message options
	- Removed CSS lines
		- .panelBody .commentLeft .commentBox .comment .message
		- .panelBody .commentRight .commentBox .comment .message
			- only need .message
	- message p
		- Removed CSS lines:
			- .panelBody .commentLeft .commentBox .comment .message p
			- .panelBody .commentRight .commentBox .comment .message p
				- only need .message p

- bottomUI ID options
	- Background option no longer needed since we have a more elegant solution now.

- . panels
	- .panels is not used for stylizing the panels.  It's a top-layer div that alerts the browser where to place the panels on the page.
	- It should never be used more than once, so I've reverted your change to class back to ID.
	- To avoid confusion I've changed the id name to "panelsLocation"

.panelsBoth class
	- Reimplemented class for options that affect both panels, making it easier to make changes to both sides at once. Removed options that include both "leftPanel" and "rightPanel" and used this class instead.
	- Changed width back from 50% to 47.5vw, since there should be space in between panels.