<?php 
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>PizzaWok</title>
	<meta charset="utf-8">
	<link rel="icon"  href="../asset/images/index_images/download1.jpg">
	<link rel="stylesheet" type="text/css" href="../asset/css/sign_in_css.css">
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script type="text/javascript" src="../asset/js/sign_js.js"></script>
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
		<h1>Sign in</h1>
		<form action="..//controllers/sign_in_controller.php" method="post">
			<div>
				<h3>Email</h3>
				<input type="text" name="email" required>
			</div>
			<div>
				<h3>Password</h3>
				<input type="Password" name="pas" required="">
			</div>
			<div>
				<h3>Confirm password</h3>
				<input type="Password" name="confirm_pas" required>
			</div>
				<button name="action" value="add">Sign in</button>
		</form>		
		<div class="error">
			<?php 
			if (isset($_SESSION['error'])) {
						echo $_SESSION['error'];
						session_unset();
					}
			?>
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