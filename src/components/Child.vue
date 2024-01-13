<script setup lang="ts">

// Props practice simple example
interface Props {
  msg: string
}

const props = defineProps<Props>()

// Emits practice simple example
// response is the name of the event
const emit = defineEmits(['response'])

emit('response', 'child has updated')

const message = props.msg

</script>

<template>
  <div>
    <p>{{ message }}</p>
  </div>
  <div>
    <h1>Slot practice</h1>
    <slot>Callback message if no slot passed into child </slot>
  </div>
</template>
