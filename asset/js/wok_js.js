$(function(){
	$('#wok_with_beef').click(()=>{
		let img_address='<img src="../asset/images/index_images/large_item_3183489_1.jpg">';
			let name='Wok with beef';
			let size=0;
			let price=200;
			$.ajax({	
				url:'....//controllers/wok_controller.php',
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
	$('#wok_with_salmon').click(()=>{
		let img_address='<img src="../asset/images/index_images/large_острый-лосось.jpg">';
			let name='Wok with salmon';
			let size=0;
			let price=350;
			$.ajax({	
				url:'....//controllers/wok_controller.php',
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
		$('#wok_with_chicken').click(()=>{
		let img_address='<img src="../asset/images/index_images/large_item_3183489_1.jpg">';
			let name='Wok with chicken';
			let size=0;
			let price=270;
			$.ajax({	
				url:'....//controllers/wok_controller.php',
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
			$('#wok_with_mushrooms').click(()=>{
		let img_address='<img src="../asset/images/index_images/large_103_1_big.png">';
			let name='Wok with mushrooms';
			let size=0;
			let price=200;
			$.ajax({	
				url:'....//controllers/wok_controller.php',
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