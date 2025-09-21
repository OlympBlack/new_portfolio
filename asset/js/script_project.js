
    // Lightbox simple
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    document.querySelectorAll(".gallery-item img").forEach(img => {
      img.addEventListener("click", () => {
        lightbox.classList.add("show");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      });
    });

    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("show");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.remove("show");
    });
  