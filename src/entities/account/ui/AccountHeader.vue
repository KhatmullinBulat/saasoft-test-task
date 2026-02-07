<script setup lang="ts">
import LabelHint from '@/shared/ui/LabelHint.vue'
</script>

<template>
  <div class="account-grid mb-3">
    <div class="account-grid__cell d-flex align-center ga-2">
      <h2>
        Метки
      </h2>

      <LabelHint />
    </div>
    <div class="account-grid__cell">
      <h2>
        Тип записи
      </h2>
    </div>
    <div class="account-grid__cell">
      <h2>
        Логин
      </h2>
    </div>
    <div class="account-grid__cell">
      <h2>
        Пароль
      </h2>
    </div>
    <div class="account-grid__cell" />
  </div>
</template>
