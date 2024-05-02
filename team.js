// Get the modal and close button
const modal = document.getElementById("slideshow-modal");
const closeBtn = modal.querySelector(".close");


// Get all profile elements
const profiles = document.querySelectorAll(".image");


// Store slideshow images and descriptions (example)
const slideshowImages = [
  { src: "images/team-images/exec/renee-jaranson.jpg", name: "Renee Jaranson", desc: "Renee description" },
  { src: "images/team-images/exec/abhi-senthilkumar.JPG", name: "Abhi Senthilkumar", desc: "Abhi description" },
  { src: "images/team-images/exec/Mia-Jocic.JPG", name: "Mia-Jocic", desc: ""}
  // Add the rest of the images and descriptions here
];










let currentSlideIndex = 0; // Track the current slide index


// Function to display the current slide
function showSlide(index) {
  const slideshow = modal.querySelector(".slideshow-content");
 
  if (index >= 0 && index < slideshowImages.length) { // Ensure index is within bounds
    slideshow.innerHTML = ""; // Clear existing content
   
    const img = document.createElement("img");
    img.src = slideshowImages[index].src;
   
    const name = document.createElement("h3");
    name.textContent = slideshowImages[index].name;


    const description = document.createElement("p");
    description.textContent = slideshowImages[index].desc;
   
    slideshow.appendChild(img);
    slideshow.appendChild(name);
    slideshow.appendChild(description);


    currentSlideIndex = index; // Update the current slide index
  }
}


// Function to open the modal with a given slide
function openModal(index) {
  showSlide(index); // Show the desired slide
  modal.style.display = "block"; // Display the modal
}


// Event listeners for navigation
const prevArrow = modal.querySelector(".prev-arrow");
const nextArrow = modal.querySelector(".next-arrow");


prevArrow.onclick = function() {
  if (currentSlideIndex > 0) { // Ensure not to go below the first slide
    showSlide(currentSlideIndex - 1); // Show the previous slide
  }
};


nextArrow.onclick = function() {
  if (currentSlideIndex < slideshowImages.length - 1) { // Ensure not to exceed the last slide
    showSlide(currentSlideIndex + 1); // Show the next slide
  }
};


// Add event listener to close button
closeBtn.onclick = function () {
  modal.style.display = "none"; // Hide the modal
};


// Click anywhere outside the modal to close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Close modal on outside click
  }
};


// Add event listeners to profile images
profiles.forEach((profile, index) => {
  profile.parentElement.onclick = function () {
    openModal(index); // Open the modal with the corresponding image
  };
});


