// Get the modal and close button
const modal = document.getElementById("slideshow-modal");
const closeBtn = modal.querySelector(".close");


// Get all profile elements
const profiles = document.querySelectorAll(".image");


// Store slideshow images and descriptions (example)
const slideshowImages = [
  { src: "images/team-images/exec/renee-jaranson.jpg", name: "Renee Jaranson", desc: "Renee is a sophomore bioengineering major from Ellicott City, Maryland. After college, she hopes to pursue graduate school and research in cell and gene therapy. This iGEM cycle, Renee is involved with the Design and Modeling committees. In her free time, she enjoys dancing, reading, and playing board games with friends." },
  { src: "images/team-images/exec/Mia-Jocic.JPG", name: "Mia Jocic", desc: "Mia is a sophomore bioengineering major who is pursuing a minor in Science, Technology, Ethics, and Policy (STEP). She is eager to continue exploring her interest in health equity engineering. As Mia progresses in her career, she seeks to prioritize her focus on groups that are systemically hindered from receiving adequate medical care. For the last two cycles Mia has been chair of the UMaryland iGEM Wet Lab Committee, and is also involved in Human Practices/Outreach. She is from Annapolis, Maryland and enjoys hiking, swimming, and stargazing. Mia has no idea what she wants to do in industry, as she is just a girl"},
  { src: "images/team-images/exec/abhi-senthilkumar.JPG", name: "Abhi Senthilkumar", desc: "Abhi is a sophomore chemical engineering and computer science double major from Urbana, Maryland, currently serving as modeling chair. He is interested in how computational methods can speed and scale up the pace of research and therapeutics production. After college he plans to pursue a Ph.D. and hopefully get involved in biotech research and development. In his free time he enjoys camping, photography, board games, and music." },
  { src: "images/team-images/exec/jonathan-wu.jpg", name: "Jonathan Wu", desc: "Jonathan is a freshman cell biology and genetics major with an intent in pursuing a data science and trombone performance minor. He is one of the co-chairs of the Human Practices and Outreach committee as well as a member of the modeling committee. After graduation, he plans on pursuing an MD/PHD in order to become a physician-scientist. Jonathon is from Westminster, Maryland and in his free time, he enjoys running, playing trombone in the marching band, pep band, and university band, DnD, and playing RPG video games." },
  { src: "images/team-images/exec/valeria-salas-dietz.jpg", name: "Valeria Salas Dietz", desc: "Valeria is a junior undergraduate student at the University of Maryland, majoring in Operations Management and Business Analytics with a passion for creating innovative impacts. She is fascinated by how proper strategy and analytics can help organizations better predict, automate, secure, and modernize their businesses. She has in-depth experience in project management, business analytics and consulting, consistently striving to achieve tangible results. Valeria is eager to support charitable organizations and is thrilled to have the opportunity with iGEM to leverage her skills and experience to help further this mission of social justice." },
  { src: "images/team-images/members/mahita-kamalahasan.jpg", name: "Mahita Kamalahasan", desc: "Mahita description" },
  { src: "images/team-images/members/navya-bansal.jpg", name: "Nova Bansal", desc: "Nova is a freshman bioengineering major pursuing a minor in Computer Engineering. They currently serve as co-chair of the Human Practices/Outreach committee and are involved with Wet Lab and Modeling. After college, they hope to pursue medical school and/or medical research, with an interest in human augmentation. Nova is a South Jersey native, and enjoys biking, lounging, and traveling." },
  { src: "images/team-images/members/Lauren-Applegate.jpg", name: "Lauren Applegate", desc: "Lauren is a freshman biochemistry major from Massachusetts and iGEM’s finance co-chair. After graduation she plans to attend graduate school and work in research and development in the pharmaceutical industry. In her free time, she enjoys running, listening to music, and watching movies with friends." },
  { src: "images/team-images/members/Gadigi-Aditri.jpg", name: "Aditri Gadigi", desc: "Aditri is a freshman Computer Science student pursuing a minor in Statistics. She is currently one of the Modeling co-chairs. After graduation, she plans to pursue computational biology research and development. In her free time, Aditri enjoys watching movies, exploring cities, and playing board games." },
  { src: "images/team-images/members/jonathon-meyer.jpg", name: "Jonathon Meyer", desc: "Jonathon description" },
  { src: "images/team-images/members/IMG_3901.jpg", name: "Sarah Firdaus", desc: "Sarah Firdaus is a junior bioengineering major and creative writing minor. This is her second cycle as a wet lab chair for UMaryland iGEM. In the future, she plans to pursue a career in medicine. Outside of school, she enjoys spending time with friends and family, reading, and community service." },
  { src: "images/team-images/members/Sami_Kudagunti_Headshot.jpg", name: "Sami Kudagunti", desc: "Sami Kudagunti is a freshman bioengineering student on the pre-med track. She hopes to become a physician, and she involves herself with biotech and biomedical research. In iGEM, she is a primary wet lab member and the membership chair. In her free time, she enjoys figure skating, reading, and traveling." },
  { src: "images/team-images/members/Krista-Adu-Osei.jpg", name: "Krista Adu Osei", desc: "Krista description" },
  { src: "images/team-images/members/brennen.jpg", name: "Brennen Le", desc: "Brennen description" },
  { src: "images/team-images/members/patrick.jpg", name: "Patrick Hong", desc: "Patrick description" },
  { src: "images/team-images/members/Vikram Khandelwal Headshot.jpg", name: "Vikram Khandelwal", desc: "Hi! I'm Vikram Khandelwal, a CS+Math major graduating 2025. Currently building toehold validation software, but generally I love applying CS everywhere I go! Aiming to learn more about genetics in the future." },
  { src: "images/team-images/members/Viharika.jpg", name: "Viharika Penmetsa", desc: "Viharika description" },
  { src: "images/team-images/members/Ananya.jpg", name: "Ananya Jagdish", desc: "Ananya description" },
  { src: "images/team-images/members/Patricia Rosemond Headshot.jpg", name: "Patricia Rosemond", desc: "Hi, my name is Patricia Rosemond. I am a biology major with a concentration in physiology and neurobiology. My goals are to get my MD in Obstetrics and PHD in maternal and child health. With IGEM, I help with social media presence and designs. I'm really glad to be a part of this years project." },
  { src: "images/team-images/members/Dana_Harel_Headshot.jpg", name: "Dana Harel", desc: "Hi my name is Dana Harel and I am a sophomore Bioengineering major, and I'm super excited to be working on the Wet Lab and Finance committees this cycle! Long term, I'd like to do more research in tissue engineering and regenerative medicine. When I'm not iGEM-ing or in the library, I love to read, bake, and make jewelry!" },
  { src: "images/team-images/members/Haider Hussain headshot.jpg", name: "Haider Hussain", desc: "Haider Hussain is a pre-med bioengineering major, with a keen interest in cancer biology and oncology. Driven by his desire to translate his knowledge to patient care, he's pursuing a medical career in these fields. As a member of the iGEM modeling committee, he has helped to design methodologies and translate the reaction kinetics into mathematical models for the device." },
  { src: "images/team-images/members/Rebecca Lu Headshot.jpg", name: "Rebecca Lu", desc: "Rebecca is a bioengineering major in the class of 2026. She is interesting in biotechnology and therapeutics and is also minoring in data science. Her goal is to work in the pharmaceuticals industry but more importantly, she wants to be actively involved in the design and creation of technology to contribute to advancements in healthcare. She joined iGEM for its collaborative approach to synthetic biology and is currently in the Wet Lab and Finance committees. Outside of iGEM she loves hanging out with friends, crocheting, and volunteering in the local community through the Biomedical Engineering Society!" },
  { src: "images/team-images/members/Kevin Zhang headshot.jpg", name: "Kevin Zhang", desc: "Kevin Zhang is a sophomore bioengineering major and a prospective CS minor. This is his second cycle as a wet lab member and during his time in iGEM, he has done work with literature review, wet lab, dry lab, and modeling. Long term, he plans to pursue a career in biotech and is currently planning on going to graduate school to earn a Ph.D. Outside of school, he enjoys playing the violin and spending time with friends and family!" },
  { src: "images/team-images/members/Graham Ferguson Headshot.jpg", name: "Graham Ferguson", desc: "Graham Ferguson is a sophomore majoring in Cell Biology and Molecular Genetics and minoring in Paleobiology. His work in iGEM has focused on the wet lab experimental work and the development of our modeling team's procedures and data analysis. He would like to pursue a PhD in Microbiology after his time at UMD and do research using bacteria for wastewater remediation and clean energy production. He thinks bacteria are the coolest domain of life and challenges you to convince him otherwise." },
  { src: "images/team-images/members/sarahz.jpg", name: "Sarah Zachariah", desc: "Sarah description" },
  { src: "images/team-images/members/keithheadshot.jpg", name: "Keith Oliver", desc: "Keith description" },

  
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


