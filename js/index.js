console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

const commentList = document.querySelector('.comment-list');
const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const comment = commentInput.value;
  if (comment) {
    const commentElement = document.createElement('li');
    const commentItem = `
            <div class='comment-item'>
              <div class='comment-author'>
                <img src='./images/comment-author-icon.png' alt='사용자 프로필 이미지' />
                <span>방문자</span>
              </div>
              <div class='comment-content'>
                ${comment}
              </div>
            </div>`;

    commentElement.innerHTML = commentItem;
    commentList.appendChild(commentElement);
    commentInput.value = '';
  }
});
