function convertToPersian() {
    const numberInput = document.getElementById('number');
    const resultDiv = document.getElementById('result');
    const number = parseInt(numberInput.value);
    if (!isNaN(number)) {
        const persianNumber = convertNumberToPersian(number);
        resultDiv.textContent = 'معادل حروفی: ' + persianNumber;
    } else {
        resultDiv.textContent = 'لطفاً یک عدد معتبر وارد کنید';
    }
}
function convertNumberToPersian(number) {
    const persianNumbers = ['صفر', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه' , 'ده'];
    return persianNumbers[number];
}
