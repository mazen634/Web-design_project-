
const stars = document.querySelectorAll('#course-stars i');
const ratingResult = document.getElementById('rating-result');

stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        let value = this.dataset.value;
        stars.forEach(s => {
            s.style.color = s.dataset.value <= value ? 'gold' : '#ccc';
        });
    });
    star.addEventListener('mouseout', () => {
        stars.forEach(s => s.style.color = s.classList.contains('selected') ? 'gold' : '#ccc');
    });
    star.addEventListener('click', function() {
        stars.forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
        ratingResult.innerText = `You rated this course: ${this.dataset.value} / 5 ⭐`;
    });
});

function addComment() {
    const input = document.getElementById('comment-input');
    if (input.value.trim() === '') return;
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML += `<div class="comment"><strong>You:</strong><p>${input.value}</p></div>`;
    input.value = '';
}

function resetComments() {
    document.getElementById('comment-list').innerHTML = '';
}
