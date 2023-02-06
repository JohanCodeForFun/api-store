<template>
	<div class="product-list">
		<!-- <p>Ordered by {{ order }}</p> -->
		<transition-group name="list" tag="div">
			<div v-for="product in products" :key="product.id">
			<div class="card" style="width: 18rem;">
				<img :src="product.image" class="card-img-top" :alt="product.title">
				<div class="card-body">
					<h5 class="card-title">{{ product.title }}</h5>
					<p class="card-text">{{ product.description }}</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
					<span>Price: {{ product.price }}</span>
					<!-- <span>Review: {{ product.review }}</span> -->
				</div>
			</div>
		</div>
		</transition-group>
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

</style>