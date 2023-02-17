<template>
	<ul class="nav">
		<li class="nav-item"><a href="#" class="nav-link link-dark px-2"><del>Login</del></a></li>
		<!-- move this code and modal to CartWidget.vue -->
		<!-- Button trigger modal -->
		<button type="button" class="btn btn-primary nav-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
			Cart ({{ cartStore.count }})
		</button>
	</ul>

	<!-- Modal -->
	<!-- add to CartWdiget.vue -->
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="fs-5">Products in cart</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<!-- shopping cart modal body -->
					<div class="container">
						<div class="row">
							<div class="col">
								<!-- modal content -->
								<div v-if="!cartStore.isEmpty">
									<ul class="list-group">
										<CartItem v-for="(items, title) in cartStore.grouped" :key="title" :product="items[0]"
											:count="items.length" @updateCount="cartStore.setItemCount(items[0], $event)"
											@clear="cartStore.clearItem(title)" />
									</ul>
								</div>
								<div v-else>
									<p>Cart is empty.</p>
								</div>
								<p class="text-end fw-bold">Total: ${{ cartStore.total }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="cartStore.$reset()">Clear Cart</button>
					<button type="button" class="btn btn-success" @click="cartStore.checkout">Checkout</button>
				</div>
			</div>
		</div>
</div>
</template>


<script setup lang="ts">
import { useCartStore } from '../stores/CartStore';
import CartItem from './CartItem.vue';
const cartStore = useCartStore();
</script>