<template>
	<button type="button" @click="toggleVisibilityForm">subscribe to news</button>
	<SubscribeForm
		v-if="statsusForm"
		@toggle-visibility="toggleVisibilityForm"
		 />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import SubscribeForm from './components/SubscribeForm.vue';
const statsusForm: Ref<boolean> = ref<boolean>(false);
const toggleVisibilityForm = function()
{
	statsusForm.value = !statsusForm.value;
}
</script>
<style scoped>
</style>
