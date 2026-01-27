const clickMeButton = document.getElementById("clickMeButton")


console.log("hello")
console.log(clickMeButton)


function changeStatus() {
    const statusText = document.getElementById("statusText");
    statusText.innerText = "button was pressed"
}

clickMeButton.addEventListener('click', () => {
    // console.log("hello 2")

    // alert("hello");
    changeStatus();
})

