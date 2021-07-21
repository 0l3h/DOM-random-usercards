'use strict';

// List of users' names in header of the page
const names = [];
const p = document.createElement('p');
const users = document.querySelector('header');
users.append(p);

/** Method creates a card with user's info in it.
 *  
 * @param {String} firstName     
 * @param {String} lastName         
 * @param {String} userImageSrc     
 * @param {String} email            
 * @param {String} gender
 * @param {Number} age          
 * @returns 
 */
function createUserListItem({
    name: { first: firstName, last: lastName },
    picture: { large: userImageSrc },
    email, 
    gender,
    dob: {age}
}) {
    const userListItem = document.createElement('li');
    userListItem.classList.add('userListItem');

    // Card structure
    userListItem.append(
        createUserImage(userImageSrc),
        createUserFullName(firstName, lastName),
        createUserAge(age),
        createUserGender(gender),
        createEmail(email),
    );
    
    addCardEvents(userListItem, gender, firstName, lastName);
    
    return userListItem;
}

//#region Card methods, events.
function addCardEvents(userListItem, gender, firstName, lastName) {
    userListItem.addEventListener('click', (() => {
        userListItem.style.boxShadow = '0px 0px 5px';
        userListItem.style.backgroundColor = gender === 'male'? '#80ffff' : '#ffb3e6';

        // Add user name to user name list
        names.push(`${firstName} ${lastName}`);
        p.innerText = names.join(', ');
    }), {once: true});

    userListItem.onmouseenter = (event) => {
        userListItem.style.boxShadow = gender === 'male'? '0px 0px 10px #33ccff' : '0px 0px 10px #cc00cc'
    }

    userListItem.onmouseleave = (event) => {
        userListItem.style.boxShadow = '0px 0px 5px';
    }
}

function createUserImage(userImageSrc) {
    const img = new Image();
    img.src = userImageSrc;
    img.alt = 'user profile image';
    
    return img;
}

function createUserAge(age) {
    const span = document.createElement('span');
    span.innerText = age;
    return span;
}

function createUserFullName(firstName, lastName) {
    const h2 = document.createElement('h2');
    h2.classList.add('userFullName');
    h2.innerText = `${firstName} ${lastName}`;
    return h2;
}

function createEmail(email) {
    const span = document.createElement('span');
    span.innerText = email;
    return span;
}

function createUserGender(gender) {
    const span = document.createElement('span');
    span.classList.add('gender');
    span.innerText = gender === 'male'? '♂':'♀';

    return span;
}
//#endregion