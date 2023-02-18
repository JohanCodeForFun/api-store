<template>
	<div class="container">
		<div class="row">
			<div class="col">

				<!-- show main product after route -->

				<h3>Product page</h3>
				<!-- <h3>{{ product.title }}</h3> -->
				<p>Route Param, {{ $route.params.id }}</p>
				<p>Product id, { here }</p>

				<p>// show detailed product info</p>
				<p>// add add to cart button</p>
				<p>// add router link for each product in component ProductList to push to, product/:id</p>

				<h4>Other products in category...</h4>
				<!-- show other products in same category -->
			
			</div>
		</div>
	</div>
</template>

<script lang="ts">

import products from '../App.vue'

export default {
	computed: {
		productId() {
			return parseInt(this.$route.params.id as string)
		},
		// product() {
		// 	return products.products.find(obj as number => obj.id === this.productId)
		// }
	}
}
</script>
