import { eventSchema, seriesSchema } from '$lib/schemas/eventSeries';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async () => {
	const seriesForm = await superValidate(seriesSchema);
	const eventForm = await superValidate(eventSchema);

	return { seriesForm, eventForm };
};

export const actions = {
	series: async ({ request }) => {
		const form = await superValidate(request, seriesSchema);
		if (!form.valid) {
			return fail(400, { form });
		}
		return { form };
	},
	event: async ({ request }) => {
		const formData = await request.formData();
		const form = await superValidate(request, eventSchema);
		if (!form.valid) {
			return fail(400, { form });
		}

		const file = formData.get('banner');
		if (file instanceof File) {
			// Do something with the file.
		}

		return { form };
	}
};
