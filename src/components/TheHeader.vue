<template>
    <div>
        <nav class="container d-flex align-items-center">
        <div class="div1 d-flex align-items-center ml-20 m-10">
            <p class="p-admin mr-30">SMOOBIL<br>
                <span>(Admin)</span>
            </p>
            <RouterLink to="/">
                <button class="btn btn-primary mr-10">
                    <i class="fa-sharp fa-solid fa-house" style="color: #FFFFFF;"></i>
                </button>
            </RouterLink>
            <span @click="refreshPage" class="btn">
                <i class="fa-solid fa-arrows-rotate" style="color: var(--primary-1);"></i>
            </span>
        </div>
        <div class="div2 d-flex align-items-center justify-content-center">
            <!-- <RouterLink to="/ajouter">
                <button class="btn btn-primary mr-10">
                    <i class="fa-solid fa-plus mr-10" style="color: #ffffff;"></i>
                    <span style="color: #FFFFFF;">AJOUTER</span>
                </button>
            </RouterLink> -->
            <!-- <div class="search"></div>
                <input type="text" placeholder="Rechercher">
            </div> -->
        </div>
        <div class="div3"> </div>
        <div class="div4 d-flex align-items-center justify-content-center">
            <RouterLink to="/ajouter">
                <button class="d-flex btn btn-primary mr-20">
                    <i class="fa-solid fa-plus mr-10" style="color: #ffffff;"></i>
                    <span style="color: #FFFFFF;">AJOUTER</span>
                </button>
            </RouterLink>
            <h1 class="mr-20">DASHBOARD</h1>
        </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()

function refreshPage() {
    router.go(0)
}


</script>

<style scoped lang="scss">

.container {
display: grid;
grid-template-columns: 1fr 2fr repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { 
    grid-area: 1 / 1 / 2 / 2; 
    .p-admin{
        font-weight: bold;
        text-align: right;
        
        span{
            color: var(--primary-1);
        }
    }
}
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 1 / 4 / 2 / 5; }

</style>