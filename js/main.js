window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.products__item-favorite').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });

  const observer = lozad();
  observer.observe();
  let name = 'Sergey';
  let value = 'user';
  document.cookie = encodeURIComponent(value) + '=' + encodeURIComponent(name);
  console.log(document.cookie);
});