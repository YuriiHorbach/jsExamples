
let tab = document.querySelectorAll('.tab');

init();

tab.forEach(function(element){
    element.onclick = showTabs;
})

function init(a){
    let tabBody = document.querySelectorAll('.tab-body');
    for(let i = a; i < tabBody.length; i++){
        tabBody[i].style.display = 'none';
    }
    
}



function showTabs(){
    let data = this.getAttribute('data');
    console.log(data);
    init(1);
    //'.tab-body[data = "3"]'
    //'.tab-body[data = '+data+']'
    //document.querySelector('.tab-body[data = "'+data+'"]').style.display = 'block';
    document.querySelector(`.tab-body[data = "${data}"]`).style.display = 'block';

}