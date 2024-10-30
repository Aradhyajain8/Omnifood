const yearEl= document.querySelector(".year");
const icon = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const allLinks = document.querySelectorAll('a:link');
const section_hero = document.querySelector('.section-hero');

//displaying current year in the end
const curr_year = new Date().getFullYear();
yearEl.textContent= curr_year;

//making the navigation work on clicking menu button
icon.addEventListener('click',function(){
    header.classList.toggle('nav-open');

});

//scrolling
allLinks.forEach(link =>
    link.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:"smooth"});

        //closing menu
        if(link.classList.contains("nav-link")){
            header.classList.toggle('nav-open');
        }

}))

//sticky navigation
const obs = new IntersectionObserver(function(entries){
    const [entry] = entries;

    if(!entry.isIntersecting){
        document.body.classList.add('sticky');
    }
    else{
        document.body.classList.remove('sticky')
    }
},{
    root:null,
    threshold: 0,  
    rootMargin: '-80px'
})
obs.observe(section_hero);


