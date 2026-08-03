// MHN Fragrance Interactive Script

// Smooth reveal animation when scrolling

const sections = document.querySelectorAll(
    ".card, .review-box, .hero-content"
);


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.15
}
);



sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});




// WhatsApp button animation

const whatsapp = document.querySelector(".whatsapp");


setInterval(()=>{

whatsapp.style.transform="scale(1.1)";


setTimeout(()=>{

whatsapp.style.transform="scale(1)";

},500);


},3000);




// Current year automatically updates footer

const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
`© ${year} MHN Fragrance. All Rights Reserved.`;
