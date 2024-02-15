const TODOS='todos'
const input = document.querySelector('input')
const list = document.querySelector('table')
const sort = document.querySelector('span')

const addRow = () => {
    
    const newTodo = input.value
    console.log(newTodo)
    todos.push(newTodo)
    addTableRow(newTodo)
    input.value = ''
    localStorage.setItem(TODOS,JSON.stringify(todos))
}

const deleteRow = (todo) => {
    const index = todos.indexOf(todo)
    todos.splice(index,1)
    list.deleteRow(index)
    localStorage.setItem(TODOS,JSON.stringify(todos))
}

const addTableRow = (text) => {
    const row = list.insertRow()
    const col1 = row.insertCell(0)
    const col2 = row.insertCell(1)
    
    col1.innerHTML = text
    col2.innerHTML = '<a href="#" onClick = "deleteRow(\'' + text + '\')"> X</a>'
    input.value = ''
}

const renderArray = () => {
    for (let i=0; i < todos.length; i ++) {
        addTableRow(todos[i])
    }
}

input.addEventListener('keypress',(event) => {

    if (event.key === 'Enter') {
        addRow()
    }
})

sort.addEventListener('click', () => {
    todos.sort()
    console.log("hello")
    for (let i = todos.length -1; i >=0; i--) {
        list.deleteRow(i)
    }

    renderArray()

})

const getData = () => {
    const data = JSON.parse(localStorage.getItem(TODOS))
    console.log("getData")

    if (data !== null) {
        return data
    } else {
        return []
    }
} 

const todos = getData()

renderArray()
