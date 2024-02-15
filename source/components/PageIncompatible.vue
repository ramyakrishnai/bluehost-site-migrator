<template>
	<div class="page --incompatible">

		<div class="content">

			<h1>
				{{__("That didn't work:", 'bluehost-site-migrator')}}<br>
				{{__("Let's bring in the pros.", 'bluehost-site-migrator')}}
			</h1>

			<p>
				{{__("This can happen if you have a multisite, alternate directory structures, or certain themes or plugins. The transfer might require some extra steps, or we might need to look at other options.", 'bluehost-site-migrator')}}
			</p>

			<p>{{__("Give us a call at ", 'bluehost-site-migrator')}} {{customerCare}}.</p>

		</div>

		<img v-bind:src="imageSrc"/>

		<div class="footer"></div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageSrc: require(process.env.VUE_APP_COMPUTER_TRANSFER_BROKEN),
				customerCare: process.env.VUE_APP_CUSTOMER_CARE
			}
		}
	}
</script>
