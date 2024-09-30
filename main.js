const input = document.querySelector('.add-block__input')
const listItem = document.querySelector('.list__item')
const btn = document.querySelector('.add-block__btn-add')

btn.addEventListener('click',  addItem)

function addItem() {
    const title = input.value.trim()
    const item = `<li class="list__item" data-id="${new Date().getTime()}">
    <div class="list__item-strip">
    <h1 class="list__item-title">${title}</h1>
    <button class="list__item-btn">&#128722</button>
    </div>
</li>`

 if (title === '') {
     return false
 } else {
   
 }
   input.value = ''
listItem.insertAdjacentHTML('afterbegin', item)


const itemDelete = document.querySelector('.list__item-btn')
itemDelete.addEventListener('click', function() {
    const id = this.parentNode.parentNode.dataset.id

    deletListItem(id)
})

}

function deletListItem(id) {
    const li = document.querySelectorAll('li')
    li.forEach(el => el.dataset.id === id && el.remove())
}
