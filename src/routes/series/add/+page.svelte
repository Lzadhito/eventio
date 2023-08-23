<script lang="ts">
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	import AddEventModal from '$lib/components/AddEventModal.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data: PageData;

	const { form: seriesForm, enhance: seriesEnhance } = superForm(data.seriesForm, { dataType: 'json' });

	function handleOpenAddEventModal() {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: AddEventModal,
				props: { eventForm: data.eventForm }
			}
		});
	}
</script>

<SuperDebug data={$seriesForm} />
<Navbar />
<main class="px-8 space-y-8">
	<h2 class="h2">Create an Event Series</h2>
	<form class="space-y-6" method="post" action="?/series" use:seriesEnhance>
		<label class="label">
			<span>Series Name</span>
			<input name="name" class="block input max-w-xl" placeholder="Input series name" bind:value={$seriesForm.name} />
		</label>

		<label class="label">
			<span>Series Description</span>
			<textarea
				name="description"
				class="textarea"
				placeholder="Input series description"
				bind:value={$seriesForm.description}
			/>
		</label>

		<label class="label">
			<div class="mb-2">
				<span>Series of Events</span>
				<span class="text-gray-400">(you can handle this later)</span>
			</div>
			<button type="button" class="btn variant-filled" on:click={handleOpenAddEventModal}>
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
