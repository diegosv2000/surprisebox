let start = document.getElementById("start");
start.onclick = () =>{
    document.querySelector(".box").style.opacity = 1;
    document.getElementById("buttonStart").style.opacity=0;
    document.getElementById("audio").play();
    document.getElementById("audio").volume = 0.3;
    setTimeout(() =>{
        document.getElementById("container").style.opacity=1;
        document.getElementById("buttonStart").style.display = 'none';
    }, 1000);
}


