function convertNumber() {
    const numberInput = document.getElementById("number").value;
    const conversionType = document.getElementById("conversionType").value;
    let result = "";

    if (conversionType === "decimalToBinary") {
        result = (parseInt(numberInput, 10)).toString(2);
    } else if (conversionType === "decimalToHex") {
        result = (parseInt(numberInput, 10)).toString(16);
    } else if (conversionType === "binaryToDecimal") {
        result = parseInt(numberInput, 2).toString(10);
    } else if (conversionType === "hexToDecimal") {
        result = parseInt(numberInput, 16).toString(10);
    }

    document.getElementById("result").textContent = result;
}