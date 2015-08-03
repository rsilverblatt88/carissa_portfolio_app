var index = {}

index.lightbox = function(){
  var image_href
          // lightbox feature
          $(document).on("click", ".lightbox_trigger", function(e){
            // prevent default action (open the URL)
            e.preventDefault();
            // save the images href to a variable
            image_href = $(this).attr("src");
            // if the lightbox already exists, add in the href we grabbed from the link
            if ($('#lightbox').length > 0 ){
              $('#content').html('<img src = "' + image_href + '" />');
              $('#lightbox').show();
            }
            // if the lightbox does NOT exist, create the lightbox and enter in the image
            else {
              var lightbox =
                '<div id = "lightbox">' +
                  '</br>' +
                  '<div id = "content">' +
                    '<img src = " ' + image_href + ' " >' +
                  '</div>' +
                '</div>';
              $('body').append(lightbox)

          //  click anywhere on the page to close the lightbox
              $('#lightbox').click(function(){
                $('#lightbox').hide();
              });
            }
          })
}

          // Scroll function for links
      index.scroll = function(){
        $('#nav').localScroll({duration: 1000});
      }



          // Change Nav bar to fixed after scroll position is greater than window size
          // index.navbar = function(){

          //   $(document).on("scroll", function(e){
          //     e.stopPropagation();
          //     if ($(window).scrollTop() > $(window).height()){
          //       $('nav').css({'position' : 'fixed', 'z-index' : '10', 'background' : 'rgba(63, 171, 206, 0.73)' });
          //     } else if ($(window).scrollTop() < $(window).height()){
          //       $('nav').css({'position' : '', 'z-index' : '', 'background' : '' });
          //     }
          //   })
          // }

