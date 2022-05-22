const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "5px",
    duration: 700,
    reset: true,
  });
  
  scrollReveal.reveal(
    `
  .s-hero .title, 
  .s-success .tag ,
  .title-success,
  .cards,
  .card,
  .s-about,
  .about-me .my-picture,
  .s-cases,
  .title-cases,
  .cases`,
    { interval: 50 }
  );
  
  
  