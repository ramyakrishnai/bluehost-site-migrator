<template>
	<div class="page --error">

		<div class="content">
			<h1>{{__("It looks like your site didn't transfer.", 'bluehost-site-migrator')}}</h1>

			<p>
				{{__("We might have gotten disconnected, or there could be something else going on. Let's figure it out.", 'bluehost-site-migrator')}}
			</p>

			<p>
				{{__("Call us at ", 'bluehost-site-migrator')}} {{customerCare}}
			</p>

			<router-link class="button" to="/compatible" tag="button">{{__("Try Again", 'bluehost-site-migrator')}}</router-link>
		</div>

		<img v-bind:src="imageSrc"/>

		<div class="footer"></div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageSrc: require(process.env.VUE_APP_MOVING_TRUCK_CONES),
				customerCare: process.env.VUE_APP_CUSTOMER_CARE
			}
		}
	}
</script>
