// Simple success message (no backend here, but gives feedback)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        alert("Merci pour votre message ! Nous vous contacterons bientôt.");
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
