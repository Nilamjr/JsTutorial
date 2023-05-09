console.log("Dom searching")
ctitle = document.getElementById('ctitle');
ctitle.style.color = "Blue"

let ctitles = document.querySelectorAll('.card-title');
ctitles[0].style.color = "red"
ctitles[1].style.color = "blue"
ctitles[2].style.color = "green"

console.log(ctitles)