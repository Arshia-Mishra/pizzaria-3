menu_list_array = [
    "Veg Margherita Pizza",
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"];
    
   /* function add_pizza(){
      var htmldata;
      var item=document.getElementById("addedmenu").value
      menu_list_array.sort();
      
      htmldata="<section class='cards'>"
       for(var i=0;i<menu_list_array.length;i++){
         htmldata=htmldata+'<div class="card">'
         + menu_list_array[i] + '</div>'}
    
    htmldata=htmldata+"</section>"
    document.getElementById("addedmenu").innerHTML = htmldata;
    }*/
    
      
    function add_pizza( ) {
      var htmldata;
      htmldata="<ol class='menulist'>"
      menu_list_array.sort( );
      for(var i=0;i<menu_list_array.length;i++){
      htmldata=htmldata+'<li>'+menu_list_array[i]+'</li><br>'
    }
    htmldata=htmldata+'</ol>' 
      var item=document.getElementById("pizza_menu").innerHTML=htmldata;
    } 
      
    function add_top(){
    var item=document.getElementById("addedmenu").value;
        menu_list_array.push(item);
        add_pizza();
      }