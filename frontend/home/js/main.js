var cartPosition=450;var total=0;var set=0;
function addProduct(){
    total++;
    if(total==1){
        var element = document.createElement("div");
        var name = document.createElement("div");
    name.appendChild(document.createTextNode(total.toString()));
    name.className='flag-text';
    element.className='flag';
        element.appendChild(name);
    document.getElementById('bought-container').appendChild(element);
    cartPosition-=25;}else{document.getElementsByClassName('flag-text')[0].innerHTML=total.toString()};
    if(cartPosition!=0){
    document.getElementById('basket').style.top='-'+cartPosition+'px';
    }/*else{
        document.getElementById('else').style.display='block'
    }*/
    if(cartPosition!=450){
    document.getElementById('basket').style.top='-400px';
    setTimeout("document.getElementById('basket').style.top='-425px';",100);
    }
}
function openProduct(event,elm){
    if(set==1){openMap()}
    //var elm=document.getElementById('openProd');
if(event.srcElement==elm){
    document.getElementsByClassName('products-main')[0].style.display="none";
    if(document.getElementsByClassName('emporyoum-bar')[0]){document.getElementsByClassName('emporyoum-bar')[0].classList.add('emporyoum-bar-finish');
    document.getElementsByClassName('emporyoum-bar')[0].classList.remove('emporyoum-bar');}
    document.getElementById('basket-container').style.display="none";
    document.getElementsByClassName('products-page-main')[0].classList.remove('hidden');
}
}
function closeProduct(){
    document.getElementsByClassName('products-main')[0].style.display="";
    if(document.getElementsByClassName('emporyoum-bar-finish')[0]){document.getElementsByClassName('emporyoum-bar-finish')[0].classList.add('emporyoum-bar');
    document.getElementsByClassName('emporyoum-bar-finish')[0].classList.remove('emporyoum-bar-finish');}
    document.getElementById('basket-container').style.display="";
    document.getElementsByClassName('products-page-main')[0].classList.add('hidden');
}
function checkMobile(){
    if(innerWidth<innerHeight){
        document.getElementsByClassName('products-container')[0].style.width='90%';
        if(set==1){document.getElementsByClassName('google-map')[0].style.width='87%';}
        //document.getElementById('basket-container').style.display="none";
        document.getElementById('header-items-container').style.display="none";
    }else{
        document.getElementsByClassName('products-container')[0].style.width='50%';
        if(set==1){document.getElementsByClassName('google-map')[0].style.width='49%';}
        //document.getElementById('basket-container').style.display="";
        document.getElementById('header-items-container').style.display="flex";
    }
}

function openMap(){
    if(set==0){
    document.getElementsByClassName('google-map-start')[0].classList.add('google-map');
    document.getElementsByClassName('google-map-container-start')[0].classList.add('google-map-container');
    document.getElementsByClassName('emporyoum-bar')[0].classList.add('emporyoum-bar-finish');
    document.getElementsByClassName('google-map-start')[0].classList.remove('google-map-start');
    document.getElementsByClassName('google-map-container-start')[0].classList.remove('google-map-container-start');
    document.getElementsByClassName('emporyoum-bar')[0].classList.remove('emporyoum-bar');set=1}else{
        document.getElementsByClassName('google-map')[0].classList.add('google-map-start');
    document.getElementsByClassName('google-map-container')[0].classList.add('google-map-container-start');
    document.getElementsByClassName('emporyoum-bar-finish')[0].classList.add('emporyoum-bar');
    document.getElementsByClassName('google-map')[0].classList.remove('google-map');
    document.getElementsByClassName('google-map-container')[0].classList.remove('google-map-container');
    document.getElementsByClassName('emporyoum-bar-finish')[0].classList.remove('emporyoum-bar-finish');set=0;
    }
    
    
}