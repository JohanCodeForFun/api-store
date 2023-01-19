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
import { computed, defineComponent, PropType } from 'vue';
import Product from '../types/Product'
import OrderTermProducts from '../types/OrderTermProducts';

export default defineComponent({
	props: {
		products: {
			type: Array as PropType<Product[]>
		},
		order: {
			required: true,
			type: String as PropType<OrderTermProducts>
		},
		// setup(props) {
		// 	const orderedProducts = computed(() => {
		// 		return [...props.products].sort((a: Product, b:Product) => {
		// 			return a[props.order] > b[props.order] ? 1 : -1
		// 		})
		// 	})

		// 	return { orderedProducts }
		// } 
	}
})
</script>

<style scoped>
img {
	width: 200px;
	height: 300px;
}
</style>