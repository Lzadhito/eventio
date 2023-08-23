<script lang="ts">
	import Icon from '@iconify/svelte';
	import { FileButton } from '@skeletonlabs/skeleton';

	let files: FileList;

	$: {
		if (files) {
			console.log(URL.createObjectURL(files[0]));
		}
	}
</script>

<div class="card p-4 min-w-[50vw] space-y-4 sm:p-8">
	<div class="flex items-center gap-2">
		<h2 class="h2 inline">Add Event</h2>
	</div>
	<form class="space-y-6">
		<label class="label">
			<span>Event Name</span>
			<input class="block input max-w-xl" placeholder="Input event name" />
		</label>

		<label class="label">
			<div>
				<span>Event Description</span>
				<span class="text-gray-400">(optional)</span>
			</div>
			<textarea class="textarea" placeholder="Input event description" />
		</label>

		<label class="label">
			<span class="block">Event Banner</span>
			<img
				src={files ? URL.createObjectURL(files[0]) : ''}
				class={files ? 'visible' : 'hidden'}
				width="300"
				height="100"
				alt="banner-preview"
			/>
			<input type="file" class="btn-sm btn" bind:files />
		</label>

		<label class="label">
			<span class="block">Event Date</span>
			<input type="datetime-local" class="input w-fit text-black dark:[color-scheme:dark]" />
		</label>

		<button class="btn float-right variant-filled-primary">
			<Icon icon="material-symbols:save-rounded" />
			<span>Save</span>
		</button>
	</form>
</div>
