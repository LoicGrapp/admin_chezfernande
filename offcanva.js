const togglOffCanva = document.querySelector('.toggl-offcanva');

const offCanva = document.querySelector('.offcanva');

togglOffCanva.addEventListener('click', function () {
    offCanva.classList.toggle('active');
});