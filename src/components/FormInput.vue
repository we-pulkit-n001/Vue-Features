<template>
  <h1>Form Input Bindings</h1>
  <input type="text" :value="text" @input="(event) => (text = event.target.value)"/>
  <div>{{ text }}</div>

  <div>
    <textarea v-model="message"></textarea>
  </div>

  <div style="white: pre-line">{{message}}</div>
  <div>
    <input type="checkbox" v-model="checked"/>
  </div>

  <div>
    <input type="checkbox" value="Calvin" v-model="checkedNames"/>
    <input type="checkbox" value="Joyner" v-model="checkedNames"/>
    <input type="checkbox" value="Latest" v-model="checkedNames"/>
  
  Checked Array - {{ checkedNames }}
  </div>

  <div>
    <div>
        <label for="first">One-</label>
        <input name="first" type="radio" value="one" v-model="picked">
    </div>
   <div>
    <label for="second">Two-</label>
    <input name="second" type="radio" value="two" v-model="picked">
   </div>

    You selected: {{ picked }}

  </div>

  <div>Selected: {{ selected }}</div>

  <div>
    <select v-model="selected">
      <option value="A">First - A</option>
    <option value="B">Second - B</option>
    <option value="C">Third - C</option>
    </select>
    
  </div>

</template>

<script setup>

import { ref } from 'vue'

const text = ref('calvin');
const message = ref('Demo Message');
const checked = ref(true);
const checkedNames = ref([]);

const picked = ref('');
const selected = ref('A');

</script>

<style>

</style>