//button을 눌렀을 때 img태그의 이미지를 변경하기
//profile.jpg -> hl1.jpg -> h1 2.jpg


document.addEventListener("DOMContentLoaded",function(e){
    let image = document.querySelector("img")
    let btn = document.querySelector("input");
    let img1 = "image/cat.jpg"
    let img2 = "image/cat1.jpg"
    let img3 = "image/cat2.jpg"
    btn.addEventListener('click',function(e){
        let src = image.getAttribute("src") //img태그의 src속성의 값을 변수에 저장
        if(src === img1){
            image.setAttribute("src",img2)
        }else if(src === img2){
            image.setAttribute("src",img3)
        }else{
            image.setAttribute("src",img1)
        }

       
    })



})