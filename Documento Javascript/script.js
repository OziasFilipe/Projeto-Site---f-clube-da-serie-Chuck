document.onscroll = function() {

 let botao = document.getElementById("btnTop");

if (document.documentElement.scrollTop > 50){

botao.style.display = "block";

}
else {
  botao.style.display = "none";
}
 

 
}
   
    function botaoTopSub () { 

     let botao = document.getElementById("btnTop");

    document.documentElement.scrollTop = 0;
     

    }





    // optional
		$('#blogCarousel').carousel({
				interval: 5000
		});


