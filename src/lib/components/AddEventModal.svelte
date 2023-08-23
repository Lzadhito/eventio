<script lang="ts">
	import Icon from '@iconify/svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let eventForm;

	let files: FileList;

	const { form, enhance, errors } = superForm(eventForm, {
		onUpdate: ({ form }) => {
			if (form.valid) console.log('masup pak eko!');
		}
	});

	$: console.log($errors);
</script>

<div class="card p-4 min-w-[50vw] space-y-4 sm:p-8">
	<SuperDebug data={$form} />
	<div class="flex items-center gap-2">
		<h2 class="h2 inline">Add Event</h2>
	</div>
	<form class="space-y-6" method="post" action="?/event" use:enhance>
		<label class="label">
			<span>Event Name</span>
			<input name="name" class="block input max-w-xl" placeholder="Input event name" bind:value={$form.name} />
		</label>

		<label class="label">
			<div>
				<span>Event Description</span>
				<span class="text-gray-400">(optional)</span>
			</div>
			<textarea
				name="description"
				bind:value={$form.description}
				class="textarea"
				placeholder="Input event description"
			/>
		</label>

		<label class="label">
			<div>
				<span>Event Banner</span>
				<span class="text-gray-400">(optional)</span>
			</div>
			<img
				src={files ? URL.createObjectURL(files[0]) : ''}
				class={files ? 'visible' : 'hidden'}
				width="500"
				height="100"
				alt="banner-preview"
			/>
			<input name="banner" type="file" class="btn-sm btn" bind:files bind:value={$form.banner} />
		</label>

		<section>
			<div class="label mb-4">Event Date</div>

			<div class="grid sm:grid-cols-2 gap-4">
				<label class="label">
					<sub class="block mb-3 text-gray-500">Start</sub>
					<input
						name="startDate"
						bind:value={$form.startDate}
						type="datetime-local"
						class="input text-black dark:[color-scheme:dark]"
					/>
				</label>

				<label class="label">
					<sub class="block mb-3 text-gray-500">End</sub>
					<input
						name="endDate"
						bind:value={$form.endDate}
						type="datetime-local"
						class="input text-black dark:[color-scheme:dark]"
					/>
				</label>
			</div>
		</section>

		<button class="btn float-right variant-filled-primary">
			<Icon icon="material-symbols:save-rounded" />
			<span>Save</span>
		</button>
	</form>
</div>
