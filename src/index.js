document.addEventListener("DOMContentLoaded", function() {
    const kittenImagesContainer = document.getElementById("kittenImages");
    const getKittenButton = document.getElementById("getKittenButton");

    function fetchKittenImage() {
        const kittenImage = document.createElement("img");
        kittenImage.src = `https://placekitten.com/${Math.floor(Math.random() * 400) + 200}/${Math.floor(Math.random() * 400) + 200}`;
        kittenImagesContainer.appendChild(kittenImage);
    }

    getKittenButton.addEventListener("click", fetchKittenImage);
    kittenImagesContainer.addEventListener("mouseover", function() {
        // Your mouseover event handler code goes here
        // This code will run when the mouse pointer moves over the kittenImagesContainer
    });
});
