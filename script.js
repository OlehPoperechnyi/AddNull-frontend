function myFunction () {
    alert("E-mail succesfull delivered!!")
 }
const scrollContainer = document.querySelector(".reviews-container");
const scrollSpeed = 1; 
function infiniteScroll() {
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
     
        scrollContainer.scrollLeft = 0;
    } else {
        scrollContainer.scrollLeft += scrollSpeed;
    }
}

setInterval(infiniteScroll, 20);
// done ? 
