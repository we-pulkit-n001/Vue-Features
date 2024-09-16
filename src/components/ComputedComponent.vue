<template>
  <h1>ComputedComponent</h1>
  <div>Employees Present: {{ isEmployeesPresent }}</div>
  <div>{{ fullName }}</div>
</template>

<script setup>

import { computed,reactive,ref } from 'vue'

const employees = reactive(['emp1', 'emp2']);

const firstName = ref('calvin');
const lastName = ref('Joyner');

const isEmployeesPresent = computed(() => {
    return employees.length ? 'Yes' : 'No';
});

const fullName = computed(() =>{
    return firstName.value +  ' ' + lastName.value
})

</script>

<style>

</style>