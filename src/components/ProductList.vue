<template>
	<div class="product-list">
		<!-- <p>Ordered by {{ order }}</p> -->
		<transition-group name="list" tag="ul">
			<li v-for="product in products" :key="product.id">
			<p>{{ product.title }}</p>
			</li>
		</transition-group>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	props: {
		products: {
			type: Array
		}
	}
})
</script>