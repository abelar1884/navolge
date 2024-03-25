<template>
  <div>
    <button v-if="status === 'authenticated'" @click="signOut">
      Exit
    </button>
    <button @click="onSubmit">
      create group
    </button>
    <ul>
      <li v-for="group in data" :key="group.id">
        {{ group.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth', auth: { guestRedirectTo: '/login' } })
const { status, signOut } = useAuth()
const { createGroup, getGroups } = useGroups()
const { data, refresh } = getGroups()

function onSubmit () {
  createGroup({
    name: 'еще группа33'
  }).then(() => {
    refresh()
  })
}
</script>
