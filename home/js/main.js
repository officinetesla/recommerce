var cartPosition=450;var total=0;var set=0;var cartOpened=0;var productOpened=0;
var gClass=function(v){return document.getElementsByClassName(v);}
function addProduct(productName,XMLid,PRDid){
   var elm=document.getElementById(PRDid);
    if(elm){
        var qt=parseInt(elm.className.replace('a',''));qt++;
        elm.className='a'+qt;
    }else{
    elm=ooo.ins(document.getElementById('cart-data'),'textarea',['id',PRDid,'class','a1'],document.getElementById(XMLid).value);}
    total++;
    if(total==1){
        var element = document.createElement("div");
        var name = document.createElement("div");
    name.appendChild(document.createTextNode(total.toString()));
    name.className='flag-text';
    element.className='flag';
        element.appendChild(name);
    document.getElementById('bought-container').appendChild(element);
    cartPosition-=25;}else{gClass('flag-text')[0].innerHTML=total.toString();
                          };
    if(cartPosition!=0){
    document.getElementById('basket').style.top='-'+cartPosition+'px';
    }/*else{
        document.getElementById('else').style.display='block'
    }*/
	 server_syncart();
 if(cartPosition!=450){
    document.getElementById('basket').style.top='-400px';
    setTimeout("document.getElementById('basket').style.top='-425px';",100);
    }
	rendercart();
}
function openProduct(event,elm,idd){
	 document.body.classList.remove('Bmode');
	 document.body.classList.remove('Cmode');
	 document.body.classList.add('Pmode');
	 elm.parentElement.parentElement.classList.add('selected');
    //ooo.render('product-page-target','product-page-template.xml','http://emporyou.com/api/get?id='+idd);
}
function closeProduct(elm){	
	 document.body.classList.remove('Pmode');
	 document.body.classList.remove('Cmode');
	 document.body.classList.add('Bmode');
	 console.log(elm);
	 jQuery('.zero-thumb.selected').removeClass('selected');
	 
}
function checkMobile(){
}
window.ismaploadedonce=false;
function toggleMap(){
	if(!window.ismaploadedonce){window.doloadmaponce=function(){setTimeout(initMap,500);}
	ooo.ins(document.getElementsByTagName('head')[0],'script',['type','text/javascript','src','https://maps.googleapis.com/maps/api/js?fg=0&libraries=places&callback=doloadmaponce']);}
	document.body.classList.toggle('map-isin');}
function openMap(){toggleMap()}
function openCart(){
	rendercart();
	document.body.classList.add('cart-isin');
   //if(openCart==1){closeCart()}else{
    //scrollTo(document.body, 0, 200);
    //gClass('products-main')[0].style.top="55%";
   //document.getElementById('basket-container').style.top="-50%";    	
	//defined in mainh.js, control output via products-cart.xml
	//ooo.$$('products-cart-target').classList.add('hidden');
}
function closeCart(){
	document.body.classList.remove('cart-isin');
    //ooo.$$('products-cart-target').classList.add('hidden');
	 /*
    ooo.$$('products-cart-target').style.display='none';
    if(document.getElementById('pattern')){
    cartOpened=0;
    gClass('emporyoum-bar')[0].style.top="14%";
    ooo.$$('products-cart-target').style.display='none';
    document.getElementById('products-cart-target').style.height="0";
    document.getElementById('pattern').style.bottom="150px";}
	 */
}
function scrollTo(element, to, duration) {
    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
function defaultPage(){
    document.getElementById('checkout-main-container').setAttribute('style','display:none');
    productOpened=0;
    if(cartOpened==1){closeCart()};
    if(set==1){openMap()}else{gClass('google-map-container')[0].style.top="13%"}
    if(gClass('products-page-main')[0].style.display!="none"){gClass('products-page-main')[0].classList.add('hidden');}
    gClass('products-main')[0].style.top="25%";
    gClass('products-main')[0].style.display="block";
    document.getElementById('product-page-target').style.top="58%";
    document.getElementById('basket-container').style.top="0";
    scrollTo(document.body, 0, 200);
}
function share(){
    document.getElementById('fbb').style.display="block";
    document.getElementById('shb').style.display="none"
}
function shareDialog(elm){
    if (elm.src == "../img/share.png")
        {
            elm.src = "../img/diamond.png";
        }
}
function openCat(e){
    for(i=0;i<10;i++){
        if(gClass('search')[i]){
            gClass('cat-cont')[i].style.height="50px";
            gClass('cat-cont')[i].style.lineHeight="50px";
            gClass('search')[i].style.height="0";
            gClass('search')[i].style.display="none";
            gClass('cat-cont')[i].classList.remove('selected');
        }
    }
    e.style.height="40px";
    e.style.lineHeight="40px";
    e.classList.add('selected');
    var n = e.nextSibling;
    while(n && n.nodeType != 1) {
    n = n.nextSibling
}
    n.style.height="auto";
    n.style.display="block";
}
function clean(elm){
    for(i=0;i<30;i++){if(elm.value!='all'&&elm.value!='recents'){
        if(gClass('orders-button')[i]&&gClass('orders-button')[i].value!='all'&&gClass('orders-button')[i].value!='recents'){gClass('orders-button')[i].classList.remove('select')}
    }else{elm.classList.add('select');
        if(elm.value=='all'){document.getElementById('recentOrders').classList.remove('select');}else{
            document.getElementById('allOrders').classList.remove('select');
        }
    }}
}
function openCheckout(){
    defaultPage();checkLogin();
    gClass('emporyoum-bar')[0].style.display="none";
    gClass('google-map-container')[0].style.display="none";
    gClass('products-main')[0].style.display="none";
    document.getElementById('basket-container').style.display="none";
    document.getElementById('products-cart-target').style.display="none";
    document.getElementById('checkout-main-container').setAttribute('style','');
    
}
function closeCheckout(){
    gClass('emporyoum-bar')[0].style.display="";
    gClass('google-map-container')[0].style.display="";
    gClass('products-main')[0].style.display="";
    document.getElementById('products-cart-target').style.display="";
    document.getElementById('basket-container').style.display="";
    document.getElementById('checkout-main-container').setAttribute('style','display:none');
    defaultPage();    closeCart();
}