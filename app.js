let slideIndex = 0;
let slideInterval; // স্লাইড কন্ট্রোল করার ভেরিয়েবল

const slides = document.querySelectorAll(".slide");
const sliderContainer = document.querySelector(".slider");

function showSlides() {
    // সব স্লাইড থেকে active ক্লাস রিমুভ করা
    slides.forEach(slide => {
        slide.classList.remove("active");
        slide.style.opacity = "0";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // বর্তমান স্লাইড দেখানো
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add("active");
        slides[slideIndex - 1].style.opacity = "1";
    }
}

// ২ সেকেন্ড পরপর স্লাইড চলার ফাংশন
function startSlider() {
    slideInterval = setInterval(showSlides, 3000); 
}

// স্লাইড বন্ধ করার ফাংশন
function stopSlider() {
    clearInterval(slideInterval);
}

// স্লাইডার কন্ট্রোল শুরু করা
window.onload = () => {
    showSlides(); // লোড হওয়ার সাথে সাথে প্রথম ইমেজ দেখাবে
    startSlider(); // স্লাইডার চালু হবে

    // ১. মাউস নিলে স্লাইড বন্ধ হবে
    sliderContainer.addEventListener("mouseenter", () => {
        stopSlider();
        console.log("Slider Paused");
    });

    // ২. মাউস সরিয়ে নিলে আবার আগের মতো চলতে শুরু করবে
    sliderContainer.addEventListener("mouseleave", () => {
        startSlider();
        console.log("Slider Resumed");
    });
};
const imageDivs = document.querySelectorAll('.img-itemlist div img');

imageDivs.forEach(img => {
  img.addEventListener('click', () => {
    // নতুন ট্যাবে ফুল ইমেজ ওপেন হবে
    window.open(img.src, '_blank');
  });
});
const items = document.querySelectorAll('.img-itemlist div');
let currentIndex = 0;

function autoHover() {
  // সব ইমেজ থেকে একটিভ ক্লাসটি রিমুভ করা
  items.forEach(item => item.classList.remove('active-hover'));

  // বর্তমান ইমেজে ক্লাসটি যোগ করা
  items[currentIndex].classList.add('active-hover');

  // পরের ইমেজের ইনডেক্স সেট করা (শেষ হয়ে গেলে আবার শুরুতে যাবে)
  currentIndex = (currentIndex + 1) % items.length;
}

// প্রতি ৩ সেকেন্ড (৩০০০ মিলি-সেকেন্ড) পর পর ফাংশনটি চলবে
setInterval(autoHover, 3000);

// প্রথমবার পেজ লোড হওয়ার সাথে সাথে শুরুর জন্য
autoHover();
 
 
