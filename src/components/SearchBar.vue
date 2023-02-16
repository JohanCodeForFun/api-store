<template>
	<header class="py-3 mb-1 border-bottom">
			<div class="container d-flex flex-wrap justify-content-center">
				<div class="row">
					<div class="col input-group">
						<input v-model="searchQuery" @keyup.enter="search()" type="search" class="form-control" placeholder="Search..." aria-label="Search">
						<span @click="search()" class="input-group-text btn btn-success">Search</span>
					</div>
				</div>
			</div>
		</header>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useProductStore } from '../stores/ProductStore';

	const searchQuery = ref('');
	const productStore = useProductStore();

	const search = () => {
		productStore.search(searchQuery.value)
	}
</script>