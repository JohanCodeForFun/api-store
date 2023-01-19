<template>
	<div class="product-list">
		<!-- <p>Ordered by {{ order }}</p> -->
		<transition-group name="list" tag="ul">
			<li v-for="product in products" :key="product.id">
				<p>{{ product.title }}</p>
				<img class="img product" :src="product.image" :alt="product.title">
			</li>
		</transition-group>
		HERE
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	props: {
		products: {
			type: Array
		}
	}
})
</script>

<style scoped>
img {
	width: 200px;
	height: 300px;
}
</style>