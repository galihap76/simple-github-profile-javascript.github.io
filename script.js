// Create variables
let avatar = document.getElementById("avatar");
let tableData = document.querySelectorAll("td");
let searchInput = document.getElementById("find");
let button = document.getElementsByTagName("button")[0];

// When the button is clicked
button.addEventListener("click", function () {
  // Whatever is typed by me
  fetch("https://api.github.com/users/" + searchInput.value)
    // Parsing JSON data
    .then((res) => res.json())
    // Then display the data in the HTML document
    .then((data) => {
      avatar.innerHTML = `<img src="${data.avatar_url}" style="width:250px;height:250px;">`;
      for (let i = 0; i < tableData.length; i++) {
        tableData[0].innerText = `${data.name}`;
        tableData[1].innerText = `${data.bio}`;
        tableData[2].innerText = `${data.location}`;
      }
    });
});
