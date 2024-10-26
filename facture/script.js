// Fonction pour calculer la répartition
function calculateShare() {
    const salary1 = parseFloat(document.getElementById('salary1').value);
    const salary2 = parseFloat(document.getElementById('salary2').value);
    const billAmount = parseFloat(document.getElementById('billAmount').value);

    if (!isNaN(salary1) && !isNaN(salary2) && !isNaN(billAmount) && salary1 > 0 && salary2 > 0 && billAmount > 0) {
        const totalIncome = salary1 + salary2;
        const proportion1 = salary1 / totalIncome;
        const proportion2 = salary2 / totalIncome;

        const share1 = (billAmount * proportion1).toFixed(2);
        const share2 = (billAmount * proportion2).toFixed(2);

        const percentage1 = (proportion1 * 100).toFixed(2);
        const percentage2 = (proportion2 * 100).toFixed(2);

        document.getElementById('result').innerHTML = `
            <p>Part du Salaire 1: <strong>${share1} €</strong> (${percentage1}%)</p><br>
            <p>Part du Salaire 2: <strong>${share2} €</strong> (${percentage2}%)</p>
        `;

        // Afficher les boutons
        showButtons();
    } else {
        // Cacher les boutons si les valeurs sont invalides ou vides
        hideButtons();
    }
}

// Fonction pour afficher les boutons
function showButtons() {
    document.querySelectorAll('.btn').forEach(button => {
        button.style.display = 'block';
    });
}

// Fonction pour cacher les boutons
function hideButtons() {
    document.querySelectorAll('.btn').forEach(button => {
        button.style.display = 'none';
    });
}

// Fonction pour télécharger les résultats en .txt
// function downloadTxt() {
//     const result = document.getElementById('result').innerText;
//     const blob = new Blob([result], { type: 'text/plain' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'resultat.txt';
//     link.click();
// }

// Fonction pour télécharger les résultats en .csv
// function downloadCsv() {
//     const salary1 = parseFloat(document.getElementById('salary1').value);
//     const salary2 = parseFloat(document.getElementById('salary2').value);
//     const billAmount = parseFloat(document.getElementById('billAmount').value);

//     const resultCsv = `Salaire 1, Salaire 2, Montant de la Facture\n${salary1}, ${salary2}, ${billAmount}`;
//     const blob = new Blob([resultCsv], { type: 'text/csv' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'resultat.csv';
//     link.click();
// }

// Fonction pour télécharger les résultats en .pdf
function downloadPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const salary1 = parseFloat(document.getElementById('salary1').value);
    const salary2 = parseFloat(document.getElementById('salary2').value);
    const billAmount = parseFloat(document.getElementById('billAmount').value);

    const result = document.getElementById('result').innerText;

    doc.setFontSize(30);
    doc.text("Résumé du Calcul de Répartition", 20, 20);

    doc.setFontSize(26);
    doc.text(`Salaire 1 : ${salary1} €`, 20, 40);
    doc.text(`Salaire 2 : ${salary2} €`, 20, 50);
    doc.text(`Montant de la facture : ${billAmount} €`, 20, 60);

    doc.setFontSize(28);
    doc.text("Résultats :", 20, 80);

    doc.setFontSize(24);
    const lines = result.split("\n");
    let yPosition = 95;
    lines.forEach((line) => {
        doc.text(line.trim(), 20, yPosition);
        yPosition += 5;
    });

    doc.save('resultat_repartition.pdf');
}

// Ajoute des écouteurs d'événements
document.getElementById('salary1').addEventListener('input', calculateShare);
document.getElementById('salary2').addEventListener('input', calculateShare);
document.getElementById('billAmount').addEventListener('input', calculateShare);

// document.getElementById('downloadTxt').addEventListener('click', downloadTxt);
// document.getElementById('downloadCsv').addEventListener('click', downloadCsv);
document.getElementById('downloadPdf').addEventListener('click', downloadPdf);

