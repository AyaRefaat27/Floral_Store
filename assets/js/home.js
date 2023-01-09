//Filter
let allCategory = document.getElementById("flowers");
let handmadeFlower = document.getElementById("handmade");
let freshFlower= document.getElementById("fresh-flowers");
let babyFlower= document.getElementById("baby-flowers");

let categories = [allCategory , handmadeFlower , freshFlower , babyFlower];

function allFlowers()
{
    allCategory.innerHTML = "";
    for(let i = 0 ; i < categories.length ; i++)
    {
    allCategory.append(categories[i]);
    }
}

function babyFlowers()
{
    let b_flowers = categories.filter(function(item)
    {
    return item == babyFlower;
    });
    allCategory.innerHTML = "";
   for(let i = 0 ; i < b_flowers.length ; i++)
   {
    allCategory.append(b_flowers[i]);
   }

}


function freshFlowers()
{
    let fresh =categories.filter(function(item)
    {
      return item == freshFlower;
    });
      
    allCategory.innerHTML = "";
    for(let i = 0; i < fresh.length ; i++)
    {
    allCategory.append(fresh[i]);
    }
}

  
function handmade()
{
    let hand_made =categories.filter(function(item)
    {
    return item == handmadeFlower;
    })
    allCategory.innerHTML = "";
    for(let i = 0 ; i < hand_made.length ; i++)
    {
    allCategory.append(hand_made[i]);
    }
}


// Toggle Menu
function toggleMenu()
{
    let toggleMenu = document.querySelector(".toggleMenu");
    let navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}


// Slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//****************************************************************************************************** */
// Cart Counter

clickCounterCart();

localStorage.clickCountCart = Number(localStorage.clickCountCart) - 1;

document.getElementById("cartSpan").innerHTML = localStorage.clickCountCart;

function clickCounterCart()
{
    if (localStorage.clickCountCart) 
    {
        localStorage.clickCountCart = Number(localStorage.clickCountCart) + 1;
    } 
    else
    {
        localStorage.clickCountCart = 1;
    }
    document.getElementById("cartSpan").innerHTML = localStorage.clickCountCart;
}

let addToCart = document.getElementsByClassName("addToCart");

for (let i = 0; i < addToCart.length; i++) 
{
    addToCart[i].addEventListener("click", clickCounterCart);
}

localStorage.clear()


//****************************************************************************************************** */

// Favourite Counter

clickCounterFav();

localStorage.clickCountFav = Number(localStorage.clickCountFav) - 1;

document.getElementById("favSpan").innerHTML = localStorage.clickCountFav;

function clickCounterFav()
{
    if (localStorage.clickCountFav) 
    {
        localStorage.clickCountFav = Number(localStorage.clickCountFav) + 1;
    } 
    else
    {
        localStorage.clickCountFav = 1;
    }
    document.getElementById("favSpan").innerHTML = localStorage.clickCountFav;
}

let addToFav = document.getElementsByClassName("addToFav");

for (let i = 0; i < addToFav.length; i++) 
{
    addToFav[i].addEventListener("click", clickCounterFav);
}

localStorage.clear()


//****************************************************************************************************** */


/// Scrol Top Button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } 
  else 
  {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//****************************************************************************************************** */


