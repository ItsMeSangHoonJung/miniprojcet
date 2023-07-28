const generateBtn = document.querySelector("#generateBtn")
const gridContainer = document.querySelector("#gridContainer")

generateBtn.addEventListener('click', () =>{
    if(gridContainer.children.length >=30){
        const confirmed = confirm("새로운 사진을 불러오기위해 모든 사진을 지우겠습니까?");
        if (confirmed){
            gridContainer.innerHTML ="";
        }
    }else{
        const RandomNumber = Math.floor(Math.random()*1000)+1
        const imgURL = `https://picsum.photos/500?random=${RandomNumber}`

        const img = document.createElement('img')
        img.src=imgURL

        gridContainer.appendChild(img)
    }

})