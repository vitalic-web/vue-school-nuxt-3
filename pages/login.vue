<script setup>
definePageMeta({
	layout: 'plain',
});

const isLoggedIn = useIsLoggedIn();

function login() {
	isLoggedIn.value = true;
	useRouter().push('/');
}
</script>

<template>
	<form @submit.prevent="login">
		<h1>Login</h1>
		<label>
			Username
			<input type="text" />
		</label>
		<label>
			Password
			<input type="password" />
		</label>
		<button>Login</button>
	</form>
</template>
