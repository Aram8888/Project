$(function(){
	$('#drinks').on('click',()=>{
	if ($('#drinks').html().trim()=='Variants') {
		$('#drinks_parent').append(`	<section style="width: 260px; position: absolute;bottom: 100px;background-color: white;opacity: 0.9">
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
		$('#drinks').html('Buy');
		}
	if ($('#drinks').html().trim()=='Buy') {
				$('#French').on('click',()=>{
			let radio10=$('#a10');
			let radio11=$('#a11');
			let radio12=$('#a12');
		if (radio10.prop("checked")) {
			let img_address='<img src="../asset/images/index_images/large_8a8277fab24557114baf4b32704eb9d4_1_.jpg">';
			let name='Coca-cola';
			let size=25;
			let price=500;
			$.ajax({	
				url:'....//controllers/drinks_controller.php',
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
			let img_address='<img src="../asset/images/index_images/large_8a8277fab24557114baf4b32704eb9d4_1_.jpg">';
			let name='Coca-cola';
			let size=30;
			let price=550;
			$.ajax({	
				url:'....//controllers/drinks_controller.php',
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
			let img_address='<img src="../asset/images/index_images/large_8a8277fab24557114baf4b32704eb9d4_1_.jpg">';
			let name='Coca-cola';
			let size=35;
			let price=600;
			$.ajax({	
				url:'....//controllers/drinks_controller.php',
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