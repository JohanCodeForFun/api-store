<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h3>Product page</h3>
				<h3>{{ product.title }}</h3>
				<p>{{ $route.params.id }}</p>
				<!-- show main product after route -->
				<!-- show other recommended products -->
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
