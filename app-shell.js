(function() {
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function() {
    var body = document.body;
    if (!body || !body.classList.contains('ai-page')) return;

    var toggle = document.getElementById('ai-sidebar-toggle');
    var overlay = document.getElementById('ai-sidebar-overlay');
    var sidebar = document.querySelector('.ai-sidebar');

    if (!toggle || !overlay || !sidebar) return;

    function open() {
      body.classList.add('ai-sidebar-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    function close() {
      body.classList.remove('ai-sidebar-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    function toggleOpen() {
      if (body.classList.contains('ai-sidebar-open')) close();
      else open();
    }

    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      toggleOpen();
    });

    overlay.addEventListener('click', function() { close(); });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') close();
    });

    sidebar.addEventListener('click', function(e) {
      // Close after navigating on mobile
      var link = e.target.closest('a');
      if (!link) return;
      close();
    });

    // Ensure closed on resize up
    var mq = window.matchMedia('(max-width: 560px)');
    function onChange() {
      if (!mq.matches) close();
    }
    if (mq && mq.addEventListener) mq.addEventListener('change', onChange);
    onChange();
  });
})();

