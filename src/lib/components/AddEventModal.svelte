<script lang="ts">
	import { useForm } from 'svelte-reactive-form';
	import Icon from '@iconify/svelte';
	import { eventSchema } from '$lib/schemas/eventSeries';
	import { modalStore } from '@skeletonlabs/skeleton';

	let files: FileList;
	const { onSubmit: formOnSubmit, errors } = useForm({
		resolver: {
			validate(data) {
				return eventSchema.validate(data, { abortEarly: false }).catch(({ inner }) => {
					return Promise.reject(
						inner.reduce((acc, cur) => {
							const { path, errors } = cur;
							acc[path] = errors;
							return acc;
						}, {})
					);
				});
			}
		}
	});

	$: console.log($errors);

	function handleSubmit(data, e) {
		onSubmit(data, e);
		modalStore.close();
	}
</script>

<div class="card p-4 min-w-[50vw] space-y-4 sm:p-8">
	<div class="flex items-center gap-2">
		<h2 class="h2 inline">Add Event</h2>
	</div>
	<form class="space-y-6" on:submit|preventDefault={formOnSubmit(handleSubmit)}>
		<label class="label">
			<span>Event Name</span>
			<input name="name" class="block input max-w-xl" placeholder="Input event name" />
		</label>

		<label class="label">
			<div>
				<span>Event Description</span>
				<span class="text-gray-400">(optional)</span>
			</div>
			<textarea name="description" class="textarea" placeholder="Input event description" />
		</label>

		<label class="label">
			<div>
				<span>Event Banner</span>
				<span class="text-gray-400">(optional)</span>
			</div>
			<img
				src={files ? URL.createObjectURL(files[0]) : ''}
				class={files ? 'visible' : 'hidden'}
				width="300"
				height="100"
				alt="banner-preview"
			/>
			<input name="banner" type="file" class="btn-sm btn" bind:files />
		</label>

		<section>
			<div class="label mb-4">Event Date</div>

			<div class="grid sm:grid-cols-2 gap-4">
				<label class="label">
					<sub class="block mb-3 text-gray-500">Start</sub>
					<input name="startDate" type="datetime-local" class="input text-black dark:[color-scheme:dark]" />
				</label>

				<label class="label">
					<sub class="block mb-3 text-gray-500">End</sub>
					<input name="endDate" type="datetime-local" class="input text-black dark:[color-scheme:dark]" />
				</label>
			</div>
		</section>

		<button class="btn float-right variant-filled-primary">
			<Icon icon="material-symbols:save-rounded" />
			<span>Save</span>
		</button>
	</form>
</div>
