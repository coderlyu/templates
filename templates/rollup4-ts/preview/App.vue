<template>
    <div class="wrap">
      Test View
      {{ plus(1, 2) }}
    </div>
</template>
<script lang="ts" setup>
import { plus } from '../lib/index.esm.js'

</script>
<style lang="less" scoped></style>
