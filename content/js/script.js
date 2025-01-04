
const users = [
    { name: "PewDiePie" },
    { name: "aismartjm" },
    { name: "MrBeast" },
    { name: "Markiplier" },
    { name: "Ninja" },
    { name: "James Charles" },
    { name: "Lilly Singh" },
    { name: "Emma Chamberlain" },
    { name: "Jake Paul" },
    { name: "Logan Paul" },
    { name: "Dude Perfect" },
    { name: "VanossGaming" },
    { name: "Tati Westbrook" },
    { name: "NikkieTutorials" },
    { name: "KSI" },
    { name: "Casey Neistat" },
    { name: "SSSniperWolf" },
    { name: "Safiya Nygaard" },
    { name: "Jenna Marbles" },
    { name: "Shane Dawson" },
    { name: "David Dobrik" },
    { name: "Dude Perfect" },
    { name: "Liza Koshy" },
    { name: "Zoella" },
];

const searchinput = document.querySelector(".search-input");
const lisearch = document.querySelector(".li-search");


function displayUsers(filteredUsers) {
    lisearch.querySelector("ul").innerHTML = "";

    filteredUsers.slice(0, 5).forEach((user) => {
        const li = document.createElement("li");
        const hr = document.createElement("hr");
        li.classList.add("li-list-input");
        li.textContent = user.name;
        lisearch.querySelector("ul").appendChild(li);
        lisearch.querySelector("ul").appendChild(hr);
    });
}

lisearch.style.display = "none";
searchinput.addEventListener("keyup", () => {
    const searchValue = searchinput.value.toLowerCase();
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().startsWith(searchValue)
    );
    displayUsers(filteredUsers);

    if (searchValue.trim() === "") {
        lisearch.style.display = "none";
    } else {
        lisearch.style.display = filteredUsers.length > 0 ? "block" : "none";
    }
});


export { users, searchinput, lisearch, displayUsers };
