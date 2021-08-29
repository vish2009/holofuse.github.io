(function(){
      $('#services-list > li > a').click(function(){
        const tabname = $(this).attr("href");
        
        $('#services-display > div:visible').fadeOut(200,function(){
          $(tabname).fadeIn(200);
        })
      });
}());