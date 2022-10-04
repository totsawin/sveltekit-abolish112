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
	const activists: Activist[] = [
		{
			name: `Jatupat 'Pai Dao Din' Boonpatraksa`,
			nickname: 'pai',
			detainedDuration: [
				{
					detainedDate: {year: 2021, month: 3, day: 8},
					releasedDate: {year: 2021, month: 4, day: 23}
				}
			]
		},
		{
			name: `Parit 'Penguin' Chiwarak`,
			nickname: 'penguin',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 2, day: 9},
			}]
		},
		{
			name: `Panupong 'Mike' Jadnok`,
			nickname: 'mike',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 3, day: 8},
			}]
		},
		{
			name: `Somyot Pruksakasemsuk`,
			nickname: 'somyot',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 2, day: 9},
				releasedDate: {year: 2021, month: 4, day: 23}
			}]
		},
		{
			name: `Arnon Nampa`,
			nickname: 'arnon',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 2, day: 9},
			}]
		},
		{
			name: `Patiwat Saraiyaem, 'Mor Lam Bank'`,
			nickname: 'bank',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 2, day: 9},
				releasedDate: {year: 2021, month: 4, day: 9}
			}]
		},
		{
			name: `Panusaya Sithijirawattanakul`,
			nickname: 'rung',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 3, day: 8},
			}]
		},
		{
			name: `Chaiamorn 'Ammy' Kaewwiboonpan`,
			nickname: 'ammy',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 3, day: 4},
			}]
		},
		{
			name: `Parinya Cheewin Kulpathom aka 'Port Faiyen'`,
			nickname: 'port',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 3, day: 6},
			}]
		},
		{
			name: `Piyarat 'Toto' Jongthep`,
			nickname: 'toto',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 3, day: 6},
			}]
		},
		{
			name: `Promsorn 'Fah' Veerathamjaree`,
			nickname: 'fah',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 3, day: 17},
			}]
		},
		{
			name: `Chookiat 'Justin' Saengwong`,
			nickname: 'justin',
			detainedDuration: [{
				detainedDate: {year: 2021, month: 3, day: 23},
			}]
		}
	].map((activist) => {
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