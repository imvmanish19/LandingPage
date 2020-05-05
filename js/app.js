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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


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

// <section id="section3" data-nav="Section 3">
//       <div class="landing__container">
//         <h2>Section 3</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

//         <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
//       </div>
// </section>


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
