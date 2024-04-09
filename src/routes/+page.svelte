<script lang="ts">
	import { updated } from '$app/stores';
	import AddDetail from '../Components/AddDetail.svelte';
	import ViewDetail from '../Components/ViewDetail.svelte';
	import type { studentType } from '../app';
	let studentData: studentType[] = [];
	let updateDataValue: studentType = {};
	let user: studentType = {};

	let isUpdatingData = false;
	const updateData = (e: any) => {
		user = e.detail;
		isUpdatingData = true;
	};
	const addData = () => {
		let existingUser = studentData.filter((student) => student.id === user.id);
		if (existingUser.length > 0) {
			studentData = studentData.map((student) => {
				if (student.id === user.id) {
					return user;
				} else {
					return student;
				}
			});
		} else {
			studentData = [...studentData, user]; 
		}
		user={};
		 
	};
	const deleteData = (e: any) => {
		
		let deleteDatavalue = e.detail;
		console.log(deleteDatavalue.id)
		studentData = studentData.filter((item) => item !== deleteDatavalue);
	};
</script>

<main>
	<div class="flex-row sm:flex">
		<div class=" border-2 rounded m-2 lg:w-4/12">
			<AddDetail on:addData={addData} bind:user bind:isUpdatingData />
			<!-- <AddDetail on:addData={addData} bind:user bind:isUpdatingData bind:updateDataValue />   -->
		</div>
		<div class=" grow m-2">
			<ViewDetail DataValue={studentData} on:deleteData={deleteData} on:updateData={updateData} />
		</div>
	</div>
</main>
