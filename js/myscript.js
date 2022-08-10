$(document).ready(function(){
//adding active class for the first myslides 

	var firstchild=$('.mySlides').first();
	$(firstchild).addClass('active');
// adding active class for the first dot

	var slideLength=$('.slideshow').children();
	for(i=1;i<=slideLength.length;i++){
		// console.log(slideLength);
		var newele=$('#create');
		// var create=`<span data-id=${i} class="dotbutton"></span>`;
		var create=document.createElement('span');
		$(create).attr({'data-id':i,'class':'dotbutton'});
		if(i==1){
			$(create).attr({'data-id':i,'class':'dotbutton active'});
		}
		newele.append(create);
	}

	$('.dotbutton').click(function(){
	var dot=$(this).attr('data-id');
	
	val='.mySlides:nth-child('+dot+')';
	$('.mySlides').removeClass('active');
	$(val).addClass('active');
	var click='.dotbutton:nth-child('+dot+')';
	$('.dotbutton').removeClass('active');
	$(click).addClass('active');
	});

	$('.next').click(function(){
		var firstchild=$('.mySlides').first();
		var nxtEle=$('.mySlides.active').next('.mySlides');

		var dotclass=$('.dotbutton').first();
		var nxtdotEle=$('.dotbutton.active').next('.dotbutton');
		$('.mySlides.active').removeClass('active');
		$('.dotbutton.active').removeClass('active');
		if(nxtEle.length > 0){
			nxtEle.addClass('active');
			nxtdotEle.addClass('active');
		}else{
			firstchild.addClass('active');
			dotclass.addClass('active');
		}
	});
	
	$('.prev').click(function(){
		var lastchild=$('.mySlides').last();
		var prevEle=$('.mySlides.active').prev('.mySlides');
		// console.log(nxtEle);

		var dotclass=$('.dotbutton').last();
		var prevdotEle=$('.dotbutton.active').prev('.dotbutton');
		$('.mySlides.active').removeClass('active');
		$('.dotbutton.active').removeClass('active');

		if(prevEle.length > 0){
			prevEle.addClass('active');
			prevdotEle.addClass('active');
		}else{
			lastchild.addClass('active');
			dotclass.addClass('active');
		}
	});

	// var imgcount=4;
	// $('.next').click(function(){
	// 	var currentimg=parseInt($('#image').attr("data"));
	// 	// console.log(typeof currentimg);
	// 	var nxtimg=currentimg+1;
	// 	if(nxtimg==imgcount){
	// 		nxtimg=1;
	// 	}
	// 	var src="img/slide-"+currentimg+".jpg";
	// 	// console.log(src)
	// 	$('#image').attr('src',src);
	// 	$('#image').attr('data',nxtimg);
	// });

	// $('.prev').click(function(){
	// 	var currentimg=parseInt($('#image').attr("data"));
	// 	var nxtimg=currentimg-1;
	// 	if(nxtimg<1){
	// 		nxtimg=3;
	// 	}
	// 	// console.log(typeof currentimg);
	// 	var src="img/slide-"+currentimg+".jpg";
	// 	// console.log(src)
	// 	$('#image').attr('src',src);
	// 	$('#image').attr('data',nxtimg);
	// });


});



