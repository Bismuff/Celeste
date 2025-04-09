document.addEventListener("DOMContentLoaded", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  const section = document.querySelector(".desc");
  const closeButton = document.querySelector(".close-btn");
  const banners = document.querySelectorAll(".banner");

  gridItems.forEach(item => {
    item.addEventListener("click", function () {
        const styleClass = item.getAttribute("data-style"); // Get style name

        // Remove all previous styles
        section.classList.remove("prologue", "forsaken", "oldsite", "celestial", "golden", "mirror", "reflection", "summit", "hide", "story", "gameplay");

        // Add new style
        section.classList.add(styleClass, "show", "story"); // Add animation + style

        banners.forEach((b, i, arr) => { //Hide all banners
          setTimeout(() => {
  
              b.classList.remove("show");
              b.classList.add("hide");
          }, (arr.length - 1 - i) * 50); // Delays each banner by 200ms
      });
    });
});

  closeButton.addEventListener("click", function () {
      section.classList.remove("show"); // Remove show animation
      section.classList.add("hide"); // Add hide animation
      
        banners.forEach((banner, i) => {
          setTimeout(() => {
              banner.classList.remove("hide");
              banner.classList.add("show");
          }, i * 50); // Reverse order delay
    });
  });

  banners.forEach((banner, i) => {
    banner.addEventListener("click", function () {
      const styleClass = banner.getAttribute("data-style");

              // Remove all previous styles and add animation + style
      section.classList.remove("prologue", "forsaken", "oldsite", "celestial", "golden", "mirror", "reflection", "summit", "hide", "story", "gameplay");
      section.classList.add(styleClass, "show", "story"); // Add animation + style

      banners.forEach((b, i, arr) => { //Hide all banners
          setTimeout(() => {

              b.classList.remove("show");
              b.classList.add("hide");
          }, (arr.length - 1 - i) * 50); // Delays each banner by 200ms
      });
    });
    banners.forEach((banner) => {
      banner.addEventListener("mouseleave", function () {
          banner.classList.remove("show"); // Remove SlideInBanner
          banner.classList.add("pop-in"); // Add PopInBanner
      });
  
      banner.addEventListener("mouseenter", function () {
          banner.classList.remove("pop-in"); // Reset animation if hovered again
          banner.classList.add("show"); // Restore SlideInBanner
      });
  });
});

});

function adjustHeight() {
  const imageHolder = document.querySelector('.imageholder');
  const descElements = document.querySelectorAll('.desc'); // Select all `.desc` elements
  const bannerElements = document.querySelectorAll('.bannerholder')

  if (imageHolder) {
    const imageHolderHeight = imageHolder.clientHeight;

    descElements.forEach(desc => {
      desc.style.maxHeight = `${imageHolderHeight}px`; // Limit max height to `.imageholder`
    
    bannerElements.forEach(banner =>{
      banner.style.maxHeight = `${imageHolderHeight*0.7}px`
    })
    });
  }
}

// Run function on page load and window resize
window.addEventListener('load', adjustHeight);
window.addEventListener('resize', adjustHeight);

document.addEventListener("DOMContentLoaded", function () {
  // Select all description containers
  const descElements = document.querySelectorAll(".desc");

  descElements.forEach((desc) => {
    const textBox = desc.querySelector(".textbox");
    const storyBtn = desc.querySelector(".story-btn");
    const gameplayBtn = desc.querySelector(".gameplay-btn");

    // Event listener for Story button
    storyBtn.addEventListener("click", function () {
      textBox.classList.remove("gameplay");
      textBox.classList.add("story");
      desc.classList.remove("gameplay");
      desc.classList.add("story");
    });

    // Event listener for Gameplay button
    gameplayBtn.addEventListener("click", function () {
      textBox.classList.remove("story");
      textBox.classList.add("gameplay");
      desc.classList.remove("story");
      desc.classList.add("gameplay");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const levels = [
    "prologue",
    "forsaken",
    "oldsite",
    "celestial",
    "golden",
    "mirror",
    "reflection",
    "summit"
  ];

  document.querySelectorAll(".desc").forEach((desc) => {
    const prevBtn = desc.querySelector(".previous-btn");
    const nextBtn = desc.querySelector(".next-btn");

    function changeArticle(direction) {
      let currentClass = levels.find((cls) => desc.classList.contains(cls));
      let currentIndex = levels.indexOf(currentClass);
      if (currentIndex === -1) return; // If no valid class is found, exit

      let newIndex =
        direction === "next"
          ? (currentIndex + 1) % levels.length
          : (currentIndex - 1 + levels.length) % levels.length;

      let newClass = levels[newIndex];

      // Hide animation before changing class
      desc.classList.add("hide");

      setTimeout(() => {
        // Remove old class and add new one
        desc.classList.remove(currentClass, "gameplay", "story");
        desc.classList.add(newClass, "story");

        // Show animation after changing class
        desc.classList.remove("hide");
        desc.classList.add("show");
      }, 500); // Delay matches the animation duration
    }

    nextBtn.addEventListener("click", function () {
      changeArticle("next");
    });

    prevBtn.addEventListener("click", function () {
      changeArticle("prev");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const banners = document.querySelectorAll(".banner");
  const section = document.querySelector(".desc");
  const closeBtn = document.querySelector(".close-btn");

  banners.forEach(banner => {
      banner.addEventListener("click", function () {

          
          // Show the section
          section.classList.remove("hide", "story", "gameplay");
          section.classList.add("show", "story");
      });
  });

});

document.addEventListener("DOMContentLoaded", function (){
  const banners = document.querySelectorAll(".mobileDesc")
  const imgClose = document.querySelectorAll(".imgCloseMobile")
  const revealB = document.querySelectorAll(".revealB")
  const hiddenText = document.querySelectorAll(".hidden")
  const footer = document.querySelector(".footerM")


  imgClose.forEach(img => {
    img.addEventListener("click", function () {
      let parentBanner = img.parentElement
      let clickedIndex = Array.from(banners).indexOf(parentBanner);

      if (parentBanner.classList.contains("active")){
        parentBanner.classList.remove("active");
        banners.forEach((b, index)=> {
          if (index> clickedIndex) {
            b.classList.remove("active");
            b.classList.add("hide");
            setTimeout(() => b.classList.remove("hide"), 150);
         } // Reset after animation
        });

        revealB.forEach(button=>{
          button.classList.remove("pressed")
        });
        hiddenText.forEach(element =>{
          element.classList.remove("reveal");
        });
        footer.classList.remove("prologue", "forsaken", "oldsite", "celestial", "golden", "mirror", "reflection", "summit");

      } else {

        const styleClass = img.getAttribute("data-style")

        banners.forEach((b, index) => {
          b.classList.remove("active");
          if (index> clickedIndex) {
            b.classList.add("hide");
            setTimeout(() => b.classList.remove("hide"), 150); // Reset after animation
          }
        });

        footer.classList.remove("prologue", "forsaken", "oldsite", "celestial", "golden", "mirror", "reflection", "summit");
        footer.classList.add(styleClass)

        parentBanner.classList.remove("hide");
        
        setTimeout(() =>  parentBanner.classList.add("active"), 200)

      }
    });
  });
  
    revealB.forEach(button =>{
      button.addEventListener("click", function (){
        //check if at least one element has the class
        let hasRevealClass = false;
  
        hiddenText.forEach(element =>{
          if (element.classList.contains("reveal")) {
            hasRevealClass = true;
          }
        })
  
        if (hasRevealClass) {
          //remove class
          this.classList.remove("pressed")
          hiddenText.forEach(element =>{
            element.classList.remove("reveal");
          })
  
        } else {
          //add class
          this.classList.add("pressed")
          hiddenText.forEach(element =>{
            element.classList.add("reveal");
          })
        }
      });
    });
});

