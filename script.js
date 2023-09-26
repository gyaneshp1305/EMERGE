// Example data for latest poems
const latestPoems = [
    {
        title: "Poem 1",
        author: "Author 1",
        content: "This is the content of Poem 1."
    },
    {
        title: "Poem 2",
        author: "Author 2",
        content: "This is the content of Poem 2."
    },
    // Add more poems here
];

// Function to create poem elements
function createPoemElement(poem) {
    const poemElement = document.createElement("div");
    poemElement.classList.add("poem");
    poemElement.innerHTML = `
        <h3>${poem.title}</h3>
        <p>By: ${poem.author}</p>
        <p>${poem.content}</p>
    `;
    return poemElement;
}

// Add latest poems to the page
const poemList = document.getElementById("poem-list");
latestPoems.forEach(poem => {
    const poemElement = createPoemElement(poem);
    poemList.appendChild(poemElement);
});
const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");

loginButton.addEventListener("click", () => {
    // Add your login logic here (e.g., open a login modal)
    alert("Login button clicked");
});

registerButton.addEventListener("click", () => {
    // Add your register logic here (e.g., redirect to register page)
    alert("Register button clicked");
});
