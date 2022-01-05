function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    localStorage.setItem("nama",profile.getName());
    localStorage.setItem("image",profile.getImageUrl());
    localStorage.setItem("email", profile.getEmail());
    window.location.href="/data.html"
}

function onLoad(){
    gapi.load("auth2", function(){
        gapi.auth2.init();

    })
}

$("#user").ready(function () {
    var user = document.getElementById("user")
    user.innerHTML = `${localStorage.getItem("email")}<h5>Hai, ${localStorage.getItem("nama")}!</h5>`
});

$("#tbl").ready(function () {
    var tbl = document.getElementById("tbl")
    getAll().then(response => {
        console.log(response)
        for(var i = 0; i <response.length; i++){
            const tr = tbl.insertRow()
            const td1 = tr.insertCell();
            const td2 = tr.insertCell();
            const td3 = tr.insertCell();
            const td4 = tr.insertCell();
            const td5 = tr.insertCell();
            const td6 = tr.insertCell();
            console.log(response[i])
            td1.innerHTML = response[i].idkomik
            td2.innerHTML = response[i].judulkomik
            td3.innerHTML = response[i].pengarang
            td4.innerHTML = response[i].penerbit
            td5.innerHTML = response[i].tahunterbit
            td6.innerHTML = `<div class ="justify content-center">
            <a class="btn btn-custome ms-2" href="update.html?idkomik=${response[i].idkomik}">Update </a>
            <button type ="button" class="btn btn-custome ms-2" onclick="del(${response[i].idkomik});">Delete</button>
            </div>`
            }
        }
    )
});