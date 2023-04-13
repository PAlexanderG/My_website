// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assigment (= assignment operator)

let firstName = "Garcia!"; //string
let age = 24; //number

console.log("Hello", firstName)//In "" for adding text after a coma
console.log(age);// Pop out in the console panel

function sayHello() {
    alert("Hello, My First Personal Website!");// Pop out a message alert
  }
  sayHello()
  const form = document.querySelector("#form")
  const submitButton = document.querySelector("#submit")
  const scriptURL = 'https://httpbin.org/post'

  form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
      .then(response => {
         alert('Success!', response)
         submitButton.disabled = false
        })
      .catch(error => {
      alert('Error!', error.message)
        submitButton.disabled = false

      }
      )
  })