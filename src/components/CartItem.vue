<script setup lang="ts">

defineProps({
	product: { type: Object, required: true },
	count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>
<template>
	<div class="container mb-2">
		<div class="row">
			<div class="col-5">
				<p>{{ product.title }}</p>
			</div>
			<div class="col-2">
				<p>${{ count * product.price }}</p>
			</div>
			<div class="col-3">
				<p>Quanitity: {{ count }}</p>
			</div>
			<div class="col-2">
				<button @click="$emit('clear')" class="btn btn-danger p-2">Remove</button>
			</div>
		</div>
</div>
</template>
