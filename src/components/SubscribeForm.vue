<template>
	<teleport to='body'>
		<div class="pop-up">
			<div class="pop-up__layer pop-up-layer__background">
				<div class="pop-up__bg-purple1"></div>
				<div class="pop-up__bg-purple2"></div>
				<div class="pop-up__bg-presentation">
					<div class="pop-up__bg-img"></div>
				</div>
			</div>
			<div class="pop-up__layer pop-up-layer__content">
				<button class="pop-up__close-button" @click="close">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
						<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
					</svg>
				</button>
				<div class="pop-up__content-body">
					<header>
						<h1>10%<small>off</small></h1>
						<h2>your first order</h2>
					</header>
					<p>Subscrive to recieve 10% off promocode plus exclusive offers and deals</p>
					<div class="pop-up__notify">
						<!-- <span class="success">You have successfully subscribed to the newsletter</span> -->
						<!-- <span class="error">You have already subscribed to the newsletter</span> -->
					</div>
					<form @submit.prevent="subscribe">
						<div class="form-row _form-row-error">
							<label for="">Email-adress</label>
							<input type="email" v-model.trim="email">
							<div class="form-row__error-notice">Text Error</div>
						</div>
						<div class="form-row">
							<button type="button">Subscribe!</button>
						</div>
						<div class="form-row form-checkbox _form-row-error">
							<input type="checkbox" id="confirm_pp" v-model="agreement">
							<label for="confirm_pp">I'm agree with privacy policy</label>
							<div class="form-row__error-notice">Text Error</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email as emailValidator } from '@vuelidate/validators'

export default defineComponent({
	name: 'SubscribeForm',
	data: ()=>({
		emailList: [] as string[],
		email: '' as string,
		agreement: false as boolean,
	}),
	emits: ['toggleVisibility'],
	methods:{
		subscribe(){

		},

		close(){
			this.$emit('toggleVisibility');
		},
	},
	mounted() {
		if (localStorage.getItem('emailList'))
		{
			let list: string[];
			try{
				list = JSON.parse(localStorage.getItem('emailList') as string);
				if (list)
				{
					this.emailList = list;
				}
			}
			catch(_)
			{
				console.log('Ошиибка парсинга списка подпиантов',);
			}
		}
	},
})
</script>

<style lang="">
	
</style>