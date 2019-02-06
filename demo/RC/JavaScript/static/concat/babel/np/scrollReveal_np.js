const revealFromTop = {
  origin: 'top',
  delay: 300,
  distance: '360px',
  easing: 'ease-in-out',

};

const revealFromTop200 = {
  origin: 'top',
  delay: 200,
  distance: '360px',
  easing: 'ease-in-out',

};

const revealFromTop500 = {
  origin: 'top',
  delay: 500,
  distance: '240px',
  easing: 'ease-in-out',
};

const revealFromTop800 = {
  origin: 'top',
  delay: 800,
  distance: '120px',
  easing: 'ease-in-out',
};

const revealFromBottom = {
  origin: 'bottom',
  delay: 300,
  distance: '360px',
  easing: 'ease-in-out',
};

const revealFromBottom200 = {
  origin: 'bottom',
  delay: 200,
  distance: '360px',
  easing: 'ease-in-out',
};

const revealFromBottom500 = {
  origin: 'bottom',
  delay: 500,
  distance: '240px',
  easing: 'ease-in-out',
};

const revealFromBottom800 = {
  origin: 'bottom',
  delay: 500,
  distance: '120px',
  easing: 'ease-in-out',
};

ScrollReveal().reveal('.scrollRevealJS-top200', revealFromTop200);
ScrollReveal().reveal('.scrollRevealJS-top500', revealFromTop500);
ScrollReveal().reveal('.scrollRevealJS-top800', revealFromTop800);
ScrollReveal().reveal('.scrollRevealJS-top', revealFromTop);


ScrollReveal().reveal('.scrollRevealJS-bottom200', revealFromBottom200);
ScrollReveal().reveal('.scrollRevealJS-bottom500', revealFromBottom500);
ScrollReveal().reveal('.scrollRevealJS-bottom800', revealFromBottom800);
ScrollReveal().reveal('.scrollRevealJS-bottom', revealFromBottom);