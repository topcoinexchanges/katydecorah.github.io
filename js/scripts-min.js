function flickr(){var e="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras="+size;$.getJSON(e,function(e){$.each(e.photoset.photo,function(t,n){var r=e.photoset.photo.length-which;if(t===r){var i=n[size];$("body").css("background-image","url("+i+")");$(".title").html("<a href='http://www.flickr.com/photos/91218249@N05/sets/72157633859537779/'> "+n.title+"</a>")}which===1&&$(".next").hide();which>1&&$(".next").show();which===e.photoset.photo.length?$(".prev").hide():$(".prev").show()})})}var small="url_n",medium="url_z",large="url_o",size=medium,which=1;$(window).width()<400?size=small:$(window).width()>800?size=large:size=medium;flickr();$(".prev").click(function(){which+=1;flickr()});$(".next").click(function(){which-=1;flickr()});