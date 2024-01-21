// const imagePlaceholder = document.querySelector (".image-placeholder");
// const dropdownMenu = document.querySelector (".dropdown-menu ul");
// const onlineCourse = document.querySelector ("#online-courses");

// imagePlaceholder.innerHTML = `
//     <img src="https://t.resfu.com/media/img_news/afp_fr_c200d01330cc9272a8af9188412e6c0f3fe6c393.jpg?size=1000x&ext=jpeg" alt="">


// dropdownMenu.style.visibility = "visibile";
// onlineCourse.classList.add = ("green");

// supriseButton.addEventListener("click", function (event){
//     console.log("This button was clicked");
//     console.log(event);

// })
// function myFunction () {
//     document.getElementById("demo").innerHTML = "Hello World";
// }


// function myFunction2 () {
//     document.getElementById("demo2").innerHTML = "Back to life";
// }

// let x = 0;
// function myFunctionScroll () {
//     document.getElementById("demo3").innerHTML = x += 1;
// }


// function myFunction5() {
//     let z = document.getElementById("myInput");
//     document.getElementById("demo5").innerHTML = "you search on:" + z.value; 
// }


// function myFunction6() {
//     alert ("The form was subbmited");  
// }

// function myFunction6 () {
//   var x = document.getElementById("mySelect").value;
//   document.getElementById("demo6").innerHTML = "Your favorite car is: " + x; 
// }

// const surpriseButton = document.querySelector("#surprise-button");
// const imagePlaceholder = document.querySelector(".image-placeholder");
// const dropdownButton = document.querySelector (".dropdown-menu button");
// const dropdownMenu = document.querySelector(".dropdown-menu ul");


// surpriseButton.addEventListener('click', function() {
//    if (Math.random() > 0.5) {
//         imagePlaceholder.innerHTML = '<img src="https://t.resfu.com/media/img_news/afp_fr_c200d01330cc9272a8af9188412e6c0f3fe6c393.jpg?size=1000x&ext=jpeg" alt="">';
//     } else {
//         imagePlaceholder.innerHTML = `<img src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2012/06/iconic-photos-1950-einstein.jpg" alt="">`;
//     }
// });

// dropdownButton.addEventListener('click', function() {
    
//     const dropdownMenuStyle = getComputedStyle(dropdownMenu);
//     const visibility = dropdownMenuStyle.getPropertyValue('visibility');

//     if (visibility === 'hidden') {
        
//         dropdownMenu.style.visibility = 'visible';
//     } else {
//         dropdownMenu.style.visibility = 'hidden';
//     }
// });



// const scollToTopButton = document.querySelector(".scroll-to-top");
// const form = document.querySelector("form");
// const userNameInput = document.querySelector("#username");
// const UserNameMessage = document.querySelector(".username-message-error");
// const phoneInput = document.querySelector("#phone");
// const phoneMessage = document.querySelector(".phone-message-error");
// const formResult = document.querySelector(".form-result");

// scollToTopButton.addEventListener("click", function(){
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
    
// });
// document.addEventListener("scroll", function(){
//     if(window.scrollY > 100) {
//         scollToTopButton.style.visibility = "visible";
//     } else {
//         scollToTopButton.style.visibility = "hidden";
//     }
// }); 

// userNameInput.addEventListener("change", function(event){
//     const value = event.target.value;
//     if(value.length < 3) {
//         UserNameMessage.innerHTML = "Username-ul trebuie sa contina minim 3 caractere!"  
//     }else{
//         UserNameMessage.innerHTML = "";
//     }
// });
// phoneInput.addEventListener("input", function(event){
//     const value = event.target.value;
//     if(isNaN(value)) {
//         phoneMessage.innerHTML = "Continutul trebuie sa contina caractere numerice!"
//     }else{
//         phoneMessage.innerHTML = "";
//     }
// });

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     const userNameValue = userNameInput.value;
//     const phoneValue = phoneInput.value;
//     const userNameIsValid = userNameValue.length >= 3;
//     const phoneIsValid = !isNaN(phoneValue);
//     if(userNameIsValid && phoneIsValid) {
//         formResult.innerHTML = `
//         <p>Ati introdus username-ul ${userNameValue} cu telefonul ${phoneValue}.</p>
//       `;
//     }else{
//         formResult.innerHTML = "Formularul contine erori de completare!";
//     }


// });

const input1 = document.querySelector ("#number1");
const input2 = document.querySelector ("#number2");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector ("#divide");
const resultSum = document.querySelector(".result");

add.addEventListener("click", function(){
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const result = number1 + number2;
    resultSum.innerHTML = `Rezultatul operației este ${result}.`;
}); 

subtract.addEventListener("click", function(){
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const division = number1 - number2;
    resultSum.innerHTML = `Rezultatul operației este ${division}.`;
}); 

multiply.addEventListener("click", function(){
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const multiply = number1 * number2;
    resultSum.innerHTML = `Rezultatul operației este ${multiply}.`;
}); 

multiply.addEventListener("click", function(){
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const multiply = number1 * number2;
    resultSum.innerHTML = `Rezultatul operației este ${multiply}.`;
}); 

divide.addEventListener("click", function(){
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const subtraction = number1 / number2;
    resultSum.innerHTML = `Rezultatul operației este ${subtraction}.`;
}); 

input1.addEventListener("input", function(event){
    const value = event.target.value;
    if (isNaN(value)) {
        resultSum.innerHTML = "Va rugam introducei o valoare numerica!";
    }else{
        resultSum.innerHTML ="";
    }
});

input2.addEventListener("input", function(event){
    const value = event.target.value;
    if (isNaN(value)) {
        resultSum.innerHTML = "Va rugam introducei o valoare numerica!";
    }else{
        resultSum.innerHTML ="";
    }
});