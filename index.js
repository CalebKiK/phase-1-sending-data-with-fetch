// Add your code here

function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })

    .then((response) => response.json())
    .then(data => {
        document.body.innerHTML += `<p>${data.id}</p>`;
    })
    
    .catch(error => {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error message: ${error.message}`;
        document.body.appendChild(errorMessage);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector(input[0]).value;
        const email = document.querySelector(input[1]).value;
        submitData(name, email);
    });
});

