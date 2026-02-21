(function() {
  var token = localStorage.getItem('fa_token');
  var user = null;
  try { user = JSON.parse(localStorage.getItem('fa_user')); } catch(e) {}

  if (!token || !user) {
    window.location.href = 'login.html';
    return;
  }

  var nameEl = document.querySelector('.ai-account-name');
  if (nameEl) {
    nameEl.textContent = user.first_name + ' ' + user.last_name;
  }

  document.querySelectorAll('[data-action="logout"]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      localStorage.removeItem('fa_token');
      localStorage.removeItem('fa_user');
      window.location.href = 'login.html';
    });
  });
})();
