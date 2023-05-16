<script setup>
const route = useRoute();
const { data, error } = await useFetch(`http://www.omdbapi.com/?apikey=aee0adc2&i=${route.params.id}`, {
  pick: ['Plot', 'Title', 'Error'],
  key: `/movies/${route.params.id}`,
});

if (error.value) {
  // handle accordingly
}

if (data.value.Error === 'Incorrect IMDb ID.') {
  showError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
