$(function(){
	$('#Italiano').on('click',()=>{
	if ($('#Italiano').html().trim()=='Variants') {
		$('#Italiano_parent').append(`	<section style="width: 260px; position: absolute;bottom: 100px;background-color: white;opacity: 0.9">
		<div style="display: flex;flex-wrap: row nowrap; 
			justify-content: space-between;width: 100%;">
			<div>
				<label>
					<input type="radio" name="a">25sm
				</label>
			</div>
			<div style="color: red">
				500.00rub
			</div>
		</div>
		<div style="display: flex;flex-wrap: row nowrap;
	justify-content: space-between;width: 100%;">
			<div>
				<label>
					<input type="radio" name="a">30sm
				</label>
			</div>
			<div style="color: red">
				550.00rub
			</div>
		</div>
		<div style="display: flex;flex-wrap: row nowrap;
	justify-content: space-between;width: 100%;	">
			<div>
				<label>
					<input type="radio" name="a">35sm
				</label>
			</div>
			<div style="color: red">
				600.00rub
			</div>
		</div>
	</section>
			`);
		$('#Italiano').html('Buy');
		}
	if ($('#Italiano').html().trim()=='Buy') {
			$('#Italiano').on('click',()=>{
			let radio1=$('#a1');
			let radio2=$('#a2');
			let radio3=$('#a3');
			console.log(radio1.prop('checked'));
		if (radio1.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_893-original-1520x1015-1_1.png">';
			let name='Pizza Italiano';
			let size=25;
			let price=500;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
	else if (radio2.prop("checked")) {
			let img_addres='<img src="../asset/images/index_images/large_893-original-1520x1015-1_1.png">';
			let name='Pizza Italiano';
			let size=30;
			let price=550;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
		else if (radio3.prop("checked")) {
			let img_addres='<img src="../asset/images/index_images/large_893-original-1520x1015-1_1.png">';
			let name='Pizza Italiano';
			let size=35;
			let price=600;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
		})
		}
	})
	$('#Sausage').on('click',()=>{
	if ($('#Sausage').html().trim()=='Variants') {
		$('#Sausage_parent').append(`	<section style="width:260px; position: absolute;bottom: 100px;background-color: white;opacity: 0.9">
		<div style="display: flex;flex-wrap: row nowrap; 
			justify-content: space-between;width: 100%;">
			<div>
				<label>
					<input type="radio" name="a">25sm
				</label>
			</div>
			<div style="color: red">
				600.00rub
			</div>
		</div>
		<div style="display: flex;flex-wrap: row nowrap;
	justify-content: space-between;width: 100%;">
			<div>
				<label>
					<input type="radio" name="a">30sm
				</label>
			</div>
			<div style="color: red">
				700.00rub
			</div>
		</div>
		<div style="display: flex;flex-wrap: row nowrap;
	justify-content: space-between;width: 100%;	">
			<div>
				<label>
					<input type="radio" name="a">35sm
				</label>
			</div>
			<div style="color: red">
				650.00rub
			</div>
		</div>
	</section>
			`);
		$('#Sausage').html('Buy');
		}
	if ($('#Sausage').html().trim()=='Buy') {
			$('#Sausage').on('click',()=>{
			let radio4=$('#a4');
			let radio5=$('#a5');
			let radio6=$('#a6');
		if (radio4.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_image.png">';
			let name='Pizza Sausage';
			let size=25;
			let price=600;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
	else if (radio5.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_image.png">';
			let name='Pizza Sausage';
			let size=30;
			let price=700;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
		else if (radio6.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_image.png">';
			let name='Pizza Sausage';
			let size=35;
			let price=650;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
			})
		}
	})
	$('#Assorted').on('click',()=>{
	if ($('#Assorted').html().trim()=='Variants') {
		$('#Assorted_parent').append(`	<section style="width: 260px; position: absolute;bottom: 100px;background-color: white;opacity: 0.9">
		<div style="display: flex;flex-wrap: row nowrap; 
			justify-content: space-between;width: 100%;">
			<div>
				<label>
					<input type="radio" name="a">25sm
				</label>
			</div>
			<div style="color: red">
				750.00rub
			</div>
		</div>
		<div style="display: flex;flex-wrap: row nowrap;
	justify-content: space-between;width: 100%;">
			<div>
				<label>
					<input type="radio" name="a">30sm
				</label>
			</div>
			<div style="color: red">
				800.00rub
			</div>
		</div>
		<div style="display: flex;flex-wrap: row nowrap;
	justify-content: space-between;width: 100%;	">
			<div>
				<label>
					<input type="radio" name="a">35sm
				</label>
			</div>
			<div style="color: red">
				850.00rub
			</div>
		</div>
	</section>
			`);
		$('#Assorted').html('Buy');
		}
	if ($('#Assorted').html().trim()=='Buy') {
			$('#Assorted').on('click',()=>{
			let radio7=$('#a7');
			let radio8=$('#a8');
			let radio9=$('#a9');
		if (radio7.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_90d15f22dc95822302e6af16108ef45a_gallerySiteSize.png">';
			let name='Pizza Assorted';
			let size=25;
			let price=750;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
	else if (radio8.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_90d15f22dc95822302e6af16108ef45a_gallerySiteSize.png">';
			let name='Pizza Assorted';
			let size=30;
			let price=800;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
		else if (radio9.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_90d15f22dc95822302e6af16108ef45a_gallerySiteSize.png">';
			let name='Pizza Assorted';
			let size=35;
			let price=850;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
			})
		}
	})
	$('#French').on('click',()=>{
	if ($('#French').html().trim()=='Variants') {
		$('#French_parent').append(`	<section style="width:260px; position: absolute;bottom: 100px;background-color: white;opacity: 0.9">
		<div style="display: flex;flex-wrap: row nowrap; 
			justify-content: space-between;width: 100%;">
			<div>
				<label>
					<input type="radio" name="a">25sm
				</label>
			</div>
			<div style="color: red">
				600.00rub
			</div>
		</div>
		<div style="display: flex;flex-wrap: row nowrap;
	justify-content: space-between;width: 100%;">
			<div>
				<label>
					<input type="radio" name="a">30sm
				</label>
			</div>
			<div style="color: red">
				700.00rub
			</div>
		</div>
		<div style="display: flex;flex-wrap: row nowrap;
	justify-content: space-between;width: 100%;	">
			<div>
				<label>
					<input type="radio" name="a">35sm
				</label>
			</div>
			<div style="color: red">
				650.00rub
			</div>
		</div>
	</section>
			`);
		$('#French').html('Buy');
		}
	if ($('#French').html().trim()=='Buy') {
			$('#French').on('click',()=>{
			let radio10=$('#a10');
			let radio11=$('#a11');
			let radio12=$('#a12');
		if (radio10.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_7b0d75cef12148762c9ab3b9865da2c3_100531941.png">';
			let name='Pizza French';
			let size=25;
			let price=600;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
	else if (radio11.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_7b0d75cef12148762c9ab3b9865da2c3_100531941.png">';
			let name='Pizza French';
			let size=30;
			let price=700;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
		else if (radio12.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_7b0d75cef12148762c9ab3b9865da2c3_100531941.png">';
			let name='Pizza French';
			let size=35;
			let price=650;
			$.ajax({	
				url:'....//controllers/pizza_controller.php',
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
		}
			})
		}
	})
	
})