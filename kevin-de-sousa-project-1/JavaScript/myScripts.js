// BLOG PAGE COMMENT SECTION 
let commentForm = document.querySelector(`#commentForm`);
console.log(commentForm)


const commentFormName = commentForm.name
const commentFormEmail = commentForm.email
const commentFormMessage = commentForm.message

// adding event listener on form when submitted with button
commentForm = addEventListener(`submit`, function(e) {
  e.preventDefault();

  // .values from forms
nameInput = commentFormName.value;
emailInput = commentFormEmail.value;
messageInput = commentFormMessage.value;

// targeting the 
const blogDiv = document.querySelector(`.blogComments`)

const commentsBox = document.createElement(`div`)
commentsBox.classList.add(`commentsBox`, `commentsBottom`)

// To create img container in comments box
const imgContainer = document.createElement(`div`)


imgContainer.classList.add(`imgContainer`)
// for img tag in comments box
const commentsImg = document.createElement(`img`)
// for img src in comments box
commentsImg.src = `https://placekitten.com/89/89`

// creating the date and text portions within comments box
const commentsText = document.createElement(`div`)
commentsText.classList.add(`commentsText`)

// for date/name within comments box
const commentsDate = document.createElement(`p`)
// for message within in comments box
const commentsMessage = document.createElement(`p`)

// for date to be added to commentsDate
const date = new Date()

blogDiv.appendChild(commentsBox)
// appending image portion
commentsBox.appendChild(imgContainer)
imgContainer.appendChild(commentsImg)
// appearing date and message portion
commentsBox.appendChild(commentsText)
commentsText.appendChild(commentsDate)
commentsText.appendChild(commentsMessage)

// user input for commentsDate displayed 
commentsDate.textContent = `${date} by ${nameInput}`
// user input commentsMessage displayed
commentsMessage.textContent = messageInput

// changing text in button to notify of submission
document.querySelector(`button`).textContent = `Thanks for commenting ${nameInput}!`;

// to reset form input after submission
document.querySelector(`form`).reset();

// just a little love
alert(`I appreciate you! ❤️`);
})



// // CONTACT PAGE 

// let contactForm = document.querySelector(`#contactForm`);

// const contactName = contactForm.name
// const contactEmail = contactForm.email
// const contactMessage = contactForm.message

// console.log(email)
// console.log(contactForm)
// contactForm = addEventListener(`submit`, function(e) {
//   e.preventDefault();

//   // values from forms
 
// nameInput = contactName.value;
// console.log(nameInput);
// emailInput = contactEmail.value;
// console.log(emailInput);
// messageInput = contactMessage.value;
// console.log(messageInput);
// console.log(`form has been submitted`);

// alert(`Thank you! I'll get back to you as soon as I can!`);

// document.querySelector(`button`).textContent = `Message Sent ${nameInput}!`;
// document.querySelector(`form`).reset();
// });
