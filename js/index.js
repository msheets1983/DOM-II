// Your code goes here
const get = (selector) => {
    return document.querySelector(selector);
}

//variables
const logo = get('.logo-heading')
const navigation = get('.nav')
const button = get('.btn')
const img = get('.intro img');
const navigationTwo = get('.main-navigation');


//Events
function red(event) {
    document.body.style.backgroundColor = 'red';
};
logo.addEventListener('mouseover', red);

function nav(event) {
    navigation.style.backgroundColor = 'pink';
};
navigation.addEventListener('mouseover', nav);

function escKey(event) {
    if (event.key === 'Escape') {
        document.body.style.backgroundColor = 'white';
        navigation.style.backgroundColor = 'white'
        img.src = 'img/fun-bus.jpg'
        button.style.backgroundColor = '#17A2B8'
    }
}
document.addEventListener('keydown', escKey);

img.addEventListener('click', function() {
    img.src = 'img/adventure.jpg'
});

img.addEventListener('dblclick', function() {
    img.src = 'img/destination.jpg'
});

button.addEventListener('click', function() {
    button.style.backgroundColor = 'purple'
});

navigationTwo.addEventListener('click', function(event) {
    alert('This is the navigation bar')
});













//preventdefault and stoprop
const preventA = document.querySelectorAll('a');

preventA.forEach(function(a) {
    a.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
    });
});