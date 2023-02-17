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
				<CartWidget />
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
import CartWidget from './CartWidget.vue';

</script>

<style scoped>
</style>