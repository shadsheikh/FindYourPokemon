let _button = document.getElementById("_button");
let _input = document.getElementById("_input");
let _img = document.getElementById("_img")
let _h1 = document.getElementById("_h1")
let _loading = document.getElementById("loading")
let img = `<img id="_img" src="" >`

function success() {
    if(_input.value.trim()==="") { 
    _button.disabled = true; 
    } else { 
    _button.disabled = false;
    }
}

let GetData = async () => {
        _loading.style.display="block"
        await fetch(`https://pokeapi.co/api/v2/pokemon/${_input.value.toLowerCase()}`).then(
            (apidata)=>{
            return apidata.json()
        }).then((actualdata)=>{
            _h1.innerText=""
            _img.src=actualdata.sprites.front_default
            _loading.style.display="none"
        }).catch((error)=>{
            _h1.innerText = "Not Found"
            _img.src=""
            _loading.style.display="none"
        })
}

_input.addEventListener("keypress",async (event)=>{
    if(event.key=="Enter" && _input.value.trim()!=""){
        GetData()
    }  
})

_loading.style.display="none"
_button.disabled = true; 
_button.addEventListener("click", GetData)

// _button.addEventListener("click",()=>{
//     fetch(`https://pokeapi.co/api/v2/pokemon/${_input.value}`).then(
//         (apidata)=>{
//         return apidata.json()
//     }).then((actualdata)=>{
//         _h1.innerText=""
//         _img.src=actualdata.sprites.front_default
//     }).catch((error)=>{
//         _h1.innerText = "Not Found"
//         _img.src=""
//     })
// })
