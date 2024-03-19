<template>
  <div>
    <input v-model="form.username">
    <input v-model="form.password">
    <button @click="login">
      Enter
    </button>
  </div>
</template>

<script setup>
const form = reactive({
  username: null,
  password: null
})
const { signIn } = useAuth()

function login () {
  signIn('credentials', form).then(() => {
    location.href = '/'
  })
}
</script>
