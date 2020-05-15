$(function(){
	$('#sauces').click(()=>{
		let img_address='<img src="../asset/images/index_images/large_sousy_heinz_v_assortimente_1_.png">';
			let name='Sauces';
			let size=0;
			let price=25;
			$.ajax({	
				url:'....//controllers/sauces_controller.php',
				method:'post',
				dataType:'json',
				data:{
					action:'add',
					img_address:img_address,
					name:name,
					size:size,
					price:price
					}
				})
	})
})