<script setup lang="ts">

// Props practice simple example
interface Props {
  msg: string
}

const props = defineProps<Props>()

const message = props.msg

</script>

<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
