<template>
	<div>
		<h3>{{ title }}</h3>
		<img class="img-fluid" src="src/assets/dami-adebayo-k6aQzmIbR1s-unsplash.jpg" alt="spring jacket">
		<!-- Photo by <a href="https://unsplash.com/@dammypayne?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dami Adebayo</a> on <a href="https://unsplash.com/photos/k6aQzmIbR1s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   -->
	 <button>Get your spring jacket here!</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		title: String
	}
})

</script>

<style scoped>
	div {
		color: black;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
		height: 40vh;
		width: 100vw;
		background-color: #D8A7B1;
	}
	h3 {
		text-align: center;
	}
	img {
		width: 300px;
		height: 150px;
	}
	button {
		margin: .5rem;
		padding: .5rem 1rem;
		border-radius: .5rem;
		border-style: none;
		background-color: antiquewhite;
		font-weight: 700;
	}
</style>