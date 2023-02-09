<template>
	<header>
		<div class="nav-cart">
			<img src="../assets/logo.svg" alt="site logo" class="nav-logo">
			<div class="nav-filler"></div>

			<!-- fontawesome icons for navbar -->
			<i class="fa-regular fa-user fa-2xl"></i>
			<i class="fa-regular fa-heart fa-2xl"></i>
			<i class="fa-solid fa-bag-shopping fa-2xl"></i>
		</div>
		<nav class="nav-menu">
			<i class="fa-solid fa-bars fa-2xl"></i>
			<input class="search-bar" type="text" value="" placeholder="Search product">
			<i class="fa-solid fa-magnifying-glass fa-2xl"></i>

		</nav>
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
	flex-direction: column;
}

.nav-menu,
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
}

</style>