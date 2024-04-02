<script lang="ts">
	import { onMount } from 'svelte';
	import { Data, countries, states } from '../Stores/DataStore';
	import type { student } from '../app';

	let id: number = 2;
	let name = '';
	let gender = '';
	let age: number = 0;
	let country: string = '';
	let state = '';
	let city = '';
	let checked: boolean = false;
	let statelist: string[] | null;
	const handlecountryChange = (): void => {
		statelist = states.get(country)!;
	};

	const test = () => {
		if (
			name === '' ||
			age === 0 ||
			gender === '' ||
			country === '' ||
			state === '' ||
			city === ''
		) {
			alert('One or more required fields are null');
			return;
		}
		if (checked == false) {
			alert('Agree to terms ans condition');
			return;
		}
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
    statelist=null
    checked=false;
		Data.update((curr) => {
			return [...curr, obj];
		});
	};
</script>

<main>
  <h1 class="text-2xl font-bold text-center">Student Registration Form   </h1>
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
				/>
			</div>
		</div>
		<div class="flex justify-center mt-2">
			<div class="w-20">
				<label class="flex items-center gap-2 text-xl text-right" for="gender">Gender</label>
			</div>
			<div class="flex w-1/2">
				<div class="flex ml-2">
					<input type="radio" name="gender" class="radio" value="male" bind:group={gender} />
					<label class="flex items-center gap-2 text-right" for="male">Male</label>
				</div>
				<div class="flex ml-2 lg:ml-4">
					<input type="radio" name="gender" class="radio" value="female" bind:group={gender} />
					<label class="flex items-center gap-2 text-right" for="female">Female</label>
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
					on:change={handlecountryChange}
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
			<button on:click={test} class="btn btn-wide">Submit</button>
		</div>
	</form>
</main>
