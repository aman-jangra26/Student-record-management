<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
	import type { studentType } from '../app';
	const countries: string[] = ['USA', 'India', 'United Kingdom', 'China', 'Australia'];
	const states = new Map<string, string[]>([
		['USA', ['California', 'Texas', 'New York', 'Florida']],
		['India', ['Delhi', ' Maharashtra', 'Haryana', 'Punjab']],
		['United Kingdom', ['England', 'Ireland', 'Wales', 'Scotland']],
		['China', ['Beijing', 'Shanghai', 'Sichuan', 'Guangdong']],
		['Australia', ['New South Wales', 'Victoria', 'Queensland', 'Western Australia']]
	]);
	export let user:studentType ={};
	export let isUpdatingData = false; 
	let checked = false;
	let statelist: string[] | null|undefined ;  
	$: {   
		statelist =states.get(user.country !== undefined ? user.country : ' ');  
	} 
	const saveData = () => { 
		if (
			user.name === undefined ||  
			user.age === (0 ||undefined) ||
			user.gender === undefined ||
			user.country ===undefined ||
			user.state ===  undefined ||
			user.city === undefined
		) {
			alert('One or more required fields are null');
			return;
		}
		if (!checked) {
			alert('Agree to terms and conditions');
			return;
		} else { 
			if (!isUpdatingData && user.id== undefined ) { 
				user.id=Date.now();
			} 
		}
		dispatch('addData');
		isUpdatingData = false; 
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
					bind:value={user.name}
					id="name"
				/>
			</div>
		</div>
		<div class="flex justify-center mt-2">
			<div class="w-20">
				<p class="flex items-center gap-2 text-xl text-right">Gender</p>
			</div>
			<div class="flex w-1/2">
				<div class="flex flex-row-reverse ml-2 gap-2">
					<label class="flex items-center gap-2 text-right" for="male">Male</label>
					<input
						type="radio"
						name="gender"
						class="radio"
						value="male"
						bind:group={user.gender}
						id="male"
					/>
				</div>
				<div class="flex flex-row-reverse ml-2 lg:ml-4 gap-2">
					<label class="flex items-center gap-2 text-right" for="female">Female</label>
					<input
						type="radio"
						name="gender"
						class="radio"
						value="female"
						bind:group={user.gender}
						id="female"
					/>
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
					bind:value={user.age}
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
					bind:value={user.country}
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
				<select id="state" class="select select-bordered text-md w-full" bind:value={user.state}>
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
					bind:value={user.city}
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
