<template>
    <aside class="menu" v-show="isMenuVisible">
        <div class="menu-filter">
            <i class="fa fa-search fa-lg"></i>
            <input type="text" placeholder="Digite para filtrar: "
                v-model="treeFilter" class="filter-field">
        </div>
        <Tree :data="treeData" :options="treeOptions" 
            ref="tree" :filter="treeFilter"/>
    </aside>
    
</template>

<script>
import {mapState} from 'vuex'
import Tree from 'liquor-tree'
import { baseApiUrl } from "@/global";
import axios from "axios";

export default {
    name: 'MenuItem',
    components: {Tree},
    computed: mapState(['isMenuVisible']),
    data: function() {
        return {
            treeFilter:'',
            treeData: this.getTreeData(),
            treeOptions: {
                propertyNames: { 'text': 'name'},
                filter: { emptyText: 'Categoria não encontrada' }
            }
        }
    },
    methods: {
        getTreeData(){
            const url = `${baseApiUrl}/categories/tree`
            return axios.get(url).then(res => res.data)
        },
        onNodeSelect(node) {
            this.$router.push({
                name:'articlesByCategory',
                params: { id: node.id }
            })
        }
    },
    mounted() {
        this.$refs.tree.$on('node:selected', this.onNodeSelect)
    }

}



</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }


    .tree-anchor{
        color: #fff !important;
    }

    .menu .tree-node.selected > .tree-content,
    .menu .tree-node .tree-content:hover {
        background-color: rgba(255, 255, 255, 0.2) !important;
    }

    .tree-arrow.has-child {
        filter:brightness(2) ;
    }

    .menu .menu-filter {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #AAA;
    }

    .menu .menu-filter i{
        color: #AAA;
        margin-right: 10px;
    }

    .menu input {
        color: #ccc;
        font-size: 1.3rem;
        border: 0;
        outline: 0;
        width: 100%;
        background: transparent;
    }

    .tree-filter-empty {
        color: #ccc;
        margin-left: 20px;
        font-size: 1.0rem;
    }
</style>