//Change Map based on location selection

//Define DOM locations on addresses and map
const location_map = document.getElementById('location_map');
const location_left = document.getElementById('location_left');
const location_right = document.getElementById('location_right');

//Img source for the left map (Chapel Hill)
const mapLeft = "img/maps/location_left.png";
//Img src for the right map (Raleigh)
const mapRight = "img/maps/location_right.png";

//When you hover/touch on left address, switch to left map
location_left.addEventListener("touchend", function(){
  location_map.src = mapLeft;
})
location_left.addEventListener("mouseover", function(){
  location_map.src = mapLeft;
})

//When you hover/touch on right address, switch to right map
location_right.addEventListener("touchend", function(){
  location_map.src = mapRight;
})
location_right.addEventListener("mouseover", function(){
  location_map.src = mapRight;
})
