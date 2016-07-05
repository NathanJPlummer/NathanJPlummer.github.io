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