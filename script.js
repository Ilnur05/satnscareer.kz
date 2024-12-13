
document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Отключаем реальную отправку
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; // Показываем сообщение
    setTimeout(() => {
        successMessage.style.display = "none"; // Скрываем через 3 секунды
    }, 3000);
});

document.getElementById("menuToggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); // Переключаем видимость меню
});
