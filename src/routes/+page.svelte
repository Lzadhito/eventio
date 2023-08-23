<script lang="ts">
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import Icon from '@iconify/svelte';

	let searchKey = '';

	function handleSearch({ key }: KeyboardEvent) {
		if (key === 'Enter') {
			goto(`/explore/${encodeURI(searchKey)}`);
		}
	}
</script>

<div class="flex flex-col bg-skeleton h-full">
	<Navbar />
	<main class="grow flex flex-col gap-8 justify-center items-center pb-16 px-8">
		<span class="text-center">
			<h2 class="h2 inline text-center tracking-tight">Manage and Publish Your {''}</h2>
			<h2
				class="h2 inline text-center tracking-tight from-[#FF1CF7] to-[#b249f8] text-transparent bg-gradient-to-b bg-clip-text"
			>
				Event Series
			</h2>
		</span>
		<section class="flex flex-col w-full gap-4 sm:gap-3 sm:flex-row sm:px-80">
			<input
				class="input grow"
				placeholder="Find an event series"
				bind:value={searchKey}
				on:keydown={handleSearch}
				type="search"
			/>
			<a href="/series/add" class="btn variant-filled-primary font-semibold">
				<Icon icon="material-symbols:note-stack-add-rounded" />
				<span>Create Series</span>
			</a>
		</section>
	</main>
</div>
