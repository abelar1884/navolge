<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const users = $fetch('/api/users')
</script>
