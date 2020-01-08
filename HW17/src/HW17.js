import './HW17.css';
const homePage = document.querySelector('.container')
const addPage = document.querySelector('.new-container')
const btnActions = document.querySelector('button')
const wrapper = document.querySelector('tbody')
        const error = document.querySelector('.error')
btnActions.addEventListener('click', newInvoice)

function newInvoice() {
    homePage.classList.add('invisible')
    addPage.classList.remove('invisible')
}

const saveBtn = document.querySelector('.save-btn')

saveBtn.addEventListener('click', endInvoice)

function endInvoice() {
    const number = document.querySelector('#num').value
    const supplied = document.querySelector('#sup').value
    const created = document.querySelector('#inv').value
    const comment = document.querySelector('#com').value
    if (number.length>2 && supplied.length > 0 && created.length > 0) {
        const html = `<tr>
                <td>${created}</td>
                <td>${number}</td>
                <td>${supplied}</td>
                <td>${comment}</td>
            </tr>`;
            wrapper.insertAdjacentHTML('beforeend', html);
        homePage.classList.remove('invisible')
        addPage.classList.add('invisible')
        error.classList.add('error')
    } else {
        error.classList.remove('error')
    }
}