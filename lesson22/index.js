const addBtn = document.getElementById(`add`)
const getBtn = document.getElementById(`get`)
const putBtn = document.getElementById(`put`)
const delBtn = document.getElementById(`del`)
addBtn.onclick = () => {
    const user ={
        firstName: `Helen`,
        lastName: `Smith`,
        age: 35,
        
    }
    fetch(`https://test-fire-fe31e-default-rtdb.firebaseio.com/user.json`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    
}
getBtn.onclick = () => {
    fetch(`https://test-fire-fe31e-default-rtdb.firebaseio.com/user.json`)
   .then(response => response.json())
   .then(data => {
    const arr = Object.values(data).map((el,i) => {
        return { 
            ...el,
            id: Object.keys(data)[i],

        };
    });
    console.log(arr);
   })
     .catch(error => console.error('Error:', error))
}
putBtn.onclick = () =>{

    const userId =`-OJOsoD53aQU1Z9ZmPlF`
    const user = {
        firstName: `Katy`,
        lastName: `Green`,
        age: 36,
    }
    fetch(`https://test-fire-fe31e-default-rtdb.firebaseio.com/user/${userId}.json`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    

}
delBtn.onclick = () =>{

    const userId =`-OJP239I-5KKk0SkAqGY`
    const user = {
        firstName: `Katy`,
        lastName: `Green`,
        age: 36,
    }
    fetch(`https://test-fire-fe31e-default-rtdb.firebaseio.com/user/${userId}.json`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(user)
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    

}

