'use strict';

const options = {
  results: 10,
  seed: 'abc',
  page: 1,
};

loadUsers(options);
// loadBackgroundImage();

/** Method loads users' data using Random User API.
 * 
 * @param {Number} results  Amount of user cards which one page can render.
 * @param {String} seed     String value which indicates users' sequence.
 * @param {Number} page     Number of current page.  
 */
function loadUsers({ results, seed, page }) {
  fetch(
    `https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`
  )
  .then(response => response.json())
  .then(({ results }) => renderUsers(results));
}               

/**
 * 
 * @param {Object} users 
 */
function renderUsers(users) {
  console.dir(users);

  const userList = document.querySelector('.userList');
  userList && userList.remove();

  const newUserList = document.createElement('ul');
  document.getElementById('root').prepend(newUserList);

  const liUserCollection = users.map(user => createUserListItem(user));
  newUserList.classList.add('userList');
  newUserList.append(...liUserCollection);
}