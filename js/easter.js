function show(id){
    var aiin  = document.getElementById(id);
    var inp= document.getElementById('inp');
    if(aiin.style.display != 'block'){
        aiin.style.display = 'block';
        inp.value='关闭';
    }else{
        aiin.style.display = 'none';   
        inp.value='展开';
    }
}