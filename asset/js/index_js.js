$(function(){
let arr=['asset/images/index_images/pizza3.png',
'asset/images/index_images/pizza2_07cc9484943cf52a78273ee2a527ccb3.png',
'asset/images/index_images/pizza1.png'];
	$('#slide_left').on('click',function(){
		console.log('asdasda');
		if ($(
			'#slide_img').attr('src')===arr[1]) {
		$('#slide_img').attr('src',`${arr[0]}`);
		}
		else if ($('#slide_img').attr('src')==arr[0]) {
			$('#slide_img').attr('src',`${arr[2]}`);
		}
		else{
				$('#slide_img').attr('src',`${arr[1]}`);
		}
	})
	$('#slide_right').on('click',function(){
		console.log('asdasda');
		if ($(
			'#slide_img').attr('src')===arr[1]) {
		$('#slide_img').attr('src',`${arr[2]}`);
		}
		else if ($('#slide_img').attr('src')==arr[0]) {
			$('#slide_img').attr('src',`${arr[1]}`);
		}
		else{
				$('#slide_img').attr('src',`${arr[0]}`);
		}
	})
	setInterval(()=>{
		if ($(
			'#slide_img').attr('src')===arr[1]) {
		$('#slide_img').attr('src',`${arr[2]}`);
		}
		else if ($('#slide_img').attr('src')==arr[0]) {
			$('#slide_img').attr('src',`${arr[1]}`);
		}
		else{
				$('#slide_img').attr('src',`${arr[0]}`);
		}
	},2000);
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
		
		}
	})
	
})