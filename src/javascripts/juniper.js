(function() {
		var img = document.getElementById('logo-image').firstChild;
		img.onload = function() {
		    if(img.height > img.width) {
		        img.height = 'auto';
		        img.width = '50%';
		    }
		};
	  }());

	  $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
   	  });

	  var jPM = $.jPanelMenu({
		    menu: '#menu',
		    trigger: '.menu-trigger',
		    duration: 300
		});
	  jPM.on();

	  $(document).ready(function(){
	    $(".video").fitVids();
		
		$('#barley_search').on('submit',function(e){
			e.preventDefault();
			var search_term = $('#barley_search_term').val();
			window.location.href = 'http://' + location.hostname + '/search/' + barley.urlEncode(search_term);
		});

	    if($('.focus').length > 2){ $('.focus-index').show(); }
	    if($('.focus').length < 1){ $('.focus-container').hide(); }
	    if($('.blurb').length > 1){ $('.blurb-index').show(); }
	    if($('.blurb').length < 1){ $('.blurb-container').hide(); }
	    if($('.blog-post').length > 2){ $('.blog-index').show(); }
	    if($('.blog-post').length < 1){ $('.blog-container').hide(); }
	    if($('.gallery-piece').length < 1){ $('.image-gallery').hide(); }

	    $("#home-content section:visible:odd").addClass("even");
	    $("#home-content section:visible:last").addClass("last");

	    if(!Modernizr.svg) {
		    $('img[src*="svg"]').attr('src', function() {
		        return $(this).attr('src').replace('.svg', '.png');
		    });
		}

	  });

	  var $clonesocial = $('#social').clone();
	  $("#jPanelMenu-menu").append($clonesocial);

	  var $clonebackground = $('#bg-image').clone();
	  $("#placeholder").append($clonebackground);