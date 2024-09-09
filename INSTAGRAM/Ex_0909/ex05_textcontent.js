document.addEventListener("DOMContentLoaded",function(e){
    let p = this.documentElement.querySelector("p")
    let btn = this.documentElement.querySelector("input")
    
    btn.addEventListener('click',function(e){
        // p태그에 들어있는 내용을 수정
        //textContent : 태그에 들어있는 Content의 내용을 반환한다.
        console.log(p.textContent);
        
        p.textContent = "JS로 입력함";
    })
})