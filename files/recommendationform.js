const form = document.getElementById("recommendationform");
const submitMessage = document.getElementById("submitMessage");
const recommendationContentName = document.getElementById("name");
const recommendationContentMessage = document.getElementById("message");

form.addEventListener("submit", function(submitLog) {})
form.addEventListener("submit", function(submitLog) {})

const submitLog = event => {
    submitMessage.textContent = "Form submitted!";
    event.preventDefault();

};

const recommendationAdd = event => {
    submitMessage.textContent = "Form submitted!";
}