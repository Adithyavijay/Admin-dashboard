const openIcon = document.querySelector('.open__icon');
const sidebarContent = document.querySelector('.sidebar__content');

// Add click event listener to the openIcon
openIcon.addEventListener('click', () => {
    sidebarContent.classList.toggle('active');
    // Disable scrolling when sidebar is active
    if (sidebarContent.classList.contains('active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});