declare const axios: any;


console.log("showusers");

document.addEventListener("DOMContentLoaded", async () => {
    const result =  await axios("http://localhost:3000/api/v1/users");
  //  const resultJson = await result.json();
    let htmlUsers = "<ul>";
    result.data.forEach((user: any) => {htmlUsers += `<li>${user.name} ${user.first_surname}</li>`;});
    htmlUsers += "</ul>";
    document.getElementById("users")!.innerHTML = htmlUsers;    
});

