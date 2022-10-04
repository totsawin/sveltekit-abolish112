import { Temporal } from '@js-temporal/polyfill';

export interface Activist {
	name: string;
	nickname: string;
	detainedDuration: DetainedDuration[];
	detainedDays?: number;
};
interface DetainedDuration {
	detainedDate: TemporalDateObject
	releasedDate?: TemporalDateObject
}

interface TemporalDateObject {
	year: number;
	month: number;
	day: number;
}

export async function load() {
	const todayDate = Temporal.Now.plainDateISO();
	const data = await import('$lib/assets/data.json');
	const activists: Activist[] = data.activists.map((activist: Activist) => {
		return {
			...activist,
			detainedDays: getNumberOfDaysUnderDetained(activist.detainedDuration)
		};
	});

    function getNumberOfDaysUnderDetained(detainedDuration: DetainedDuration[]) {
		return detainedDuration.reduce((acc, { detainedDate, releasedDate }) => {
			const detainedDateTemporal = Temporal.PlainDate.from(detainedDate);
			const releasedDateTemporal = releasedDate ? Temporal.PlainDate.from(releasedDate) : todayDate;
			return acc + detainedDateTemporal.until(releasedDateTemporal, { largestUnit: 'days' }).days;
		}, 0);
	}

    return { activists };
}