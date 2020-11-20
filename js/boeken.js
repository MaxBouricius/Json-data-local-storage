const uitvoer = document.getElementById('boeken')
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status ==200){
        let resultaat = JSON.parse(xhr.responseText);
        boeken.data = resultaat;
        boeken.uitvoeren();
     } 
}
xhr.open('GET', 'boeken.json', true);
xhr.send();

const boeken = {
    
    
     uitvoeren(){
        let html = "";
       
 this.data.forEach( boek => {

            let completeTitel = "";
            if ( boek.voortitel ) {
                completeTitel += boek.voortitel + " ";
            }
            completeTitel += boek.titel;


            let auteurs = "";
            boek.auteurs.forEach((schrijver,index) => {
                let tv = schrijver.tussenvoegsel ? schrijver.tussenvoegsel+" " : "";
                let separator = ", ";
                if(index >= boek.auteurs.length-2) { separator = " en ";}
                if(index >= boek.auteurs.length-1) { separator = "";}
                auteurs += schrijver.voornaam + " "  + tv + schrijver.achternaam + separator;
            })

            html += `<section class="boek">`;
            html += `<img class="boek__cover" src="${boek.cover}" alt="${completeTitel}">`
            html += `<h3 class="boek__kopje">${completeTitel}</h3>`;
            html += `<p class="boek__auteurs">${auteurs}</p>`;
            html += `<span class="boek__uitgave"> ${boek.uitgave}</span>`;
            html += `<span class="boek__ean">ean${boek.ean}</span>`;
            html += `<span class="boek__paginas"> ${boek.paginas} pagina's</span>`;
            html += `<span class="boek__taal"> ${boek.taal}</span>`;
            html += `<div class="boek__prijs"> ${boek.prijs.toLocaleString('nl-NL', {currency: 'EUR', style: 'currency'})}</div>`;
            html += `</section>`;
        });
        uitvoer.innerHTML = html
     }
}