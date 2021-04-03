new WOW().init();
const about =lottie.loadAnimation({
    wrapper: aboutme,
    animType: 'svg',
    loop: true,
    path: 'https://xinyu714.github.io/Personal-Web/json/aboutme.json'
    
    
  });
  about.playSegments([30,90], false);  

const exper=lottie.loadAnimation({
  wrapper: experience,
  animType: 'svg',
  loop: true,
  path: 'https://xinyu714.github.io/Personal-Web/json/experience.json'
  
  
});
exper.playSegments([40,90], false); 

