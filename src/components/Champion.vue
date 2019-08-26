<template>
     <div class="bg-green-600 border rounded shadow p-2">
        <div class="flex flex-row items-center">
            <div class="flex-1 text-left">
                <ul>
                    <li v-for="origin in champ.origin" :key="origin">{{origin}}  </li>
                </ul>
                <ul>
                    <li v-for="clas in champ.class" :key="clas">{{clas}}  </li>
                </ul>
                <h3 class="text-white text-3xl">{{champ.name}}</h3>
                <h4>Cost: {{champ.cost}}</h4>
            </div>
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
    }
}
</script>