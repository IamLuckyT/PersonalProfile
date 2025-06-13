
/* SIDEBAR CODE */
const toggleButton = document.getElementById('menu-toggle');    // Button that opens the sidebar
const sidebar = document.getElementById('sidebar');             // Button that closes the sidebar
const closeButton = document.getElementById('close-sidebar');   // The sidebar element
const overlay = document.getElementById('overlay');             // The overlay behind the sidebar
const themeToggle = document.getElementById('theme-toggle');    // Button that toggles light/dark mode

// Function to open the sidebar and activate overlay
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');                           // Add 'open' class to sidebar to make it slide in
    overlay.classList.toggle('active');                         // Add 'active' class to overlay to make it visible
    document.body.classList.toggle('no-scroll');                // Prevent body from scrolling when sidebar is open
});

// Function to close the sidebar and deactivate overlay
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');                           // Remove 'open' class from sidebar to make it slide out
    overlay.classList.remove('active');                         // Remove 'active' class from overlay to make it invisible
    document.body.classList.remove('no-scroll');                // Allow body to scroll when sidebar is closed
});

// Close sidebar when clicking outside of it
overlay.addEventListener('click', () => {                       
    sidebar.classList.remove('open');                           // Remove 'open' class from sidebar to make it slide out
    overlay.classList.remove('active');                         // Remove 'active' class from overlay to make it invisible                      
    document.body.classList.remove('no-scroll');                // Allow body to scroll when sidebar is closed
});

/* THEME TOGGLE CODE */

// Function to toggle between light and dark mode
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');                // Toggle 'dark-mode' class on body to switch themes

    // Save new theme state
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
});

//FOR LOADING SAVED THEME
window.addEventListener('DOMContentLoaded', () => {             
    const savedTheme = localStorage.getItem('theme');           
    if (savedTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
    }
});
/*THEME CODE ENDS HERE*/



