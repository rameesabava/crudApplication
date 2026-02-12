let users = []

// get form & body

const form = document.getElementById('userForm')
const tableBody = document.getElementById('tableBody')
const editIndexInput = document.getElementById('editIndex')

if(sessionStorage.getItem("users")){
    users=JSON.parse(sessionStorage.getItem("users"))
    displayUsers()
}


// add/edit entry to users

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // get name and email
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    if (editIndexInput.value == "") {
        users.push({ name, email })
    } else {
        // edit user
        users[editIndexInput.value] = { name, email }
        editIndexInput.value = ""
    }
    // add name & email to users
    form.reset()
    // console.log(users);
    sessionStorage.setItem("users", JSON.stringify(users))
    displayUsers()

})

// users should be listed inside table body
function displayUsers() {
    tableBody.innerHTML = ""
    let users = JSON.parse(sessionStorage.getItem("users"))
    users.forEach((user, index) => {
        tableBody.innerHTML += `
    <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <div class="d-flex">
                    <button onclick="editUser(${index})" class="btn btn-warning">Edit</button>
                    <button onclick="deleteUser(${index})" class="btn btn-danger ms-3">Delete</button>
                </div>
            </td>
        </tr>`
    })
}

// used to edit particular user
const editUser = (index) => {
    document.getElementById('name').value = users[index].name
    document.getElementById('email').value = users[index].email
    editIndexInput.value = index
}
const deleteUser = (index) => {
    if (confirm('Are you sure, do you want to delete the data?')) {
        users.splice(index, 1)
        sessionStorage.setItem("users",JSON.stringify(users))
        displayUsers()
    }
}