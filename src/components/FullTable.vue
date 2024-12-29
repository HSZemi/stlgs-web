<script setup lang="ts">
import type {StlgsListResult} from "@/interfaces.ts";
import {computed} from "vue";
import IconDice from "@/components/icons/IconDice.vue";

const props = defineProps<{
  lists: StlgsListResult[]
  numberOfSeats: number
}>()


const limit = computed(() => {
  const allValues = props.lists.flatMap((row: StlgsListResult) => row.values).sort((a, b) => b - a)
  return allValues[props.numberOfSeats - 1]
})

const maxSeats = computed(() => Math.max(...props.lists.map(l => l.seats || 0)))
const displayRange = computed(() => {
  const values = []
  for (let i = 0; i <= maxSeats.value; i++) {
    values.push(i)
  }
  return values
})

const calculatedNumberOfSeats = computed(() => props.lists.map(l => l.seats || 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0))


</script>

<template>
  <p>
    Sitze: <strong>{{ calculatedNumberOfSeats }}</strong>
  </p>
  <template v-if="calculatedNumberOfSeats !== numberOfSeats">
    <div class="notification is-danger">
      <span class="dice" title="Losentscheid notwendig"><IconDice/></span>
      Es wurden <strong>{{calculatedNumberOfSeats}}</strong> Sitze zugeteilt statt <strong>{{numberOfSeats}}</strong>.
    </div>
  </template>
  <p>Schwellwert: <strong>{{ limit }}</strong></p>
  <table class="table">
    <thead>
    <tr>
      <th>Liste</th>
      <th v-for="i in displayRange" :key="i">{{ i + .5 }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="list in lists" :key="list.name">
      <th>{{ list.name }}</th>
      <template v-for="(value, i) in list.values.slice(0, maxSeats+1)" :key="i">
        <td :class="value < limit ? '' : 'has-background-success'">
          <abbr :title="value.toString()">{{ value.toFixed(1) }}</abbr>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
abbr {
  text-decoration: underline;
}
</style>
