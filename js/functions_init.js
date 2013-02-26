$(document).ready(function(){
	
	/*afegim la capa obscura*/
	$('<div></div>', {
		'class': 'bg_gris',
	}).prependTo('#page');

	


	/*menu idiomes*/

	$('#idiomes').addClass('js');
	$('#idiomes li.selected').find('a').clone().prependTo('#page').addClass('langhide');
	$('.langhide').click(function(){
		$(this).addClass('active');
		$('#main-nav').css({'z-index':'0'});
		
		
		$('#idiomes').toggleClass('open').promise().done(function(){
			$('.bg_gris').toggleClass('active');
		});
		

	});
	


	/*menu navegacio*/

	$('#main-nav h1').addClass('mobil');
	$('h1.mobil').click(function(){
		$('#main-nav').css({'z-index':'20'})
		$(this).next('ul').toggleClass('open');
		$(this).toggleClass('open').promise().done(function(){
    				$('.bg_gris').toggleClass('active');
			});

	});
	
	/*desabilitar el fons gris*/
	$('.bg_gris').click(function(){
		$(this).toggleClass('active');
		$('h1.mobil').next('ul').removeClass('open');
		$('h1.mobil').removeClass('open');
		$('#idiomes') .removeClass('open');
		$('.langhide').removeClass('active');
	});


	

	/*MÉS INFO*/


	$('#info').addClass('hide');
	$('<div>',{
		id :'infomobil'
	}).appendTo('#sidebar');

	$('#info > ul').clone().prependTo('#infomobil');

	$('<a>',{
		id:'info-link',
		text: ' '
	}).insertBefore('#infomobil');
	
	$('#infomobil').hide();

	$('#info-link').click(function(){
		$('#infomobil').slideToggle();
	})
	
	/*ifarem transparente*/
	$('iframe').each(function(){
        var url = $(this).attr("src");
        $(this).attr("src",url+"?wmode=transparent");
    });
		
})


