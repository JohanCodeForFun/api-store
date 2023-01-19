<template>
	<header>
		<nav class="nav-menu">
			<i class="fa-solid fa-bars fa-2xl"></i>
			<img src="../assets/logo.svg" alt="site logo" class="logo">
		</nav>
		<div class="nav-cart">
			<i class="fa-regular fa-user fa-2xl"></i>
			<i class="fa-solid fa-magnifying-glass fa-2xl"></i>
			<i class="fa-regular fa-heart fa-2xl"></i>
			<i class="fa-solid fa-bag-shopping fa-2xl"></i>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Header'
})

</script>

<style scoped>
header {
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.nav-menu,
.nav-cart,
.nav-logo {
	display: flex;
	gap: 1.6rem;
	align-items: center;
	justify-content: space-between;
}

.logo {
	width: 40px;
	height: 40px;
}

</style>