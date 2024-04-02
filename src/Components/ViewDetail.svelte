<script lang="ts">
    import {Data} from '../Stores/DataStore'
    import type { demoobj } from '../app';
    let DataValue :demoobj[]  ;

    const unsubscribe = Data.subscribe((value) => {
    DataValue = value; // Assign the current value of Data to DataValue
    console.log(DataValue)
});
</script>

<main>
  
    <div>
        
    </div>
</main>