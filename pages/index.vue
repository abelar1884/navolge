<template>
  <div>
    <button v-if="status === 'authenticated'" @click="signOut">
      Exit
    </button>
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'auth', auth: { guestRedirectTo: '/login' } })
const { status, signOut } = useAuth()
</script>
