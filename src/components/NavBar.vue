<template>
	<header>
		<nav class="py-2 bg-light border-bottom">
			<div class="container d-flex flex-wrap">
				<ul class="nav me-auto">
					<a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
						<img src="../assets/logo.svg" alt="site logo" class="nav-logo" width="42" height="42">
					</a>
					<li class="nav-item"><a href="#" class="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
					<li class="nav-item"><a href="#" class="nav-link link-dark px-2">About</a></li>
				</ul>
				<ul class="nav">
					<li class="nav-item"><a href="#" class="nav-link link-dark px-2"><del>Login</del></a></li>
					<!-- move this code and modal to CartWidget.vue -->
					<!-- Button trigger modal -->
					<button type="button" class="btn btn-primary nav-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
						Cart ({{ cartStore.count }})
					</button>
				</ul>
			</div>
		</nav>
		<header class="py-3 mb-1 border-bottom">
			<div class="container d-flex flex-wrap justify-content-center">
				<div class="row">
					<div class="col input-group mb-3">
						<input type="search" class="form-control" placeholder="Search..." aria-label="Search">
						<span class="input-group-text btn btn-success" id="searchInput">Search</span>
					</div>
					<!-- <h3>Note to self: </h3>
					<p>// While input is null, show hero message</p>
					<p>// When user types in search, hide hero message and show dynamic search result</p> -->

					<!-- why do I need this for the width of above searchbar? -->
					<!-- <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
					<button class="btn btn-success">Search</button> -->
					<!-- </form> -->
					<!-- </div> -->
				</div>
			</div>
		</header>
	</header>

	<!-- Modal -->
	<!-- add to CartWdiget.vue -->
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Products in cart</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<!-- modal body -->
					<div class="container">
						<div class="row">
							<div class="col">
								<!-- modal content -->
								<div v-if="!cartStore.isEmpty">
									<ul class="list-group">
										<CartItem v-for="(items, title) in cartStore.grouped" :key="title" :product="items[0]" :count="items.length"/>
									</ul>
								</div>
								<div v-else>
									<p>Cart is empty.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="cartStore.$reset()">Clear Cart</button>
					<button type="button" class="btn btn-success">Checkout</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/CartStore';
import CartItem from './CartItem.vue';
const cartStore = useCartStore();

</script>

<style scoped>
.bd-placeholder-img {
	font-size: 1.125rem;
	text-anchor: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}

@media (min-width: 768px) {
	.bd-placeholder-img-lg {
		font-size: 3.5rem;
	}
}

.bi {
	vertical-align: -.125em;
	fill: currentColor;
}

.nav-scroller {
	position: relative;
	z-index: 2;
	height: 2.75rem;
	overflow-y: hidden;
}

.nav-scroller .nav {
	display: flex;
	flex-wrap: nowrap;
	padding-bottom: 1rem;
	margin-top: -1px;
	overflow-x: auto;
	text-align: center;
	white-space: nowrap;
	-webkit-overflow-scrolling: touch;
}

/* header {
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
} */

/* .nav-menu,
.nav-cart {
	height: 42px;
	width: 100%;
	display: flex;
	gap: 1.6rem;
	align-items: center;
	justify-content: space-between;
}

.nav-logo {
	flex: 1;
	width: 40px;
	height: 40px;
}
.nav-filler {
	flex: 1;
	width: 100%;
}

.search-bar {
	width: 100%;
} */
</style>