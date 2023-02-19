<template>
	<main class="container">
		<div class="row">
			<div class="col">
				<p class="text-center">home / product / {{ $route.params.id }}</p>

				<!-- show main product after route -->
				<!-- working on getting product from route param -->
				{{ getSingleProduct }}

				<h3>Product page</h3>
				<!-- <h3>{{ product.title }}</h3> -->
				<p>Product id, { here }</p>

				<h4>Other products in category...</h4>
				<!-- show other products in same category -->

			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useProductStore } from '../stores/ProductStore'

export default defineComponent({
	setup() {
		const productStore = useProductStore();

		const productId = computed(() => {
			return parseInt(this.$route.params.id)
		});

		const getSingleProduct = computed(() => {
			return productStore.filteredProducts.find(product => product.id === this.$route.params.id)
		});
		return { useProductStore, productId, getSingleProduct }
	},
})
</script>
