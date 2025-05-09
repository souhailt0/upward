// Simple success message (no backend here, but gives feedback)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent actual submission unless backend is hooked
        alert("Merci pour votre message ! Nous vous contacterons bientôt.");
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
