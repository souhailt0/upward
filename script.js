document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch("process.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Merci pour votre message !");
    })
    .catch(error => console.error("Erreur:", error));
});
