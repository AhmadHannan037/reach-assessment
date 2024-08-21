// script.js
document.querySelectorAll('.editable').forEach(function(element) {
    // Enable contenteditable on hover
    element.addEventListener('mouseover', function() {
        element.setAttribute('contenteditable', 'true');
    });

    // Disable contenteditable when the mouse leaves
    element.addEventListener('mouseout', function() {
        element.removeAttribute('contenteditable');
    });

    // Handle losing focus to save the edited text
    element.addEventListener('blur', function() {
        element.removeAttribute('contenteditable');
    });
});
