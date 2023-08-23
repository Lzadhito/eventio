<script>
	import AddEventModal from '$lib/components/AddEventModal.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Icon from '@iconify/svelte';
	import { modalStore } from '@skeletonlabs/skeleton';

	function handleOpenAddEventModal() {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: AddEventModal
			}
		});
	}
</script>

<Navbar />
<main class="px-8 space-y-8">
	<h2 class="h2">Create an Event Series</h2>
	<form class="space-y-6">
		<label class="label">
			<span>Series Name</span>
			<input class="block input max-w-xl" placeholder="Input series name" />
		</label>

		<label class="label">
			<span>Series Description</span>
			<textarea class="textarea" placeholder="Input series description" />
		</label>

		<label class="label">
			<div class="mb-2">
				<span>Series of Events</span>
				<span class="text-gray-400">(you can handle this later)</span>
			</div>
			<button class="btn variant-filled" on:click={handleOpenAddEventModal}>
				<Icon icon="material-symbols:add-rounded" class="text-xl" />
				<span>Event</span>
			</button>
		</label>

		<button class="absolute bottom-8 right-8 btn variant-filled-primary">
			<Icon icon="material-symbols:save-rounded" />
			<span>Save</span>
		</button>
	</form>
</main>
