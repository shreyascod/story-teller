// Theme Toggle Functionality with Persistence
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = 'Switch to Light Mode';
    }
});

// Toggle theme on button click
if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Update button text and save theme preference
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleButton.textContent = 'Switch to Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Form Validation (Improved)
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            let isValid = true;

            // Validate all required fields in the form
            form.querySelectorAll('input[required]').forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error'); // Add an error class to highlight invalid fields
                } else {
                    input.classList.remove('error'); // Remove the error class if the field is valid
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
});

// Handle Story Creation (Improved)
const storyForm = document.getElementById('storyForm');
const messageDiv = document.getElementById('message');

if (storyForm) {
    storyForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = event.target.title.value.trim();
        const author = event.target.author.value.trim();
        const description = event.target.description.value.trim();

        if (!title || !author || !description) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate saving the story
        messageDiv.textContent = 'Story submitted successfully!';
        messageDiv.classList.add('success'); // Add a success class for styling the message
        storyForm.reset();

        // Optional: Redirect to a page displaying the list of stories
        // window.location.href = 'stories.html';
    });
}
