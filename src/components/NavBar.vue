<template>
	<header>
		<nav class="py-2 bg-light border-bottom">
			<div class="container d-flex flex-wrap">
				<ul class="nav me-auto">
					<router-link to="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
						<img src="../assets/logo.svg" alt="site logo" class="navbar-brand nav-logo" width="42" height="42">
					</router-link>
					<li class="nav-item"><router-link to="/" class="nav-link link-dark px-2 active" aria-current="page">Home</router-link></li>
					<li class="nav-item"><router-link to="/about" class="nav-link link-dark px-2">About</router-link></li>
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
body { padding-top: 70px; }
</style>