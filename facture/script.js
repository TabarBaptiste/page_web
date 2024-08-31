function calculateShare() {
    const salary1 = parseFloat(document.getElementById('salary1').value);
    const salary2 = parseFloat(document.getElementById('salary2').value);
    const billAmount = parseFloat(document.getElementById('billAmount').value);

    if (isNaN(salary1) || isNaN(salary2) || isNaN(billAmount)) {
        alert('Veuillez entrer des valeurs valides.');
        return;
    }

    const totalIncome = salary1 + salary2;
    const proportion1 = salary1 / totalIncome;
    const proportion2 = salary2 / totalIncome;

    const share1 = (billAmount * proportion1).toFixed(2);
    const share2 = (billAmount * proportion2).toFixed(2);

    const percentage1 = (proportion1 * 100).toFixed(2);
    const percentage2 = (proportion2 * 100).toFixed(2);

    document.getElementById('result').innerHTML = `
        <p>Part du Salaire 1: <strong>${share1} €</strong> (${percentage1}%)</p>
        <p>Part du Salaire 2: <strong>${share2} €</strong> (${percentage2}%)</p>
    `;
}