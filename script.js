<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
    // Инициализация EmailJS
    (function(){
    emailjs.init("jRMQur_09g9TAL84q"); // Замените YOUR_USER_ID на ваш ID из EmailJS
})();

    function sendSelectedItems() {
    const form = document.getElementById("checkboxForm");
    const selectedItems = Array.from(form.elements["items"])
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

    if (selectedItems.length === 0) {
    alert("Пожалуйста, выберите хотя бы один элемент.");
    return;
}

    // Настраиваем параметры для отправки на EmailJS
    const emailParams = {
    to_name: "Юрій", // Замените на нужное имя получателя
    message: selectedItems.join(", ")
};

    emailjs.send("service_0mi2glu", "template_5k23pnv", emailParams)
    .then(response => {
    alert("Выбранные элементы успешно отправлены!");
    console.log("SUCCESS!", response.status, response.text);
}, error => {
    alert("Произошла ошибка при отправке.");
    console.error("FAILED...", error);
});
}
