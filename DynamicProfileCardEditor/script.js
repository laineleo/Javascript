
const profileName = document.getElementById("prof-name");
const profileBio = document.getElementById("prof-description");
const profileImage = document.getElementById("profile-pic");
const profileCard = document.getElementById("profilecard");

function updateName() {
    const updatedName = document.getElementById("update-name").value;
    if (updatedName.trim() !== "") {
        profileName.innerText = updatedName;
    }
}

function updateBio() {
    const updatedBio = document.getElementById("update-bio").value;
    if (updatedBio.trim() !== "") {
        profileBio.textContent = updatedBio;
    }
}

function updateURL() {
    const newImageURL = document.getElementById("update-url").value;
    if (newImageURL.trim() !== "") {
        profileImage.setAttribute("src", newImageURL);
    }
}


function updatebgColor() {
    const newColor = document.getElementById("backgroundColor").value;
    profileCard.style.backgroundColor = newColor;
}