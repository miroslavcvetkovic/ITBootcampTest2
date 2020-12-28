let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

const divForm = document.getElementsByClassName('form-style-2');
const form = document.querySelector('#forma');
const select = document.querySelector('#select-dino');
const btnAll = document.querySelector('#btn-all');
const divContainer = document.querySelector('#item-container');
const item = document.getElementsByClassName('item');
const body = document.querySelector('#main')
const btnSubmit = document.querySelector('#submit')

dinos.forEach(()=> {
    for(let i = 0; i <dinos.length; i++){
        console.log(dinos[i].name, dinos[i].img, dinos[i].cena);
    }
})
const listDinos = document.createElement('div')
listDinos.className = "all-dinos"
listDinos.innerHTML = `
<div>
<h3>Ime dinosaurusa: ${dinos.name}</h3>
<img> Slika dinosaurusa: ${dinos.img}</img>
<h4> Cena dinosaurusa: ${dinos.cena}</h4>
</div>
`
body.append(listDinos)

btnAll.addEventListener('click', ()=> {
    const listDinos = document.createElement('div')
    listDinos.className = "all-dinos"
    listDinos.innerHTML = `
    <div>
    <h3>Scipionyx</h3>
    <img src="http://images.dinosaurpictures.org/efraasia_0a4e.jpg"> </img>
    <h4> Cena dinosaurusa: 221</h4>
    <br>
    <br>
    <h3>Becklespinax</h3>
    <img src="http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg"> </img>
    <h4> Cena dinosaurusa: 221</h4>
    <br>
    <br>
    <h3>Sciurumimus</h3>
    <img src="http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg"> </img>
    <h4> Cena dinosaurusa: 221</h4>
    <br>
    <br>
    <h3>Hypsilophodon</h3>
    <img src="http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg"> </img>
    <h4> Cena dinosaurusa: 221</h4>
    <br>
    <br>
    <h3>Dacentrurus</h3>
    <img src="http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg"> </img>
    <h4> Cena dinosaurusa: 221</h4>
    <br>
    <br>
    <h3>Iguanodon</h3>
    <img src="http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg"> </img>
    <h4> Cena dinosaurusa: 221</h4>
    <br>
    <br>
    </div>
    `
    body.append(listDinos)
    
})

const isValid = narudzba => narudzba.kupac != ''
 && narudzba.dino != ''
 && narudzba.kupac >= 4


btnSubmit.addEventListener('submit',()=>{
    const inputKupac = document.querySelector('#kupac')
    const inputDino = document.querySelector('.select-field')
    const inputTxt = document.querySelector('.textarea-field')

    let narudzba = {
        kupac: inputKupac.value.trim(),
        dino: inputDino.value,
        txt: inputTxt.value.trim()
    }

    inputKupac.value = ''
    inputDino.value = ''
    inputTxt.value = ''
})

 console.log(dinos(flat(3)));
