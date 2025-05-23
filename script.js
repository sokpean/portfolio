window.addEventListener("DOMContentLoaded", () => {
  const linkedinButton = document.querySelector(".Linkedin-button");
  if (linkedinButton) {
    linkedinButton.addEventListener("click", () => {
      window.open("https://www.linkedin.com/in/sokpeanuy", "_blank");
    });
  }

  const touchButton = document.querySelector(".Touch-button");
  if (touchButton) {
    touchButton.addEventListener("click", () => {
      window.location.href = "mailto:su1@williams.edu";
    });
  }


  document.querySelectorAll("nav .nav-links a").forEach(link => {
    link.addEventListener("click", event => {
      const href = link.getAttribute("href");

      if (href === "resume.pdf") {
        // Resume download
        event.preventDefault();
        const linkDownload = document.createElement('a');
        linkDownload.href = "resume.pdf";
        linkDownload.download = "Sokpean_Uy_Resume.pdf"; // you can customize the downloaded file name
        document.body.appendChild(linkDownload);
        linkDownload.click();
        document.body.removeChild(linkDownload);
        return;
      }

      if (href && href.startsWith("#")) {
        event.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
