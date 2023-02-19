<template>
	<main class="container">

		<div class="row">
			<div class="col">

				<!-- show main product after route -->

				<!-- working on getting product from route param -->
				{{ getSingleProduct }}

				<h3>Product page</h3>
				<!-- <h3>{{ product.title }}</h3> -->
				<p>Route Param, {{ $route.params.id }}</p>
				<p>Product id, { here }</p>

				<ul>
					<h3>TO DO:</h3>
					<li>
						<p>Show detailed product info</p>
					</li>
					<li>
						<p>Sdd add to cart button</p>
					</li>
					<li>
						<p>In component ProductList: add router link for each product to push to, product/:id</p>
					</li>
					<li>
						<p>in SearchBar, move filter to getter from actions</p>
					</li>
					<li>
						<p>in App.vue, Move SearchBar to only show in HomePage</p>
					</li>
					<li>
						<p>+ fix fixed navbar on top !</p>
					</li>
					<li>
						<p>Bonus, add skeleton loader getting products at HomePage.vue</p>
					</li>
				</ul>


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
