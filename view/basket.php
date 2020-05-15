<?php session_start();
require_once("..//models/basket_model.php");
?>
<!DOCTYPE html>
<html>
<head>
	<title>PizzaWok</title>
	<meta charset="utf-8">
	<link rel="icon"  href="../asset/images/index_images/download1.jpg">
	<link rel="stylesheet" type="text/css" href="../asset/css/basket_css.css">
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script type="text/javascript" src="../asset/js/basket_js.js"></script>
	<script src="https://kit.fontawesome.com/79955454f8.js" crossorigin="anonymous"></script>
</head>
<body>
	<header>
		<div>
			<p>+37477777217</p>
			<p>pizza@mail.ru</p>
		</div>
		<div>
			<a href="../index.php"><h1 style="color: black">PizzaWok</h1></a>
			<h3>Taste the wonderful dishes</h3>
		</div>
		<div>
			<div>
				<a href="../view/search.php">
					<i class="fas fa-search"></i>
				</a>
			</div>
			<div>
				<a href="../view/customers_office.php">
					<i class="fas fa-user-alt"></i>
				</a>
			</div>
			<div>
				<a href="../view/basket.php">
					<i class="fas fa-shopping-cart"></i>
				</a>
			</div>
		</div>
	</header>
	<nav>
		<ul>
			<li>
				<a href="../view/pizza.php">PIZZA</a>
			</li>
			<li>
				<a href="../view/wok.php">WOK</a>
			</li>
			<li>
				<a href="../view/drinks.php">DRINKS</a>
			</li>
			<li>
				<a href="../view/sauces.php">SAUCES</a>
			</li>
		</ul>
	</nav>
	<main>
		<?php $all = basket() ?>
		<?php for ($i=0; $i <count($all) ; $i++):?>
				<div style="display: flex; flex-wrap: row nowrap;justify-content: space-around;background-color: orange;font-size: 25px;" class="product" >
					<div style="background-color: orange;padding-top: 25px;width: 12%" class="id"
					class="on">
						<?= $all[$i][0] ?>
					</div>
					<div style="background-color: orange;padding-top: 15px;width: 12%" >
						<?= $all[$i][1] ?>
					</div>
					<div style="background-color: orange;padding-top: 25px;width: 12%">
						<?= $all[$i][2] ?>
					</div>
					<div style="background-color: orange;padding-top: 25px;width: 12%">
						<?= $all[$i][3] ?>sm
					</div>
					<div style="background-color: orange;padding-top: 25px;width: 12%">
						<?= $all[$i][4] ?>rub
					</div>
					<div style='padding-top: 20px;width: 12%'>		
						<button class="delete" style="border:none;background-color: red;padding: 10px;border-radius: 5px;">delete</button>
					</div>
				</div>
		<?php endfor ?>
		<div style="width: 100%; background-color: orange;text-align: center;font-size: 25px;" class="total">
			Total:
				<?php
			if (isset($_SESSION['total'])) {
					echo $_SESSION['total'];
						session_unset();
				}
			?>rub
		</div>
		<div>
			<button class="order"  style="border:none;background-color: green;padding: 10px;border-radius: 5px;width: 100%;"> 
				Order
			</button>
		</div>
	</main>
	<footer>
		<div>
			<div>
				<p>+37477777217</p>
				<p>pizza@mail.ru</p>
			</div>		
		</div>
		<div>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>
		<div>
			<div>
				<a href="https://www.facebook.com/">
					<i class="fab fa-facebook-f"></i>
				</a>
			</div>
			<div>
				<a href="https://twitter.com/explore">
					<i class="fab fa-twitter-square"></i>
				</a>
			</div>
			<div>
				<a href="https://www.linkedin.com/">
					<i class="fab fa-linkedin"></i>
				</a>
			</div>
		</div>
	</footer>
</body>
</html>