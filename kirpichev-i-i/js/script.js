const labelLike = document.getElementById("counterLabelLike")
const labelDislike = document.getElementById("counterLabelDislike")

let likeCounter = likeLabel.textContent;
let dislikeCounter = dislikeLabel.textContent;

function updateStateLike() {
    labelLike.innerHTML = ++likeCounter;
}

function updateStateDislike() {
    labelDislike.innerHTML = ++dislikeCounter;
}
