(function(){
      $('#services-list > li > a').click(function(){
        $('#services-list > li > a').css('color','blue')
        $(this).css('color','red');
        const tabname = $(this).attr("href");
        
        $('#services-display > div:visible').fadeOut(200,function(){
          $(tabname).fadeIn(200);
        })

      });
}());