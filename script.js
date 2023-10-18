// JavaScript to handle the show/hide behavior of the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  const dropdownItems = document.querySelectorAll('.dropdown');

  dropdownItems.forEach(item => {
      const dropdownToggle = item.querySelector('a');
      const dropdownContent = item.querySelector('.dropdown-content');

      dropdownToggle.addEventListener('mouseenter', function() {
          dropdownContent.style.display = 'block';
      });

      item.addEventListener('mouseleave', function() {
          dropdownContent.style.display = 'none';
      });
  });
});
