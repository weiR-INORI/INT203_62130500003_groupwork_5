app.component('photo-view', {
    props:{        
        filteredList:{
            type: Array,                
        }
    },
    template:
    /*html*/
    `
    
    <div v-show="task.zoom"><img v-bind:src="task.src" class='mt-20 px-8 py-8 h-720 w-716 bg-black bg-center'>
    <button v-on:click="toggleDone3(index)"> <img src="./images/baseline_close_black_18dp.png" class="w-8 h-8"></button>
    </div>
`,
    



methods: {   
    toggleDone3(){
        this.$emit('toggle-done3', index)       
    }
}
})