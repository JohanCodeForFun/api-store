<template>
	<p>Ordered by {{ order }}</p>
	<div class="container-lg">
		<!-- varför fungerar inte justify content på liten skärm? -->
		<div class="row">
			<!-- <div v-if="!productStore?.length">
				<h3>Loading items...</h3>
			</div> -->
			<!-- <transition-group name="list" tag="div" class="row justify-content-center"> -->

			<div class="col-sm-6 col-lg-4 col-xl-3 g-2" v-for="product in productStore.products" :key="product.id">
				<div class="card" style="width: 18rem;">
					<!-- add RouterLink -->
					<a href="#">
						<img :src="product.image" class="card-img-top" :alt="product.title">
					</a>
					<div class="card-body">
						<h5 class="card-title">{{ product.title }}</h5>
						<p class="card-text">{{ product.rating.rate }}</p>
						<div class="row align-items-center">
							<div class="col-3">
								<button class="btn btn-primary">
									<i class="fa-solid fa-circle-info fa-xl"></i>
								</button>
							</div>
							<div class="col-5">
								<button class="btn btn-success" @click="cartStore.addItems(product)">Buy Now</button>
							</div>
							<div class="col-4">
								<h5 class="card-text">${{ product.price }}</h5>
							</div>
						</div>
						<!-- <span>Review: {{ product.review }}</span> -->
					</div>
				</div>
			</div>
		</div>
			<!-- </transition-group> -->
		</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import Product from '../types/Product'
import OrderTermProducts from '../types/OrderTermProducts';
import { useProductStore } from '../stores/ProductStore';
import { useCartStore } from '../stores/CartStore';
import { parse } from '@vue/compiler-dom';


export default defineComponent({
	emits: ['addToCart'],
	props: {
		productStore: {
			type: Array as PropType<Product[]>,
			required: true,
		},
		// products: {
		// 	type: Array as PropType<Product[]>,
		// 	required: true,
		// },
		order: {
			type: String as PropType<OrderTermProducts>,
			required: true,
		},
	},
	setup(props) {
		const count = ref(0);
		const productStore = useProductStore();
		const cartStore = useCartStore();

		// sorting function to sort according to id, title and price
		// const orderedProducts = computed(() => {
		// 	return [...props.products].sort((a: Product, b: Product) => {
		// 		return a[props.order] > b[props.order] ? 1 : -1
		// 	})
		// })

		return { productStore, cartStore, count }
	}
})
</script>

<style scoped>

</style>