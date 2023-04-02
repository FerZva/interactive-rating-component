//Show and hide boxes

//Global variables
var btn = document.querySelector("#rating-container_btn")



//Events
btn.addEventListener("click", event => 
    {
        let rating = document.querySelector("#rating-container")
        let thanks = document.querySelector("#thanks-container")
        
        rating.style.display = "none"
        thanks.style.display = "inherit"
})

const numbers = document.querySelectorAll('.rating-container_rating-numbers_span');
let activenumber = null;

const selectedNumber = document.getElementById('selected-number');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        numbers.forEach(number => {
            number.classList.remove('active');
        });
        number.classList.add('active');
        activenumber = number.getAttribute('data-value');
        selectedNumber.innerText = "You selected " + activenumber + " out of 5";
    });
});



