//reusuable functions written for this Portfolio

//get index of child element from parent
function getIndex(element) {
  for (var i=0; (element=element.previousElementSibling); i++);
  return i;
}
