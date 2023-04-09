const labelLike = document.getElementById("counterLabelLike")
const labelDislike = document.getElementById("counterLabelDislike")

let likeCounter = labelLike.textContent;
let dislikeCounter = labelDislike.textContent;

function updateStateLike() {
    labelLike.innerHTML = ++likeCounter;
}

function updateStateDislike() {
    labelDislike.innerHTML = ++dislikeCounter;
}
