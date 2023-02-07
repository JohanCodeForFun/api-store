<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<div class="px-4 py-5 my-5 text-center">
					<img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72"
						height="57">
					<h3 class="display-5 fw-bold">{{ title }}</h3>
					<div class="col-lg-6 mx-auto">
						<img class="img-fluid" src="src/assets/priscilla-du-preez-gYdjZzXNWlg-unsplash.jpg" alt="spring look">
		<!-- Photo by <a href="https://unsplash.com/@priscilladupreez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Priscilla Du Preez</a> on <a href="https://unsplash.com/photos/gYdjZzXNWlg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   -->
						<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
							<button type="button" class="btn btn-info btn-lg px-4 gap-3">Get spring look ideas here</button>
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
	width: 300px;
	height: 150px;
}
</style>