   $.fn.rating = function(options) {
         if(options=="refresh"){
            $(this).removeAttr('data-selected');
            var defaultcolor = $(this).find('svg').attr('data-defaultfill');
            $(this).find('svg').attr('data-selected',"false").attr('fill',defaultcolor);  
         }
         else if(options=="val"){
            var a = parseInt($(this).attr('data-selected'))+1;
            return a;
         }
         else if(options=="disable"){

           $(this).find('svg').attr('data-selected',"disabled").css('opacity','0.5');  
         }
         else{
         var opts = jQuery.extend({}, jQuery.fn.rating.defaults, options);
        
         var counts = opts.count;
         var size = opts.size+'px';
         for(i=0; i<opts.count; i++){
            $(this).append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="simple-rater" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="'+size+'" height="'+size+'" fill="'+opts.primaryColor+'" data-id="'+i+'" data-defaultfill="'+opts.primaryColor+'" data-hoverfill="'+opts.hoverColor+'" data-selected="false"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg>');
            $(this).addClass('raters');
         }
      }
      }
 jQuery.fn.rating.defaults = {
         size:20,
         primaryColor:"#999",
         hoverColor:"#fdb300",
         count:5
    };

$(document).on('mouseover','.simple-rater',function(){
      var raterstate = $(this).attr('data-selected');
      if(raterstate != "disabled"){
         var fillcolor = $(this).attr('data-defaultfill');
         var hoverfill = $(this).attr('data-hoverfill');
         var a = $(this).attr('data-id');
      $(this).parents('.raters').find('svg').attr('fill',fillcolor);
   for(i=0;i<=a;i++){
     $(this).parents('.raters').find('svg[data-id='+i+']').attr('fill',hoverfill);
   }
 }
})


$(document).on('mouseout','.simple-rater',function(){
   var raterstate = $(this).attr('data-selected');
      if(raterstate != "disabled"){
         var fillcolor = $(this).attr('data-defaultfill');
         var hoverfill = $(this).attr('data-hoverfill');
          var a = $(this).attr('data-id');      
   for(i=0;i<=a;i++){
    
     $(this).parents('.raters').find('svg[data-id='+i+']').attr('fill',fillcolor);
      
   }
 }
})

$(document).on('click','.simple-rater',function(){
   var raterstate = $(this).attr('data-selected');
      if(raterstate != "disabled"){
   var a = $(this).attr('data-id');
   var fillcolor = $(this).attr('data-defaultfill');
   var hoverfill = $(this).attr('data-hoverfill');
   $(this).parents('.raters').find('svg').attr('data-selected','false');
   for(i=0;i<=a;i++){
     $(this).parents('.raters').find('svg[data-id='+i+']').attr('fill',hoverfill);
     $(this).parents('.raters').find('svg[data-id='+i+']').attr('data-selected','true');
   }
    $(this).parents('.raters').attr('data-selected',a);
  }
})

$(document).on('mouseout','.raters',function(){
   var raterstate = $(this).find('svg').attr('data-selected');
      if(raterstate != "disabled"){
   var fillcolor = $(this).find('svg').attr('data-defaultfill');
   var hoverfill = $(this).find('svg').attr('data-hoverfill');
  $(this).find('svg').each(function(){
         var a = $(this).attr('data-selected');
         if(a=="true"){
               $(this).attr('fill',hoverfill);
         }
         else{
            $(this).attr('fill',fillcolor);
         }
  })
}
})