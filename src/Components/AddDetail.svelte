<script lang="ts">
	import { onMount } from 'svelte';
	import { studentData, countries, states } from '../Stores/DataStore';
	import type { studentType } from '../app';
	export let isUpdatingData: boolean = false;
	export let updatedDataId: number;
	let id: number = 2;
	let name = '';
	let gender = '';
	let age: number = 0;
	let country: string = '';
	let state = '';
	let city = '';
	let checked: boolean = false;
	let statelist: string[] | null; 
	let isvalueUpdated=true;
	$: {
		statelist = states.get(country)!;
		if (isUpdatingData && isvalueUpdated) {
			let obj: studentType |undefined;
			const unsubscribe = studentData.subscribe((data) => {
				return data.find((item) => item.id === updatedDataId)!;
			});
			if (obj) {
				name = obj.name !== undefined ? obj.name : ' ';
				age = obj.age !== undefined ? obj.age : 0;
				gender = obj.gender !== undefined ? obj.gender : ' ';
				country = obj.country !== undefined ? obj.country : ' ';
				statelist = states.get(country)!;
				state = obj.state !== undefined ? obj.state : ' ';
				city = obj.city !== undefined ? obj.city : ' ';
			}
			isvalueUpdated=false
		}
	}
  const deleteData = (id: number | undefined) => {
		if (id == undefined) {
			return;
		} else {
			studentData.update((currData) => {
				return currData.filter((item) => item.id !== id);
			});
		}
	}; 
const saveData = () => {
    if (name === '' ||
        age === 0 ||
        gender === '' ||
        country === '' ||
        state === '' ||
        city === ''
    ) {
        alert('One or more required fields are null');
        return;
    }
    if (!checked) {
        alert('Agree to terms and conditions');
        return;
    }
    if (!isUpdatingData) {
        let obj = {
            id: id,
            name: name,
            age: age,
            gender: gender,
            country: country,
            state: state,
            city: city
        };
        id++;
        name = '';
        age = 0;
        gender = '';
        country = '';
        state = '';
        city = '';
        statelist = null;
        checked = false;
        isUpdatingData = false;
        studentData.update((curr) => {
            return [...curr, obj];
        });
    } else {
        let obj = {
            id: updatedDataId,
            name: name,
            age: age,
            gender: gender,
            country: country,
            state: state,
            city: city
        };
        name = '';
        age = 0;
        gender = '';
        country = '';
        state = '';
        city = '';
        statelist = null;
        checked = false;
        isUpdatingData = false;
		isvalueUpdated =true;
        deleteData(updatedDataId ); 
        studentData.update((curr) => {
            return [...curr, obj];
        });
    }
};
 
</script>

<main>
	<h1 class="text-2xl font-bold text-center px-2">Student Registration Form</h1>
	<form class="w-full p-10 flex-row bg-pink-200">
		<div class="flex items-center justify-center m-auto mt-2">
			<div class="w-20">
				<label class="flex items-center gap-2 text-xl text-right" for="name">Name</label>
			</div>
			<div class="w-1/2">
				<input
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
					bind:value={name}
					id="name"
				/>
			</div>
		</div>
		<div class="flex justify-center mt-2">
			<div class="w-20">
				<p class="flex items-center gap-2 text-xl text-right"  >Gender</p>
			</div>
			<div class="flex w-1/2">
				<div class="flex flex-row-reverse ml-2 gap-2">
					<label class="flex items-center gap-2 text-right" for="male">Male</label>
					<input type="radio" name="gender" class="radio" value="male" bind:group={gender} id="male" />
				</div>
				<div class="flex flex-row-reverse ml-2 lg:ml-4 gap-2">
					<label class="flex items-center gap-2 text-right" for="female">Female</label>
					<input type="radio" name="gender" class="radio" value="female" bind:group={gender} id="female" />
				</div> 
			</div>
		</div>
		
		<div class="flex items-center justify-center m-auto mt-2">
			<div class="w-20">
				<label class="flex items-center gap-2 text-xl text-right" for="age">Age</label>
			</div>
			<div class="w-1/2">
				<input
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
					id="age"
					bind:value={age}
				/>
			</div>
		</div>
		<div class="flex items-center justify-center m-auto mt-2">
			<div class="w-20">
				<label class="flex items-center gap-2 text-xl text-right" for="country">Country</label>
			</div>
			<div class="w-1/2">
				<select
					id="country"
					class="select select-bordered text-md w-full"
					bind:value={country}
					 
				>
					{#each countries as cntry}
						<option>{cntry}</option>
					{/each}
				</select>
			</div>
		</div>
		<div class="flex items-center justify-center m-auto mt-2">
			<div class="w-20">
				<label class="flex items-center gap-2 text-xl text-right" for="state">State</label>
			</div>
			<div class="w-1/2">
				<select id="state" class="select select-bordered text-md w-full" bind:value={state}>
					{#if statelist != null}
						{#each statelist as st}
							<option>{st}</option>
						{/each}
					{:else}
						<option>--Select Country--</option>
					{/if}
				</select>
			</div>
		</div>
		<div class="flex items-center justify-center m-auto mt-2">
			<div class="w-20">
				<label class="flex items-center gap-2 text-xl text-right" for="city">City</label>
			</div>
			<div class="w-1/2">
				<input
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
					bind:value={city}
					id="city"
				/>
			</div>
		</div>
		<div class="flex items-center justify-center m-auto mt-2">
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text text-lg"> Agree Terms and Conditons</span>
					<input type="checkbox" bind:checked class=" ml-2 checkbox checkbox-primary" />
				</label>
			</div>
		</div>
		<div class="flex items-center justify-center m-auto my-2">
			<button on:click={saveData} class="btn btn-wide">Submit</button>
		</div>
	</form>
</main>