<script setup lang="ts">
import type {ListDataWithTotalVotes} from "@/interfaces.ts";
import {computed} from "vue";
import IconDice from "@/components/icons/IconDice.vue";
import {stlgsSeats, stlgsTable} from "@/util.ts";
import FullTable from "@/components/FullTable.vue";

const props = defineProps<{
  lists: ListDataWithTotalVotes[]
  numberOfSeats: number
}>()


const table = computed(() => stlgsTable(props.lists, props.numberOfSeats))
const withSeats = computed(() => stlgsSeats(table.value, props.numberOfSeats, undefined))

const calculatedNumberOfSeats = computed(() => withSeats.value.map(l => l.seats || 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0))

</script>

<template>
  <div class="box">
    <h3 class="title">Ausschuss mit {{ numberOfSeats }} Mitgliedern</h3>
    <template v-if="calculatedNumberOfSeats !== numberOfSeats">
      <div class="notification is-danger">
        <span class="dice" title="ggf. Losentscheid notwendig"><IconDice/></span>
        Es wurden <strong>{{ calculatedNumberOfSeats }}</strong> Sitze zugeteilt statt
        <strong>{{ numberOfSeats }}</strong>.
      </div>
    </template>
    <table class="table is-striped is-hoverable">
      <thead>
      <tr>
        <th>Liste</th>
        <th>Gesamtstimmen</th>
        <th>Sitze</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(list, i) in withSeats" v-bind:key="i">
        <td>{{ list.name }}</td>
        <td>{{ list.totalVotes }}</td>
        <td>{{ list.seats }}</td>
      </tr>
      </tbody>
    </table>

    <details>
    <summary>Tabelle</summary>
      <FullTable :lists="withSeats" :numberOfSeats="numberOfSeats" :showDeputySeats="false"/>
    </details>
  </div>
</template>

<style scoped>
</style>
