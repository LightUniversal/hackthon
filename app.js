const dropDownBtn = document.querySelector(".dropdown-button");

const dropdown = document.querySelector(".dropdown");

dropDownBtn.addEventListener("click", () => {
  console.log("1111")
  if(dropdown.classList.contains("closedropdown")) {
    dropdown.classList.remove("closedropdown");
    dropdown.classList.add("active");
    console.log("123")
  } 
  else if(dropdown.classList.contains("active")) {
    dropdown.classList.remove("active");
    dropdown.classList.add("closedropdown");
    console.log("1234")

  } 
}, 0);

const bellContainer = document.querySelector(".bell-container");

const alertBox = document.querySelector(".alert");

bellContainer.addEventListener("click", () => {
  console.log("1111")
  if(alertBox.classList.contains("closedropdown")) {
    alertBox.classList.remove("closedropdown");
    alertBox.classList.add("active");
    console.log("123")
  } 
  else if(alertBox.classList.contains("active")) {
    alertBox.classList.remove("active");
    alertBox.classList.add("closedropdown");
    console.log("1234")

  } 
}, 0);