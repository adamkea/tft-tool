<template>
    <div class="w-1/2 sm:w-1/2 md:w-1/3 xl:w-1/5 pt-3 px-3" v-on:click="champInfo()"><a href="#">
        <div class="overflow-hidden rounded-lg shadow-lg border">
            <img alt="Placeholder" class="block h-auto w-full" :src="getImg()">
            <header class="flex items-inline justify-between leading-tight p-2 p-4">
                <h1 class="text-lg">{{champ.name}}</h1>
                <div class="flex text-lg">
                    <img src="http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/gold.png">{{champ.cost}} 
                </div>
            </header>
            <footer class="flex items-center justify-between p-4">
                <div class="flex-1">
                    <ul>
                        <li v-for="origin in champ.origin" :key="origin">{{origin}}  </li>
                    </ul>
                    <ul>
                        <li v-for="clas in champ.class" :key="clas">{{clas}}  </li>
                    </ul>
                </div>
            </footer>
        </div>
    </a></div>
</template>

<script>
export default {
    name: 'champion',
    props: {
        champ:{
            type: Object,
            required: true,
        }
    },
    methods: {
        getImg(){
            return 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+this.champ.key+'_0.jpg'
        },
        champInfo(){
            this.$router.push({ name: 'champion', params: { key: this.champ.key, champ: this.champ} })
        }
    }
}
</script>