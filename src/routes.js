import Main from "./components/Main.vue"
import championInfo from "./components/ChampionInfo.vue"


export default[
    {path: '/', component:Main, name: 'main'},
    {path: '/champion/:key', component:championInfo, name:'champion'}
]