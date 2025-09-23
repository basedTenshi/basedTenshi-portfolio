function submitLog(event) {
    submitMessage.textContent = "Form submitted!";
    event.preventDefault();
}

function recommendationAdd(event) {
    boxes.forEach(box => {
        box.textContent = recommendationContentMessage.value;
    })
}

const form = document.getElementById("recommendationform");
const submitMessage = document.getElementById("submitMessage");
const recommendationContentMessage = document.getElementById("message");
const boxes = document.querySelectorAll(".Box1, .Box2, .Box3");

form.addEventListener("submit", submitLog);
form.addEventListener("submit", recommendationAdd);