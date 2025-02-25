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

// Fonction pour simuler la réservation et l'expérience utilisateur complète
function simulateBooking(artisanName) {
    // Étape 2 : Accès au calendrier intelligent (Calendly/Google Calendar)
    let bookingMessage = `Vous consultez le calendrier de ${artisanName}.\n`;
    bookingMessage += "Créneaux disponibles : \n- 28/02/2025, 10h00\n- 01/03/2025, 14h00\n";
    const slot = prompt(bookingMessage + "\nChoisissez un créneau (ex. : 28/02/2025, 10h00) :");
    if (slot) {
        alert(`Rendez-vous réservé avec ${artisanName} le ${slot} ! (via Calendly)`);

        // Étape 3 : Demande de devis (QuoteWerks/SimplyCost)
        const requestDevis = confirm(`Voulez-vous demander un devis à ${artisanName} ?`);
        if (requestDevis) {
            alert(`Devis simulé de ${artisanName} :\n- Travaux : ${sessionStorage.getItem('projectData') ? JSON.parse(sessionStorage.getItem('projectData')).type : 'non spécifié'}\n- Surface : ${JSON.parse(sessionStorage.getItem('projectData')).surface} m²\n- Coût estimé : 1500€ (via QuoteWerks)`);
        }

        // Étape 4 : Messagerie instantanée (Tawk.to/Intercom)
        const chat = confirm(`Voulez-vous discuter avec ${artisanName} via la messagerie instantanée ?`);
        if (chat) {
            const message = prompt(`Envoyez un message à ${artisanName} :`);
            if (message) {
                alert(`Message envoyé à ${artisanName} : "${message}"\nRéponse simulée : "Bonjour, je suis disponible pour discuter de votre projet. Quand puis-je passer ?" (via Tawk.to)`);
            }
        }

        // Étape 5 : Gestion des tâches (Trello/Asana)
        alert(`Suivi des travaux avec ${artisanName} :\n- Tâche 1 : Visite initiale (En cours)\n- Tâche 2 : Préparation (À venir)\n- Tâche 3 : Réalisation (À venir)\n(via Asana)`);

        // Étape 6 : Paiement (Stripe/PayPal)
        const pay = confirm(`Les travaux avancent bien. Voulez-vous payer ${artisanName} pour la première étape (500€) ?`);
        if (pay) {
            alert(`Paiement de 500€ à ${artisanName} effectué avec succès ! (via Stripe)`);
        }

        // Étape 7 : Fin des travaux et enquête de satisfaction (SurveyMonkey/Typeform)
        const finish = confirm(`Les travaux avec ${artisanName} sont terminés. Voulez-vous donner votre avis ?`);
        if (finish) {
            const rating = prompt(`Notez votre expérience avec ${artisanName} (1-5) :`);
            if (rating) {
                alert(`Merci pour votre avis ! Note : ${rating}/5\nCommentaire simulé envoyé à ${artisanName} : "Super travail, très satisfait !" (via Typeform)`);
            }
        }
    } else {
        alert('Réservation annulée.');
    }
}