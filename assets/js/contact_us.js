// Toggle Menu
function toggleMenu()
{
    let toggleMenu = document.querySelector(".toggleMenu");
    let navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}


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



// Name

submit.addEventListener("click" , function(e)
{
    e.preventDefault();
});

var userName = document.getElementById("username");
var nameErrorMsg = document.getElementById("pOfName");

submit.addEventListener('click' , function()
{
    if (userName.value.length == 0)
    {
        nameErrorMsg.style.display = "block";
        nameErrorMsg.style.color = "#e43969";
        nameErrorMsg.innerHTML="Name is Requird!";
        
    }
    else
    {
        nameErrorMsg.style.display = "none";
    }
});

// Phone

var phoneNumber = document.getElementById("phone");
var phoneErrorMsg = document.getElementById("pOfPhone");

phoneNumber.addEventListener('input' , function()
{
    if(phoneNumber.value.length < 11 )
    {
        phoneErrorMsg.innerHTML="Phone Number Must be at least 11 characters ";
        phoneErrorMsg.style.display = "block";
        phoneErrorMsg.style.color = "#e43969";
    }
    else
    {
        phoneErrorMsg.style.display = "none";
    }
});

submit.addEventListener('click' , function()
{
    if(phoneNumber.value.length == 0 )
    {
        phoneErrorMsg.innerHTML="Phone Number Must be at least 11 characters ";
        phoneErrorMsg.style.display = "block";
        phoneErrorMsg.style.color = "#e43969";
    }
    else
    {
        phoneErrorMsg.style.display = "none";
    }
});


// Textarea

var textArea = document.getElementById("textarea");
var textErrorMsg = document.getElementById("pOfText");

submit.addEventListener('click' , function()
{
    if (textArea.value.length == 0)
    {
        textErrorMsg.style.display = "block";
        textErrorMsg.style.color = "#e43969";
        textErrorMsg.innerHTML="Message is Requird!";
    }
    else
    {
        textErrorMsg.style.display = "none";
    }
});

textArea.addEventListener('input' , function()
{
    if(textArea.value.length < 100 )
    {
        textErrorMsg.innerHTML="Textarea Must be at least 100 characters ";
        textErrorMsg.style.display = "block";
        textErrorMsg.style.color = "#e43969";
    }
    else
    {
        textErrorMsg.style.display = "none";
    }
});


// Email

let userEmail=document.getElementById("email");
let emailErrorMsg=document.getElementById("pOfMail");

userEmail.addEventListener("input" ,function()
{
    if(userEmail.value.length == 0)
    {
        emailErrorMsg.innerHTML="Email is required!;"
    }
    else if(!(userEmail.value.includes("@"))||!(userEmail.value.includes(".")))
    {
        emailErrorMsg.innerHTML="Email should includes '@' and '.'"
    }
    else
    {
        emailErrorMsg.style.display="none";
    }
});

submit.addEventListener('click',function()
{
    if(userEmail.value===""||userEmail.value==null)
    {
        emailErrorMsg.style.display = "block";
        emailErrorMsg.style.color = "#e43969";
        emailErrorMsg.innerHTML="Email is Requird!";
    }
   else if(!(userEmail.value.includes("@"))||!(userEmail.value.includes(".")))
   {
        emailErrorMsg.innerHTML="Email should includes '@' and '.'";
    }
    else(userEmail.length>0)
    {
        e.preventDefault()
        emailErrorMsg.style.display= "none";
    }
})



// Scrol Top Button

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


