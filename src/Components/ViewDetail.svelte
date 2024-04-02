<script lang="ts">
    import {Data} from '../Stores/DataStore'
    import type { student } from '../app';
    let DataValue :student[]  ;

    const unsubscribe = Data.subscribe((value) => {
    DataValue = value;  
    console.log(DataValue)
});
</script>

<main>
  
    <div>
        
    </div>
</main>