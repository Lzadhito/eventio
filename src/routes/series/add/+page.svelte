<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Icon from '@iconify/svelte';
</script>

<Navbar />
<main class="mt-24 px-8 space-y-8">
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
			<div class="mb-4">
				<span>Series of Events</span>
				<span class="text-gray-500">(you can handle this later)</span>
			</div>
			<button class="btn variant-filled-secondary">
				<Icon icon="material-symbols:add-rounded" class="text-xl" />
				<span>Event</span>
			</button>
		</label>
	</form>
</main>
