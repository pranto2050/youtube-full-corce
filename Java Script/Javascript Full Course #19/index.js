




// const fakeApi = fetch("https://api.github.com/users");
// fakeApi.then((data)=>{
//     console.log(data.json());
// })



fetch("https://api.github.com/users").then((res) => res.json()).then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let showData = document.getElementById("show_data");
        let create = document.createElement("img");
        create.src = data[i].avatar_url;

        let create_info = document.createElement("h3");
        create_info.textContent = data[i].login;


        showData.appendChild(create);
        showData.appendChild(create_info);
    }
});














