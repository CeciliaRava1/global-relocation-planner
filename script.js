import { argentina, canada, germany, unitedStates } from './countries.js';

// Obtain elements from the DOM
let links = document.querySelectorAll('a');
let elementTitle = document.getElementById('title');
let elementDescription = document.getElementById('description');
let elementSubtitle = document.getElementById('subtitle');
let elementParagraph = document.getElementById('paragraph');

// Add a click event to each link
links.forEach(function(link){
    link.addEventListener('click');
})

// Get the correct information from 'countries.js'
function getInformation(link){
    let information = {
        'Argentina' : argentina,
        'Canada' : canada,
        'Germany' : germany,
        'United States' : unitedStates
    }
    return information(link);
}