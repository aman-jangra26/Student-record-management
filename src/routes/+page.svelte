
<script lang="ts">
	import { updated } from "$app/stores";
    import AddDetail from "../Components/AddDetail.svelte";
    import ViewDetail from "../Components/ViewDetail.svelte";
     let updatedDataId:number =-1;
     let isUpdatingData:boolean=false
    const updateData = (e:any)=>{
        updatedDataId =e.detail
        isUpdatingData=true
    }
    
</script>
<main>
     
    <div class="flex-row sm:flex   ">
        <div  class=" border-2 rounded m-2 lg:w-4/12"> 
            <AddDetail  bind:isUpdatingData={isUpdatingData} bind:updatedDataId={updatedDataId}/>
        </div>
        <div   class=" grow   m-2"  > 
            <ViewDetail on:updateData={updateData}/>
        </div>
    </div>
   
    
</main>