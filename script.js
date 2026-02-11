let users=[]

// get form & body

const form = document.getElementById('userForm')
const tableBody = document.getElementById('tableBody')

// get entry to users

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    // get name and email
    const name = document.getElementById('name').value
        const email = document.getElementById('email').value

        // add name & email to users
        users.push({name,email})
        form.reset()
        console.log(users);
        

})