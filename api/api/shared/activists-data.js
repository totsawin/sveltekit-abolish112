const data = {
    activists: [
        {
			name: `Jatupat 'Pai Dao Din' Boonpatraksa`,
			nickname: 'pai',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 3, day: 8 },
					releasedDate: { year: 2021, month: 4, day: 23 },
				},
				{
					detainedDate: { year: 2021, month: 8, day: 11 },
				}
			]
		},
		{
			name: `Parit 'Penguin' Chiwarak`,
			nickname: 'penguin',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 2, day: 9 },
					releasedDate: { year: 2021, month: 5, day: 11 },
				},
				{
					detainedDate: { year: 2021, month: 8, day: 9 },
				}
			]
		},
		{
			name: `Panupong 'Mike' Jadnok`,
			nickname: 'mike',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 3, day: 8 },
					releasedDate: { year: 2021, month: 6, day: 1 },
				},
				{
					detainedDate: { year: 2021, month: 8, day: 9 },
				}
			]
		},
		{
			name: `Somyot Pruksakasemsuk`,
			nickname: 'somyot',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 2, day: 9 },
					releasedDate: { year: 2021, month: 4, day: 23 },
				}
			]
		},
		{
			name: `Arnon Nampa`,
			nickname: 'arnon',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 2, day: 9 },
					releasedDate: { year: 2021, month: 6, day: 1 },
				},
				{
					detainedDate: { year: 2021, month: 8, day: 11 },
				}
			]
		},
		{
			name: `Patiwat Saraiyaem, 'Mor Lam Bank'`,
			nickname: 'bank',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 2, day: 9 },
					releasedDate: { year: 2021, month: 4, day: 9 },
				}
			]
		},
		{
			name: `Panusaya Sithijirawattanakul`,
			nickname: 'rung',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 3, day: 8 },
					releasedDate: { year: 2021, month: 5, day: 6 },
				}
			]
		},
		{
			name: `Chaiamorn 'Ammy' Kaewwiboonpan`,
			nickname: 'ammy',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 3, day: 4 },
					releasedDate: { year: 2021, month: 5, day: 11 },
				}
			]
		},
		{
			name: `Parinya Cheewin Kulpathom aka 'Port Faiyen'`,
			nickname: 'port',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 3, day: 6 },
					releasedDate: { year: 2021, month: 5, day: 12 },
				}
			]
		},
		{
			name: `Piyarat 'Toto' Jongthep`,
			nickname: 'toto',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 3, day: 6 },
					releasedDate: { year: 2021, month: 5, day: 5 },
				}
			]
		},
		{
			name: `Promsorn 'Fah' Veerathamjaree`,
			nickname: 'fah',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 3, day: 17 },
					releasedDate: { year: 2021, month: 5, day: 10 },
				},
				{
					detainedDate: { year: 2021, month: 8, day: 9 },
				}
			]
		},
		{
			name: `Chookiat 'Justin' Saengwong`,
			nickname: 'justin',
			detainedDuration: [
				{
					detainedDate: { year: 2021, month: 3, day: 23 },
					releasedDate: { year: 2021, month: 6, day: 2 },
				}
			]
		}
	]
};

const getActivists = () => {
    return data.activists;
  };

module.exports = { getActivists };  