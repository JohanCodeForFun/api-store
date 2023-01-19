<template>
	<div>
		<h3>{{ title }}</h3>
		<img src="src/assets/freestocks-_3Q3tsJ01nc-unsplash.jpg" alt="deals">
		<!-- Photo by <a href="https://unsplash.com/@freestocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">freestocks</a> on <a href="https://unsplash.com/s/photos/fashion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   -->
	 <button>Get the Deals here!</button>
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
		color: white;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
		height: 40vh;
		width: 100vw;
		background-color: red;
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