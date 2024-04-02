
<script lang="ts">
	import { updated } from "$app/stores";
    import AddDetail from "../Components/AddDetail.svelte";
    import ViewDetail from "../Components/ViewDetail.svelte";
     let updateid:number =-1;
     let update:boolean=false
    const Editfunc = (e:any)=>{
        updateid =e.detail
        update=true
    }
    
</script>
<main>
     
    <div class="flex-row sm:flex   ">
        <div  class=" border-2 rounded m-2 lg:w-4/12"> 
            <AddDetail  bind:updatedata={update} bind:updatedataid={updateid}/>
        </div>
        <div   class=" grow   m-2"  > 
            <ViewDetail on:Editfunc={Editfunc}/>
        </div>
    </div>
   
    
</main>