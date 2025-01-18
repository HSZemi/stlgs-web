<script setup lang="ts">
import {computed, type Ref, ref, watch} from "vue";
import type {ListData} from "@/interfaces.ts";
import FullTable from "@/components/FullTable.vue";
import {HISTORICAL_DATA} from "@/data.ts";
import {addTotalVotes, stlgsSeatDistribution, stlgsSeats, stlgsTable} from "@/util.ts";
import IconDice from "@/components/icons/IconDice.vue";
import CommitteeSection from "@/components/CommitteeSection.vue";

const numberOfSeats = ref(43);
const state = ref<ListData[]>(JSON.parse(JSON.stringify(HISTORICAL_DATA[2025])))
const showDetails: Ref<number[]> = ref([])

const load = (value: ListData[]) => state.value = JSON.parse(JSON.stringify(value))

const remove = (index: number) => state.value = state.value.filter((value, idx) => idx !== index)

const toggleDetailsFor = (index: number)=>{
  if(showDetails.value.includes(index)){
    showDetails.value = showDetails.value.filter(value => value !== index)
  } else {
    showDetails.value = [...showDetails.value, index]
  }
}

const isEmpty = (item: ListData) => !item.name && item.listVotes === undefined && item.peopleVotes === undefined

watch(() => state.value, (newValue) => {
  if (!isEmpty(newValue[newValue.length - 1])) {
    state.value.push({name: "", listVotes: undefined, peopleVotes: undefined})
  }
}, {immediate: true, deep: true})

const historicalDataKeys = computed(() => Object.keys(HISTORICAL_DATA).reverse())

const listDataWithTotalVotes = computed(() => addTotalVotes(state.value))
const table = computed(() => stlgsTable(listDataWithTotalVotes.value, numberOfSeats.value))
const withSeats = computed(() => stlgsSeats(table.value, numberOfSeats.value, undefined))
const full = computed(() => stlgsSeatDistribution(withSeats.value))

</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        stlgs-web
      </h1>
      <p class="subtitle">
        Hurra, wir berechnen Sitzverteilungen mit Sainte-Laguë/Schepers!
      </p>
    </div>

    <hr>

    <div class="container">
      <p>Daten eines Jahres laden:</p>
      <template v-for="key in historicalDataKeys" :key="key">
        <button class="button" @click="load(HISTORICAL_DATA[key])">{{ key }}</button>
      </template>
      <button class="button" @click="load([{name: '', listVotes: undefined, peopleVotes: undefined}])">
        leer
      </button>
    </div>

    <hr>

    <div class="container">
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="number" min="0" placeholder="43" v-model="numberOfSeats">
        </p>
        <p class="control">
          <a class="button is-static">
            Sitze
          </a>
        </p>
      </div>
      <table class="table is-striped is-hoverable">
        <thead>
        <tr>
          <th>Liste</th>
          <th>Personenstimmen</th>
          <th>Listenstimmen</th>
          <th>Gesamtstimmen</th>
          <th>Sitze</th>
          <th>Personensitze</th>
          <th>Listensitze</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <template v-for="(list, i) in state" v-bind:key="i">
          <tr>
            <td><input v-model="list.name"/></td>
            <td><input type="number" min="0" v-model="list.peopleVotes"/></td>
            <td><input type="number" min="0" v-model="list.listVotes"/></td>
            <td>{{ full[i].totalVotes === undefined ? '?' : full[i].totalVotes }}</td>
            <td>
              {{ full[i].seats === undefined ? '?' : full[i].seats }}
              <small>+{{ full[i].deputySeats === undefined ? '?' : full[i].deputySeats }}</small>
            </td>
            <td>
              {{ full[i].peopleSeats === undefined ? '?' : full[i].peopleSeats }}
              <small>+{{ full[i].deputyPeopleSeats === undefined ? '?' : full[i].deputyPeopleSeats }}</small>
              <template v-if="full[i].needsLot">
                <span class="dice" title="Losentscheid notwendig"><IconDice/></span>
              </template>
            </td>
            <td>
              {{ full[i].listSeats === undefined ? '?' : full[i].listSeats }}
              <small>+{{ full[i].deputyListSeats === undefined ? '?' : full[i].deputyListSeats }}</small>
              <template v-if="full[i].needsLot">
                <span class="dice" title="Losentscheid notwendig"><IconDice/></span>
              </template>
            </td>
            <td>
              <button v-if="full[i].totalVotes !== undefined" class="button is-small" @click="toggleDetailsFor(i)">
                Tabelle
              </button>
            </td>
            <td>
              <button class="button is-small" @click="remove(i)">❌</button>
            </td>
          </tr>
          <tr v-if="showDetails.includes(i)">
            <td colspan="9">
              <FullTable :lists="full[i].seatsDetails" :numberOfSeats="full[i].seats||0" :showDeputySeats="true"/>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>

    <hr>

    <div class="container">
      <FullTable :lists="full" :numberOfSeats="numberOfSeats" :showDeputySeats="false"/>
    </div>
    <hr>

    <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column">
          <CommitteeSection :lists="listDataWithTotalVotes" :numberOfSeats="9"/>
        </div>
        <div class="column">
          <CommitteeSection :lists="listDataWithTotalVotes" :numberOfSeats="7"/>
        </div>
        <div class="column">
          <CommitteeSection :lists="listDataWithTotalVotes" :numberOfSeats="5"/>
        </div>
        <div class="column">
          <CommitteeSection :lists="listDataWithTotalVotes" :numberOfSeats="3"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
