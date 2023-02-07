<template>

	<!-- <p>Ordered by {{ order }}</p> -->
	<transition-group name="list" tag="div">
		<div class="container-lg">
			<!-- varför fungerar inte justify content på liten skärm? -->
			<div class="row justify-content-center">
				<div class="col-sm-6 col-lg-4 col-xl-3 g-2" v-for="product in products" :key="product.id">
					<div class="card" style="width: 18rem;">
						<img :src="product.image" class="card-img-top" :alt="product.title">
						<div class="card-body">
							<h5 class="card-title">{{ product.title }}</h5>
							<!-- <p class="card-text">{{ product.description }}</p> -->
							<div class="row align-items-center">
								<div class="col-5">	
									<a href="#" class="btn btn-primary">Buy Now</a>
								</div>
								<div class="col-3">
									<i class="fa-regular fa-heart fa-2xl"></i>
								</div>
								<div class="col-4">	
								<span>Price: ${{ product.price }}</span>
								</div>
							</div>
							<!-- <span>Review: {{ product.review }}</span> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition-group>
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