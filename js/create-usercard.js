'use strict'

function createUserListItem({
    name: { first: firstName, last: lastName },
    picture: { large: userImageSrc },
    email, 
    age, 
    gender
}) {
    const userListItem = document.createElement('li');
    userListItem.classList.add('userListItem');
    
    // Frame for user's profile picture
    const imageFrame = document.createElement('div');
    imageFrame.classList.add('frame');
    imageFrame.append(createUserImage(userImageSrc));

    // Card structure
    userListItem.append(
        imageFrame,
        createUserFullName(firstName, lastName),
        createUserAge(age),
        createUserGender(gender),
        createEmail(email),
    );

    userListItem.onclick = (event) => {
        userListItem.style.boxShadow = '0px 0px 10px rgb(255, 36, 116)'
    }

    return userListItem;
}

//#region Methods
function createUserImage(userImageSrc) {
    const img = new Image();
    img.src = userImageSrc;
    img.alt = 'user profile image';
    
    return img;
}

function createBackgroundImage() {
    const backgroundImage = document.createElement('img');
    backgroundImage.src = 'https://picsum.photos/200/300';
    return backgroundImage;
}

function createUserImageFrame(gender) {
    const imageFrame = document.createElement('div');
    imageFrame.classList.add('frame');
    imageFrame.style.borderColor = gender === 'male'? '5px solid rgb(0, 217, 255)' : '5px solid rgb(255, 0, 157)';

    return imageFrame;
}

function createUserAge(age) {
    const span = document.createElement('span');
    span.innerText = age;
    return span;
}

function createUserFullName(firstName, lastName) {
    const h1 = document.createElement('h1');
    h1.classList.add('userFullName');
    h1.innerText = `${firstName} ${lastName}`;
    return h1;
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