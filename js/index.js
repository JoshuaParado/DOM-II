const busImage = document.getElementsByTagName("img")[0]
busImage.addEventListener("mouseenter", () => {
    busImage.style.transform = "scale(1.2)";
    busImage.style.transition = "all 0.3s"
})

const headerTwo = document.getElementsByTagName("h2")[0]
headerTwo.addEventListener("mouseover", () => {
    headerTwo.style.transform = "scale(1.2)";
    headerTwo.style.transition = "all 0.3s"
})

const secondHeader = document.getElementsByTagName("h2")[1]
secondHeader.addEventListener("keypress", () => {
    secondHeader.style.transform = "scale(1,2)";
    secondHeader.style.transition = "all 0.5s"
})