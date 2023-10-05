

var images = ["IMG_1D10.JPG",
    "IMG_0019.JPG",
    "IMG_0046.JPG",
    "IMG_0101.JPG",
    "IMG_0113.JPG",
    "IMG_0123.JPG",
    "IMG_0198.JPG",
    "IMG_0258.JPG",
    "IMG_0263.jpeg",
    "IMG_0589.JPG",
    "IMG_0595.JPG",
    "IMG_0646 10 Edited.JPG",
    "IMG_0649 13 Edited.JPG",
    "IMG_0661.JPG",
    "IMG_0667.JPG",
    "IMG_0745.JPG",
    "IMG_0747.JPG",
    "IMG_0757.JPG",
    "IMG_0761.JPG",
    "IMG_0765.JPG",
    "IMG_1248.JPG",
    "IMG_1287.JPG",
    "IMG_1346.JPG",
    "IMG_1485.JPG",
    "IMG_2008.jpeg",
    "IMG_6617.JPG",
    "IMG_6657.JPG",
    "IMG_6724.JPG",
    "IMG_8935.JPG",
    "IMG_8953.JPG",
    "IMG_9999.jpeg",
    "IMG_777777.jpg"]

var x = 0

function changeIndex() {
    var index = document.getElementById("imgindex")
    console.log(index.textContent)
    index.textContent = String(x + 1) + " / " + String(images.length)
}

function rightSlide() {
    var img = document.getElementById("loveimg");
    if (x == images.length - 1) {
        x = 0
    } else {
        x++;
    }

    console.log(images[x])
    img.src = images[x];

    changeIndex()
}

function leftSlide() {
    var img = document.getElementById("loveimg");

    if (x == 0) {
        x = images.length - 1
    } else {
        x--;
    }
    console.log(images[x])
    img.src = images[x];

    changeIndex()
}