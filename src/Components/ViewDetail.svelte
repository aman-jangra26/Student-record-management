<script lang="ts">
	import type { studentType } from '../app';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	export let DataValue: studentType[];
	const deleteData = (dataValue: studentType) => {
		dispatch('deleteData', dataValue);
	};
	const updateData = (DataValue: studentType) => {
		dispatch('updateData', DataValue);
	};
</script>

<main>
	<div class="w-full">
		<div>
			<div
				class="flex flex-wrap font-bold py-2 text-sm lg:text-lg justify-around text-center bg-slate-400"
			>
				<div class="w-1/8 lg:w-32">Name</div>
				<div class="w-1/8 lg:w-32">Gender</div>
				<div class="w-1/8 lg:w-32">Age</div>
				<div class="w-1/8 lg:w-32">Country</div>
				<div class="w-1/8 lg:w-32">State</div>
				<div class="w-1/8 lg:w-32">City</div>
				<div class="w-1/8 lg:w-32">Edit</div>
				<div class="w-1/8 lg:w-32">Delete</div>
			</div>
			{#each DataValue as dv}
				<div
					class="flex flex-wrap items-center align-middle py-3 text-sm lg:text-lg justify-around text-center bg-slate-200"
				>
					<div class="w-1/8 lg:w-32">
						{dv.name}
					</div>
					<div class="w-1/8 lg:w-32">
						{dv.gender}
					</div>
					<div class="w-1/8 lg:w-32">
						{dv.age}
					</div>
					<div class="w-1/8 lg:w-32">
						{dv.country}
					</div>
					<div class="w-1/8 lg:w-32">
						{dv.state}
					</div>
					<div class="w-1/8 lg:w-32">
						{dv.city}
					</div>
					<div class="w-1/8 lg:w-32">
						<button on:click={() => updateData(dv)} class="   btn btn-success">Edit</button>
					</div>
					<div class="w-1/8 lg:w-32">
						<button
							on:click={() => {
								deleteData(dv);
							}}
							class="btn btn-error">Delete</button
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>
