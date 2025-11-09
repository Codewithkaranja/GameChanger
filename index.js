 // Header scroll effect
      window.addEventListener("scroll", function () {
        const header = document.getElementById("header");
        const backToTop = document.querySelector(".back-to-top");

        if (window.scrollY > 100) {
          header.classList.add("scrolled");
          backToTop.classList.add("active");
        } else {
          header.classList.remove("scrolled");
          backToTop.classList.remove("active");
        }
      });

      // Mobile menu toggle
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", function () {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });

      // Tab functionality for media section
      const tabBtns = document.querySelectorAll(".tab-btn");
      const tabContents = document.querySelectorAll(".tab-content");

      tabBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          // Remove active class from all buttons and contents
          tabBtns.forEach((b) => b.classList.remove("active"));
          tabContents.forEach((c) => c.classList.remove("active"));

          // Add active class to clicked button
          this.classList.add("active");

          // Show corresponding content
          const tabId = this.getAttribute("data-tab");
          document.getElementById(tabId).classList.add("active");
        });
      });

      // Form submission handlers
      document
        .getElementById("volunteerForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          alert(
            "Thank you for your interest in volunteering! We will contact you soon."
          );
          this.reset();
        });

      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Thank you for your message! We will get back to you soon.");
          this.reset();
        });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Simple animation on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      }, observerOptions);

      // Observe elements for animation
      document
        .querySelectorAll(".pillar, .news-card, .value-item")
        .forEach((el) => {
          observer.observe(el);
        });

      // Add animation class to elements when they come into view
      const animateOnScroll = function () {
        const elements = document.querySelectorAll(
          ".pillar, .news-card, .value-item"
        );

        elements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add("animate-in");
          }
        });
      };

      window.addEventListener("scroll", animateOnScroll);
      // Initial check
      animateOnScroll();