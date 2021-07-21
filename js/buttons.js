'use strict'

function btnPrevHandler(e) {
    if (options.page >= 1) {
        options.page--;
        loadUsers(options);
    }
}

function btnNextHandler(e) {
    options.page++;
    loadUsers(options);
}

function firstPage() {
    options.page = 1;
    loadUsers(options);
}

const [btnFirstPage,btnPrev, btnNext] = document.querySelectorAll('button');
btnFirstPage.addEventListener('click', firstPage);
btnPrev.addEventListener('click', btnPrevHandler);
btnNext.addEventListener('click', btnNextHandler);