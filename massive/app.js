const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
const notes = ['Запись 1','Запись 2','Запись 3']
const successBtn = document.getElementsByClassName('btn btn-small btn-success')


 

function MakeList(title) {
    return`
     <li class="list-group-item d-flex justify-content-between align-items-center"> 
          <span>${title} </span>
          <span>
<span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>
       
    `
}

function render() {
    for(let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend',
        MakeList(notes[i])
    )
    }
    saveNote()
}
saveNote()
createBtn.onclick = function() {
    if(inputElement.value.length === 0) {
        return
    } 
    listElement.insertAdjacentHTML('beforeend',
        MakeList(inputElement.value)
        
    )
    inputElement.value = ''
}
render()

function saveNote() {
    successBtn.onclick = function() {
    remove(inputElement)
    }
} 




