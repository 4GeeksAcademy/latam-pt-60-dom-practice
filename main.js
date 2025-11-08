
window.onload = () => {

    const body = document.querySelector("body");

    const generateRandomColor = () => {
        let newColor = "#"
        const hexValues = "0123456789ABCDEF";
        const pickRandom = (list) => list[
            Math.floor(Math.random() * list.length)
        ]
        for (let i = 0; i < 6; i++) {
            newColor = newColor + pickRandom(hexValues);
        }
        return newColor;
    }

    const newPalette = () => {
        let newDiv = document.createElement("div")
        newDiv.classList = "d-flex rounded-5 text-white mx-auto p-2 my-2";
        let newColor = generateRandomColor()
        newDiv.style.backgroundColor = newColor;
        newDiv.textContent = newColor;

        newDiv.onclick = (event) => {
            console.log(event.target.parentElement.childElementCount)
            if (event.target.parentElement.childElementCount == 2) {
                for (let i = 0; i < 10; i++) {
                    newPalette()
                }
            }

            event.target.
                parentElement.removeChild(event.target)
        }

        body.appendChild(newDiv)
    }

    for (let i = 0; i < 10; i++) {
        newPalette()
    }
}
