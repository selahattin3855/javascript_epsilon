        const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
        const wrapperLinks = document.querySelector(".wrapper-links");
        
        hamburgerWrapper.addEventListener("click", () => {
            hamburgerWrapper.classList.toggle("active");
            wrapperLinks.classList.toggle("active");
        })
        
        document.querySelectorAll(".wrapper-link").forEach(n => n.addEventListener("click", ()=> {
            hamburgerWrapper.classList.remove("active");
            wrapperLinks.classList.remove("active");
        }))