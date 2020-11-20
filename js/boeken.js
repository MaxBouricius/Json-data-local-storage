const uitvoer = document.getElementById('boeken')
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status ==200){
        let resultaat = JSON.parse(xhr.responseText);
        console.log(resultaat);
     } else {
         console.log("readystate: " + xhr.readyState);
         console.log("status: " + xhr.state);
     }
}
xhr.open('GET', 'boek.json', true);
xhr.send();
