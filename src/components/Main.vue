<template>
    <div class="container my-4 mx-auto px-4 md:px-2">
        <div class="justify-center text-center">Team Fight Tactics Helper</div>
        <div class="md:flex justify-center m-4 text-center">
            <!-- Origin Dropdown -->
            <div class="inline-block relative mr-2 sm:mr-2 md:mr-0 lg:mr-0 xl:mr-0">
                <select v-on:change="selectOrigin($event)" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option v-on:click="selectOrigin('All Origins')">All Origins</option>
                    <option v-for="origin in origins" :key="origin" v-on:click="selectOrigin(origin)" :value="origin">{{origin}}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            <!-- Class Dropdown -->
            <div class="inline-block relative md:ml-4">
                <select v-on:change="selectClass($event)" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option v-on:click="selectClass('All Origins')">All Classes</option>
                    <option v-for="clas in classes" :key="clas" v-on:click="selectClass(clas)" :value="clas">{{clas}}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            <!-- Cost Buttons -->
            <div class="mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded-l md:ml-4" v-on:click="selectCost(0)">All</button>
                <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4" v-on:click="selectCost(1)">1</button>
                <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4" v-on:click="selectCost(2)">2</button>
                <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4" v-on:click="selectCost(3)">3</button>
                <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4" v-on:click="selectCost(4)">4</button>
                <button class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded-r" v-on:click="selectCost(5)">5</button>
            </div>
        </div>
        <!-- Champion Cards -->
        <div class="flex flex-wrap mb-2">
            <champion v-for="champ in champions" :key="champ.id" :champ="champ"/>
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
          champions: null,
          origins: null,
          classes: null,
          selectedCost: 0,
          selectedOrigin: "All Origins",
          selectedClass: "All Classes"
      }
  },
  created(){
      axios
      .get('https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json')
      .then(response => (
          this.allChampions = response.data,
          this.champions = this.allChampions
      ))
  },
  beforeUpdate(){
      this.getOriginsAndClasses();
  },
  methods:{
      changeSort(){
        //filter champions by cost
        if(this.selectedCost == 0){
            var championsByCost = this.allChampions;
        }else{
            var a = Object.values(this.allChampions);
            var championsByCost = a.filter(b => {
                return b.cost == this.selectedCost;
            })
        }
        //filter champions by origin
        if(this.selectedOrigin != "All Origins"){
            var b = Object.values(championsByCost);
            var championsByOrigin = b.filter(c => {
                return c.origin.includes(this.selectedOrigin)
            })
        }else{
            var championsByOrigin = championsByCost
        }
        //filter champions by class
        if(this.selectedClass != "All Classes"){
            var c = Object.values(championsByOrigin);
            var championsByClass = c.filter(d => {
                return d.class.includes(this.selectedClass)
            })
        }else{
            var  championsByClass = championsByOrigin
        }
        this.champions = championsByClass   
      },
      getOriginsAndClasses(){
          var a = Object.values(this.allChampions);
          var  b = a.map(champ => champ.origin);
          var c = b.map(a => a[0]);
          this.origins = [...new Set(c)]

          var  b = a.map(champ => champ.class);
          var c = b.map(a => a[0]);
          this.classes = [...new Set(c)]
      },
      selectCost(cost){
          this.selectedCost = cost;
          this.changeSort()
      },
      selectOrigin(origin){
          this.selectedOrigin = origin.target.value;
          this.changeSort()
      },
      selectClass(clas){
          this.selectedClass = clas.target.value;
          this.changeSort()
      }
  }
}
</script>

<style>
li{
    display:inline;
}
</style>