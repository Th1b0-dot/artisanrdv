// Fonction pour la recherche simple
function searchArtisans() {
    const location = document.getElementById('location').value;
    const specialty = document.getElementById('specialty').value;
    if (location && specialty) {
        alert('Recherche lancée pour : ' + specialty + ' à ' + location + ' ! (Simulation)');
    } else {
        alert('Veuillez entrer une localisation et une spécialité.');
    }
}

// Fonction pour défiler jusqu'à la barre de recherche
function scrollToSearch() {
    document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour la recherche intelligente
function smartSearch() {
    const location = document.getElementById('project-location').value;
    const type = document.getElementById('project-type').value || 'non précisé';
    const surface = document.getElementById('project-surface').value || 'non précisé';
    const details = document.getElementById('project-details').value || 'non précisé';

    if (location) {
        // Stocker les données dans sessionStorage pour les passer à la page de résultats
        sessionStorage.setItem('projectData', JSON.stringify({
            location: location,
            type: type,
            surface: surface,
            details: details
        }));
        // Rediriger vers la page de résultats
        window.location.href = 'results.html';
    } else {
        alert('Veuillez au moins indiquer une localisation.');
    }
}