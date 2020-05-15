$(function(){
		if($('.id').hasClass('on')){
		$('.order').css('display','block');
		$('.total').css('display','block');
		}
	$('.delete').click(function(){	
		if (confirm('Want to delete?')) {
			let catid_delete=$('.id').html().trim();
			console.log(catid_delete);
		$.ajax({
			url:'..//controllers/basket_controller.php',
			method:'post',
			dataType:'json',
			data:{
				action:'delete',
				catid_delete:catid_delete,
			}
			})
			$(this).parents('tr').remove();
		}
	})
	$('.order').click(function(){	
		if (confirm('Order?')) {
		$.ajax({
			url:'..//controllers/basket_controller.php',
			method:'post',
			dataType:'json',
			data:{
				action:'order',
			}
			})
		$('.order').css('display','none');
		$('.total').css('display','none');
			$('.product').remove();
			$('.total').remove();
		}
	})
})