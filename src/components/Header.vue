<template>
	<header>
		<nav>
			|||
		</nav>
		<img src="../assets/logo.svg" alt="site logo" class="logo">
		<div class="cart-nav">
			P F C
			<!-- icons for,
			profile, favorites, cart -->
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

.logo {
	width: 40px;
	height: 40px;
}

</style>