<template>

	<p>Ordered by {{ order }}</p>
		<div class="container-lg">
			<!-- varför fungerar inte justify content på liten skärm? -->
			<div class="row">
				<div v-if="!products?.length">
					<h3>Loading items...</h3>
				</div>
				<!-- <transition-group name="list" tag="div" class="row justify-content-center"> -->
				<div v-else class="col-sm-6 col-lg-4 col-xl-3 g-2" v-for="product in productStore.products" :key="product.id">
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
									<a href="#" class="btn btn-primary">
										<i class="fa-solid fa-circle-info fa-xl"></i>
									</a>
								</div>
								<div class="col-5">
									<a href="#" class="btn btn-success">Buy Now</a>
								</div>
								<div class="col-4">
									<h5 class="card-text">${{ product.price }}</h5>
								</div>
							</div>
							<!-- <span>Review: {{ product.review }}</span> -->
						</div>
					</div>
				</div>
				<!-- </transition-group> -->
			</div>
		</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import Product from '../types/Product'
import OrderTermProducts from '../types/OrderTermProducts';
import { useProductStore } from '../stores/ProductStore';

export default defineComponent({
	props: {
		productStore: {
			type: Array as PropType<Product[]>,
			required: true,
		},
		products: {
			type: Array as PropType<Product[]>,
			required: true,
		},
		order: {
			type: String as PropType<OrderTermProducts>,
			required: true,
		},
	},
	setup(props) {
		const productStore = useProductStore();

		// sorting function to sort according to id, title and price
		const orderedProducts = computed(() => {
			return [...props.products].sort((a: Product, b: Product) => {
				return a[props.order] > b[props.order] ? 1 : -1
			})
		})

		return { orderedProducts, productStore }
	}
})
</script>

<style scoped>
</style>