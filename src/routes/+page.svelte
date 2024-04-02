
<script>
    import AddDetail from "../Components/AddDetail.svelte";
    import ViewDetail from "../Components/ViewDetail.svelte";
</script>
<main>
     
    <div class="flex-row sm:flex   ">
        <div  class=" border-2 rounded m-2 lg:w-4/12"> 
            <AddDetail/>
        </div>
        <div   class=" grow   m-2"  > 
            <ViewDetail/>
        </div>
    </div>
   
    
</main>