const form = document.getElementById("bioForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const department = document.getElementById("department").value;

    if (
        fullname.trim() === "" ||
        email.trim() === "" ||
        age === "" ||
        department.trim() === ""
    ) {
        message.style.color = "red";
        message.textContent = "Please fill in all required fields.";
    } else {
        message.style.color = "green";
        message.textContent =
            "Bio data submitted successfully, " + fullname + "!";
        form.reset();
    }
});