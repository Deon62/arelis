// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll-triggered slide-in: add .is-visible when section enters viewport
(function () {
  var sections = document.querySelectorAll('.section-animate');
  if (!sections.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();

// FAQ accordion: one open at a time, click question to open/close
(function () {
  var questions = document.querySelectorAll('.faq-question');
  if (!questions.length) return;

  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var answer = item.querySelector('.faq-answer');
      var isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.faq-item').forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-answer').setAttribute('hidden', '');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        answer.removeAttribute('hidden');
      }
    });
  });
})();
