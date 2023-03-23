// Получаем кнопки лайка и дизлайка
const likeButton = document.getElementById("like-button");
const dislikeButton = document.getElementById("dislike-button");

// Создаем счетчики для лайков и дизлайков
let likeCount = 0;
let dislikeCount = 0;

// Добавляем обработчики событий на кнопки
likeButton.addEventListener("click", function () {
    // Увеличиваем счетчик лайков на 1
    likeCount++;
    // Обновляем текст кнопки лайка с учетом нового количества лайков
    likeButton.innerHTML = '<i class="fa-solid fa-thumbs-up"></i></i>' + likeCount;
});

dislikeButton.addEventListener("click", function () {
    // Увеличиваем счетчик дизлайков на 1
    dislikeCount++;
    // Обновляем текст кнопки дизлайка с учетом нового количества дизлайков
    dislikeButton.innerHTML = '<i class="fa-solid fa-thumbs-down"></i>' + dislikeCount;
});
