<template>
    <div class="w-full">
        <div class="overflow-hidden rounded-lg shadow-lg">
            <img alt="Placeholder" class="block h-auto w-full" :src="getImg()">
            <header class="flex items-inline justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">{{champ.name}}</h1>
                <div class="flex text-lg">
                    <img src="http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/gold.png">{{champ.cost}} 
                </div>
            </header>
            <footer class="flex items-center justify-between md:p-4">
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
    </div>
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
        }
    }
}
</script>