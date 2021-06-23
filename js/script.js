
//呼叫JSON檔案
let appleList;
fetch(
    'https://raw.githubusercontent.com/Yeh-JUN/JSONFile/main/apple.json',
    {
        method: "GET",
    }
).then(response=>{
    return response.json();
})
.then(result=>{
    appleList = result;
    console.log(appleList);

    renderThePage();
})
.catch(err=>{
    console.log(err);
})

// 渲染頁面
const colorM = document.querySelector('.color-module');
const storageM = document.querySelector('.storage-module');
const networkM = document.querySelector('.network-module');

function renderThePage(){
    appleList.color.forEach(function(item){
        let colorC = document.getElementById('color-component');
        let clonecolorC = colorC.content.cloneNode(true);
        clonecolorC.querySelector('img').src = item.colorItem;
        clonecolorC.querySelector('.color').innerText = item.name;
        clonecolorC.querySelector('.color-item').setAttribute("value" , item.value);
        colorM.append(clonecolorC);
    });

    appleList.spec.forEach(function(item){
        let storageC = document.getElementById('storage-component');
        let clonestorageC = storageC.content.cloneNode(true);
        clonestorageC.querySelector('.storage-text').innerText = `${item.stroage}GB`;
        clonestorageC.querySelector('.price').innerText = `NT$ ${item.price} 起`;
        clonestorageC.querySelector('.color-item').setAttribute("type" , item.type);
        storageM.append(clonestorageC);
    });

    appleList.network.forEach(function(item){
        let networkC = document.getElementById('netwoek-component');
        let clonenetworkC = networkC.content.cloneNode(true);
        clonenetworkC.querySelector('.network').innerText = item.name;
        clonenetworkC.querySelector('.price').innerText = `NT$ ${item.price} 起`;
        clonenetworkC.querySelector('.color-item').setAttribute("type" , item.type);

        networkM.append(clonenetworkC);
    })
}
//顏色更換事件
const imgDsiplay = document.querySelector('.img-display');
const colorSelector = document.querySelector(".color-selector");
const changeColor = document.querySelector('.chgange-color');
document.querySelector('.color-module').addEventListener('click' , function(event){
    const value = event.target.getAttribute("value");
    console.log(value);
    if(value === "space")
    {
        imgDsiplay.src = appleList.ipadImg[0].space;
        document.querySelector('.color-selector span').textContent = appleList.color[0].name;
    }
    else if(value === "silver"){
        imgDsiplay.src = appleList.ipadImg[0].silver;
        document.querySelector('.color-selector span').textContent = appleList.color[1].name;
    }
    else if(value === "pink"){
        imgDsiplay.src = appleList.ipadImg[0].pink;
        document.querySelector('.color-selector span').textContent = appleList.color[2].name;
    }
    else if(value === "green"){
        imgDsiplay.src = appleList.ipadImg[0].green;
        document.querySelector('.color-selector span').textContent = appleList.color[3].name;
    }
    else if(value === "blue"){
        imgDsiplay.src = appleList.ipadImg[0].blue;
        document.querySelector('.color-selector span').textContent = appleList.color[4].name;
    }
    //#region <switch>
    // switch(value){
    //     case 'space':
    //         imgDsiplay.src = appleList.ipadImg[0].space;
    //         break;
    //     case 'silver':
    //         imgDsiplay.src = appleList.ipadImg[0].silver;
    //         break;
    //     case 'pink':
    //         imgDsiplay.src = appleList.ipadImg[0].pink;
    //         break;
    //     case 'green':
    //         imgDsiplay.src = appleList.ipadImg[0].green;
    //         break;
    //     case 'blue':
    //         imgDsiplay.src = appleList.ipadImg[0].blue;
    //         break;
    //     default:
    //             console.log("Error...");
    // }
    //#endregion
    colorM.classList.add("fadeout");
    colorSelector.classList.add("fadein");
});
// colorchange event
changeColor.addEventListener('click', (e)=>{
    e.preventDefault();
    colorM.classList.remove("fadeout");
    colorSelector.classList.remove("fadein");
});


//規格更換事件
const displayPrice = document.querySelector(".display-price");

const storageSelector = document.querySelector(".storage-selector");
const changeStorage = document.querySelector('.chgange-storage');
document.querySelector('.storage-module').addEventListener('click' , function(event){
    const type = (event.target.getAttribute("type"));
    console.log(type);
    if(type === "64"){
        document.querySelector('.storage-selector span').textContent = `${type}GB`;
        displayPrice.textContent = `NT$${appleList.spec[0].price}`;
        networkM.querySelectorAll('h4')[0].textContent = "NT18900 起";
        appleList.network[0].price = 18900;
        networkM.querySelectorAll('h4')[1].textContent = "NT23900 起";
        appleList.network[1].price = 23900;

    }
    else if(type === "256"){
        document.querySelector('.storage-selector span').textContent = `${type}GB`;
        displayPrice.textContent = `NT$${appleList.spec[1].price}`;
        networkM.querySelectorAll('h4')[0].textContent = "NT23900 起";
        appleList.network[0].price = 23900;
        networkM.querySelectorAll('h4')[1].textContent = "NT28900 起";
        appleList.network[1].price = 28900;
        

    }
    storageM.classList.add("fadeout");
    storageSelector.classList.add("fadein");
});
changeStorage.addEventListener('click', (e)=>{
    e.preventDefault();
    storageM.classList.remove("fadeout");
    storageSelector.classList.remove("fadein");
});

//網路更換事件
const networkSelector = document.querySelector(".network-selector");
const changeNetwork = document.querySelector('.chgange-network');
document.querySelector('.network-module').addEventListener('click' , function(event){
    const type = (event.target.getAttribute("type"));
    if(type === "wifi"){
        document.querySelector('.network-selector span').textContent = appleList.network[0].name;
        console.log(appleList.network[0].price);
        displayPrice.textContent = `NT$${appleList.network[0].price}`;
    }
    else if(type === "move"){
        document.querySelector('.network-selector span').textContent = appleList.network[1].name;
        console.log(appleList.network[1].price);
        displayPrice.textContent = `NT$${appleList.network[1].price}`;
    }
    networkM.classList.add("fadeout");
    networkSelector.classList.add("fadein");
});
changeNetwork.addEventListener('click', (e)=>{
    e.preventDefault();
    networkM.classList.remove("fadeout");
    networkSelector.classList.remove("fadein");
});
//#region <事件共用>
// productDisplay.addEventListener('click' ,(event)=>{
//     const productColor = event.target.id
//     const productType = event.target.dataset.type;
//     const productData = productList[productType];
//     // 防呆機制
//     const productPic = productData && productData[productColor];
//     switch(productType){
//         case 'phone':
//             if (productPic){
//                 phonePic.setAttribute('src' , productPic);
//             }
//             break;
//         case 'pad':
//             if (productPic){
//                 phonePic.setAttribute('src' , productPic);
//             }
//             break;
//         case 'mac':
//             if (productPic){
//                 phonePic.setAttribute('src' , productPic);
//             }
//             break;
//         default:
//             break;
//     }
// })
//#endregion