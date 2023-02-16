<script setup lang="ts">
import AppCountInput from './AppCountInput.vue';

defineProps({
	product: { type: Object, required: true },
	count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>
<template>
	<div class="container">
		<div class="row">
			<div class="col-4">

				<p>{{ product.title }}</p>
			</div>
			<div class="col-2">
				<AppCountInput :model-value="count" @update:modelValue="$emit('updateCount', $event)" />
			</div>
			<div class="col-2">
				<p>${{ count * product.price }}</p>
			</div>
			<div class="col-2">
				<button @click="$emit('clear')" class="btn btn-danger">Remove</button>
			</div>
		</div>
	</div>
</template>
