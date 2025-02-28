function fetcthAndDisplayUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
        if(!response.ok){
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); //แปลงข้อมูลเป็น JSON        
    })  
    .then(data => {
        console.log(data); //แสดงค่า
        const usersContainer = document.getElementById("users-container");
        usersContainer.innerHTML = "";//Clear any data existing content เคียร์เนื้อหาข้างใน

        data.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email : </strong>${user.email}</p>
                <p><strong>Phone : </strong>${user.phone}</p>
                <p><strong>Website : </strong>${user.website}</p>
                <p><strong>Address : </strong>${user.address.city},<strong> Zipcode :${user.address.zipcode} </strong></p>
            `;
            usersContainer.appendChild(userDiv); //นำไปแสดง
        })
    })
    .catch(error =>{
        console.error("There was a problem with the fetch operation",error);
    }) ;
}

fetcthAndDisplayUsers();



// import { add,arr,greet, name, person} from "./module.js";  //Ref:module.js

// console.log(add(5,5));
// console.log(greet());
// console.log(name);
// console.log(person);
// console.log(arr);