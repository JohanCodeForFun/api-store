<template>
	<main class="container">
		<div class="row">
			<div class="col">
				<p class="text-center">home / product / {{ $route.params.id }}</p>

				<!-- show main product after route -->
				<!-- working on getting product from route param -->
				<div class="card" style="width: 18rem;">
					<a href="#">
						<img :src="product?.image" class="card-img-top" :alt="product?.title">
					</a>
					<div class="card-body">
						<h5 class="card-title">{{ product?.title }}</h5>
						<p class="card-text">Review: {{ product?.rating.rate }}</p>
						<div class="row align-items-center">
							<div class="col-3">
								<RouterLink :to="`/product/${product?.id}`">
									<button class="btn btn-primary">
										<i class="fa-solid fa-circle-info fa-xl"></i>
									</button>
								</RouterLink>
							</div>
							<div class="col-5">
								<button class="btn btn-success" @click="cartStore.addItems(product)">Buy Now</button>
							</div>
							<div class="col-4">
								<h5 class="card-text">${{ product?.price }}</h5>
							</div>
						</div>
					</div>
				</div>

				<h4>Other products in category...</h4>
				<!-- show other products in same category -->

			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/ProductStore'
import { useCartStore } from '../stores/CartStore';

export default defineComponent({
	emits: ['addToCart'],
	setup() {
		const route = useRoute();
		const productStore = useProductStore();
		const cartStore = useCartStore();

		const product = productStore.filteredProducts.find(product => product.id === parseInt(route.params.id))

		return { useProductStore, cartStore, product }
	},
})
</script>

<style>
.product-image {
	width: 300px;
	height: auto;
}
</style>