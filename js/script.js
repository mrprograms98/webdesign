    // Preloader verwijderen na pagina-laden
    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      preloader.style.opacity = '0';
      setTimeout(() => { preloader.style.display = 'none'; }, 500);
    });

    // Hamburger-menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Back-to-top functionaliteit
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      // Back-to-top knop tonen
      if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
      // Update scroll-progress balk
      const scrollProgress = document.getElementById('scroll-progress');
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      scrollProgress.style.width = progress + "%";
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Modal functionaliteit
    const modal = document.getElementById('modal');
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const closeModal = document.querySelector('.modal-content .close');

    learnMoreBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Scroll-trigger animaties met IntersectionObserver
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll('.features h2, .feature-card').forEach(el => {
      observer.observe(el);
    });