<script setup lang="ts">
defineProps({
	modelValue: { type: [Number, String], default: 0 },
})

const emit = defineEmits(['update:modelValue', 'input']);
const updateValue = (value: (number | string)): void => {
	if (value !== '') {
		emit('update:modelValue', value)
	}
}

// more here..
</script>

<template>
		<div class="row">
			<div class="col-auto">
				<button class="btn btn-secondary cursor-pointer" @click="updateValue(modelValue > 0 ? modelValue - 1 : null)">
					-
				</button>
			</div>
			<div class="col-auto">
				<input :value="modelValue" type="number" min="0" @input="updateValue($event.target?.value)" />
			</div>
			<div class="col-auto">
				<button class="btn btn-secondary cursor-pointer" @click="updateValue(modelValue + 1)">
					+
				</button>
			</div>
		</div>
</template>