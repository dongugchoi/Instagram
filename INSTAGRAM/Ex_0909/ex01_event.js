document.addEventListener("DOMContentLoaded",function(){
    // let keydown = document.querySelector("#keydown");
    let keydown = document.getElementById('keydown');
    keydown.addEventListener("keydown",function(e){
        
        //KEY라는 키는 누른 버튼에 대한 정보를 가지고 있다.
        // console.log(e.key);
        //q를 눌렀을 때 "This is Q"라는 문구를 가진
        //경고창 띄우기
        if(e.key === 'q' ||e.key ==='Q'){
            alert('This is Q')
        }else{
            console.log(e.target.value);
            
        }
     
    })
    
 
    let change = this.documentElement.querySelector("#change");
    
    change.addEventListener('change',function(e){
        console.log(e.target.value);
    })



    let input = this.documentElement.querySelector("#input");
    
    change.addEventListener('input',function(e){
        console.log(e.target.value);
    })
    
})