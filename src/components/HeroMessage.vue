<template>
	<div class="container">
		<div class="row g-2">
			<div class="col">
				<div class="px-4 py-5 my-5 text-center">
					<img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72"
						height="57">
					<h3 class="display-5 fw-bold">{{ title }}</h3>
					<div class="col-lg-6 mx-auto">
						<img class="img-fluid" src="src/assets/freestocks-_3Q3tsJ01nc-unsplash.jpg" alt="deals">
								<!-- Photo by <a href="https://unsplash.com/@freestocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">freestocks</a> on <a href="https://unsplash.com/s/photos/fashion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   -->
						<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
							<button type="button" class="btn btn-primary btn-lg px-4 gap-3">Get the Deals here!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
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
	background-color: #EF7C8E;
}

h3 {
	text-align: center;
}

img {
	width: 300px;
	height: 150px;
}

/* button {
	margin: .5rem;
	padding: .5rem 1rem;
	border-radius: .5rem;
	border-style: none;
	background-color: antiquewhite;
	font-weight: 700;
} */
</style>