$(function(){
	$('.search').click(function(){
		let search_val=($('.search_val')).val();
		$('.search_val').val('');
		if(search_val.includes('pizza')){
			$.ajax({	
				url:'..//controllers/search_controller.php',
				method:'post',
				dataType:'json',
				data:{
					action:'pizza',
					}
				})
		}
		if(search_val.includes('wok')){
			$.ajax({	
				url:'..//controllers/search_controller.php',
				method:'post',
				dataType:'json',
				data:{
					action:'wok',
					}
				})
		}
		if(search_val.includes('drink')){
			$.ajax({	
				url:'..//controllers/search_controller.php',
				method:'post',
				dataType:'json',
				data:{
					action:'drink',
					}
				})
		}
		if(search_val.includes('sauces')){
			$.ajax({	
				url:'..//controllers/search_controller.php',
				method:'post',
				dataType:'json',
				data:{
					action:'sauces',
					}
				})
		}
		})
})