function calculateEndTime() {
    // Obtenez l'heure de début, l'heure de début du déjeuner et l'heure de fin du déjeuner à partir des éléments HTML
    const startTime = document.getElementById('startTime').value;
    const lunchStartTime = document.getElementById('lunchStartTime').value;
    const lunchEndTime = document.getElementById('lunchEndTime').value;

    // Vérifiez si l'un des champs d'heure est vide
    if (!startTime || !lunchStartTime || !lunchEndTime) {
        // Si un champ est vide, afficher un message d'erreur et quitter la fonction
        document.getElementById('result').textContent = 'Veuillez remplir toutes les heures.';
        return;
    }

    // Créer des objets Date pour l'heure de début, l'heure de début du déjeuner et l'heure de fin du déjeuner
    const start = new Date(`1970-01-01T${startTime}:00`);
    const lunchStart = new Date(`1970-01-01T${lunchStartTime}:00`);
    const lunchEnd = new Date(`1970-01-01T${lunchEndTime}:00`);

    // Vérifier l'ordre des heures
    if (lunchStart <= start) {
        document.getElementById('result').textContent = 'L\'heure de début du déjeuner doit être après l\'heure de début.';
        return;
    }
    if (lunchEnd <= lunchStart) {
        document.getElementById('result').textContent = 'L\'heure de fin du déjeuner doit être après l\'heure de début du déjeuner.';
        return;
    }

    // Calcule la durée du déjeuner en minutes
    let lunchDuration = (lunchEnd - lunchStart) / (1000 * 60); // en minutes

    // Si la durée du déjeuner est inférieure à 45 minutes, réglez-la sur 45 minutes
    if (lunchDuration < 45) {
        lunchDuration = 45;
    }

    // Calculer les heures de travail avant le déjeuner
    const workHoursBeforeLunch = (lunchStart - start) / (1000 * 60 * 60);

    // Calculez les heures de travail après le déjeuner (en supposant une journée de travail de 8 heures)
    const workHoursAfterLunch = 8 - workHoursBeforeLunch;

    // Calculer l'heure de fin de travail en ajoutant les heures de travail après le déjeuner et la durée du déjeuner à l'heure de fin du déjeuner
    const endOfWork = new Date(lunchEnd.getTime() + (workHoursAfterLunch * 60 * 60 * 1000) + ((lunchDuration - (lunchEnd - lunchStart) / (1000 * 60)) * 60 * 1000));

    // Formate l'heure de fin de travail sous forme de chaîne au format HH:mm
    const endTime = endOfWork.toTimeString().slice(0, 5);

    // Afficher la fin du temps de travail dans l'élément HTML
    document.getElementById('result').textContent = `Vous devez partir à : ${endTime}`;
}

function afficherHeure() {
    const date = new Date();
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();

    const heure = `${heures}:${minutes.toString().padStart(2, "0")}`;
    document.getElementById("horloge").textContent = heure;
}

setInterval(afficherHeure, 900);