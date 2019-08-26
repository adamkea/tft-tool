<template>
    <div class="container my-4 mx-auto px-4 md:px-2">
        <div class="inline-flex pb-2">
            <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded-l" v-on:click="changeSort(0)">All</button>
            <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4" v-on:click="changeSort(1)">1</button>
            <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4" v-on:click="changeSort(2)">2</button>
            <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4" v-on:click="changeSort(3)">3</button>
            <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4" v-on:click="changeSort(4)">4</button>
            <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded-r" v-on:click="changeSort(5)">5</button>
        </div>
        <div class="flex flex-wrap mb-2">
            <champion class="w-full md:w-1/2 xl:w-1/5 pt-3 px-3 md:pr-2" v-for="champ in champions" :key="champ.id" :champ="champ"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Champion from './Champion.vue'
export default {
  name: 'Main',
  components:{
      Champion,
  },
  data (){
      return{
          allChampions: null,
          champions: null
      }
  },
  mounted(){
      axios
      .get('https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json')
      .then(response => (
          this.allChampions = response.data,
          this.champions = this.allChampions
          ))
      
  },
  methods:{
      changeSort(cost){
          if(cost == 0){
              this.champions = this.allChampions;
          }else{
            var a = Object.values(this.allChampions);
            this.champions = a.filter(b => {
                //   debugger;
                return b.cost == cost;
            })
          }
      }
  }
}
</script>

<style>
li{
    display:inline;
}
</style>