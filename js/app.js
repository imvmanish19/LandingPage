/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

//Navigation Global Variable
const navigationBar=document.getElementById('navbar__list');

//Section Global Variable

let sectionTags=document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

let sectionBuilder = (title,id) => {
    const sectionContainer = document.createElement('section');
    const sectionID=document.createAttribute('id');
    sectionID.value=id;
    sectionContainer.setAttributeNode(sectionID);
    const sectionNav=document.createAttribute('data-nav');
    sectionNav.value="Section "+id.slice(-1);
    sectionContainer.setAttributeNode(sectionNav);
    const divContainer=document.createElement('div');
    const divClass = document.createAttribute('class');
    divClass.value="landing__container";
    divContainer.setAttributeNode(divClass);
    const headTag = document.createElement('h2');
    const headText=document.createTextNode(title);
    headTag.appendChild(headText);
    const firstPara = document.createElement('p');
    firstPara.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis, nisi ut ultricies imperdiet, magna sapien tristique tellus, ac vestibulum mauris tellus dignissim diam. Integer ut sem id enim mollis lobortis. Integer condimentum, urna id facilisis feugiat, nunc erat interdum arcu, vitae dictum velit turpis quis dolor. Vestibulum ac egestas metus, eu accumsan diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum aliquet nibh elit, ac aliquet turpis finibus vel. Nam nec lectus tincidunt, ullamcorper nulla vel, efficitur sapien. Duis finibus nunc eget ipsum porttitor, ut porttitor ligula lobortis. Fusce accumsan suscipit mi, vel.";
    const secondPara = document.createElement('p');
    secondPara.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis, nisi ut ultricies imperdiet, magna sapien tristique tellus, ac vestibulum mauris tellus dignissim diam. Integer ut sem id enim mollis lobortis. Integer condimentum, urna id facilisis feugiat, nunc erat interdum arcu, vitae dictum velit turpis quis dolor. Vestibulum ac egestas metus, eu accumsan diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum aliquet nibh elit, ac aliquet turpis finibus vel. Nam nec lectus tincidunt, ullamcorper nulla vel, efficitur sapien. Duis finibus nunc eget ipsum porttitor, ut porttitor ligula lobortis. Fusce accumsan suscipit mi, vel.";
    divContainer.appendChild(headTag);
    divContainer.appendChild(firstPara);
    divContainer.appendChild(secondPara);
    sectionContainer.appendChild(divContainer);
    return sectionContainer;
}

//Adding Section 4
let sectionFour=sectionBuilder('Section 4','section4');

//Getting Reference Of Main Tag
let mainSection=document.querySelector('main');

//Appending Section 4 to main
mainSection.appendChild(sectionFour);

//Adding Section 5
let sectionFive=sectionBuilder('Section 5','section5');

//Appnding Section 5 to main

mainSection.appendChild(sectionFive);


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//Update Sections

sectionTags=document.querySelectorAll('section');

// build the nav


let navigationBuilder = () =>{
    
    for(let section of sectionTags)
    {
        const secID = section.id;
        const dataName = section.dataset.nav;
        const listItem = document.createElement('li');
        const anchorItem = document.createElement('a');
        const anchorClass = document.createAttribute('class');
        anchorClass.value = "menu__link";
        anchorItem.setAttributeNode(anchorClass);
        const anchorHref = document.createAttribute('href');
        anchorHref.value = `#${secID}`;
        anchorItem.setAttributeNode(anchorHref);
        anchorItem.textContent=`${dataName}`;
        listItem.appendChild(anchorItem);
        navigationBar.appendChild(listItem);
    }
}

document.addEventListener('DOMContentLoaded',navigationBuilder());


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//Building a section using js

