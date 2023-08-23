import { z } from 'zod';

export const eventSchema = z
	.object({
		name: z.string().nonempty(),
		description: z.string().optional(),
		banner: z.instanceof(File).optional(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date()
	})
	.refine((data) => data.endDate > data.startDate, {
		message: 'End date cannot be earlier than start date.',
		path: ['endDate']
	});

export const seriesSchema = z.object({
	name: z.string().nonempty(),
	description: z.string().nonempty()
	// events: z.array(eventSchema).optional()
});
