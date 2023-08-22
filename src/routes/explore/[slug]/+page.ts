/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		searchKey: params.slug
	};
}
