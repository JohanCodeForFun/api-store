<template>
	<div>
		<h3>{{ title }}</h3>
		<img class="img-fluid" src="src/assets/priscilla-du-preez-gYdjZzXNWlg-unsplash.jpg" alt="spring look">
		<!-- Photo by <a href="https://unsplash.com/@priscilladupreez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Priscilla Du Preez</a> on <a href="https://unsplash.com/photos/gYdjZzXNWlg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   -->
		<button>Get spring look ideas here</button>
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
		background-color: #B6E2D3;
	}
	h3 {
		text-align: center;
	}
	img {
		position: absolute;
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