const btn = document.getElementById("btn");
const container = document.getElementById("container");


function createNotification(){
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText= "I LOVE YOU TO THE MOON";
    container.appendChild(notif);
    setTimeout(()=> {
       notif.remove();
    }, 3000)
}

btn.addEventListener("click", () => {
    createNotification();
});

