<script lang="ts">
	import { updated } from '$app/stores';
	import AddDetail from '../Components/AddDetail.svelte';
	import ViewDetail from '../Components/ViewDetail.svelte';
	import type { studentType } from '../app';
	let studentData: studentType[] = [];
	let updateDataValue: studentType = {};
	let isUpdatingData = false;
	const updateData = (e: any) => {
		updateDataValue = e.detail;
		isUpdatingData = true;
	};
	const addData = (e: any) => {
		let newdata = e.detail;
		const index = studentData.findIndex((item) => item.id === newdata.id);
		if (index !== -1) {
			studentData[index] = newdata;
		} else {
			studentData = [...studentData, newdata];
		}
	};
	const deleteData = (e: any) => {
		let deleteDatavalue = e.detail;
		studentData = studentData.filter((item) => item !== deleteDatavalue);
	};
</script>

<main>
	<div class="flex-row sm:flex">
		<div class=" border-2 rounded m-2 lg:w-4/12">
			<AddDetail on:addData={addData} bind:isUpdatingData bind:updateDataValue />
		</div>
		<div class=" grow m-2">
			<ViewDetail DataValue={studentData} on:deleteData={deleteData} on:updateData={updateData} />
		</div>
	</div>
</main>
