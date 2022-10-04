<script lang="ts">
    import { Temporal } from '@js-temporal/polyfill';
    interface Activist {
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

	// import 3 different sizes of the image and create a srcset from them
	import srcsetAvif_ammy from '$lib/assets/ammy.jpg?width=700;350;175&format=avif&srcset';
	// do it a second time, but now as webp since safari can't display avif
	import srcsetWebp_ammy from '$lib/assets/ammy.jpg?width=700;350;175&format=webp&srcset';
	// create a small placeholder and import its metadata
	import src_ammy from '$lib/assets/arnon.jpg?width=350&metadata'

	import srcsetAvif_arnon from '$lib/assets/arnon.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_arnon from '$lib/assets/arnon.jpg?width=700;350;175&format=webp&srcset';
	import src_arnon from '$lib/assets/arnon.jpg?width=350&metadata'

	import srcsetAvif_bank from '$lib/assets/bank.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_bank from '$lib/assets/bank.jpg?width=700;350;175&format=webp&srcset';
	import src_bank from '$lib/assets/bank.jpg?width=350&metadata'

	import srcsetAvif_fah from '$lib/assets/fah.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_fah from '$lib/assets/fah.jpg?width=700;350;175&format=webp&srcset';
	import src_fah from '$lib/assets/fah.jpg?width=350&metadata'

	import srcsetAvif_justin from '$lib/assets/justin.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_justin from '$lib/assets/justin.jpg?width=700;350;175&format=webp&srcset';
	import src_justin from '$lib/assets/justin.jpg?width=350&metadata'

	import srcsetAvif_mike from '$lib/assets/mike.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_mike from '$lib/assets/mike.jpg?width=700;350;175&format=webp&srcset';
	import src_mike from '$lib/assets/mike.jpg?width=350&metadata'

	import srcsetAvif_pai from '$lib/assets/pai.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_pai from '$lib/assets/pai.jpg?width=700;350;175&format=webp&srcset';
	import src_pai from '$lib/assets/pai.jpg?width=350&metadata'

	import srcsetAvif_penguin from '$lib/assets/penguin.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_penguin from '$lib/assets/penguin.jpg?width=700;350;175&format=webp&srcset';
	import src_penguin from '$lib/assets/penguin.jpg?width=350&metadata'

	import srcsetAvif_port from '$lib/assets/port.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_port from '$lib/assets/port.jpg?width=700;350;175&format=webp&srcset';
	import src_port from '$lib/assets/port.jpg?width=350&metadata'

	import srcsetAvif_rung from '$lib/assets/rung.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_rung from '$lib/assets/rung.jpg?width=700;350;175&format=webp&srcset';
	import src_rung from '$lib/assets/rung.jpg?width=350&metadata'

	import srcsetAvif_somyot from '$lib/assets/somyot.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_somyot from '$lib/assets/somyot.jpg?width=700;350;175&format=webp&srcset';
	import src_somyot from '$lib/assets/somyot.jpg?width=350&metadata'

	import srcsetAvif_toto from '$lib/assets/toto.jpg?width=700;350;175&format=avif&srcset';
	import srcsetWebp_toto from '$lib/assets/toto.jpg?width=700;350;175&format=webp&srcset';
	import src_toto from '$lib/assets/toto.jpg?width=350&metadata'

	const images = {
		ammy: {
			srcsetAvif: srcsetAvif_ammy,
			srcsetWebp: srcsetWebp_ammy,
			src: src_ammy
		},
		arnon: {
			srcsetAvif: srcsetAvif_arnon,
			srcsetWebp: srcsetWebp_arnon,
			src: src_arnon
		},
		bank: {
			srcsetAvif: srcsetAvif_bank,
			srcsetWebp: srcsetWebp_bank,
			src: src_bank
		},
		fah: {
			srcsetAvif: srcsetAvif_fah,
			srcsetWebp: srcsetWebp_fah,
			src: src_fah
		},
		justin: {
			srcsetAvif: srcsetAvif_justin,
			srcsetWebp: srcsetWebp_justin,
			src: src_justin
		},
		mike: {
			srcsetAvif: srcsetAvif_mike,
			srcsetWebp: srcsetWebp_mike,
			src: src_mike
		},
		pai: {
			srcsetAvif: srcsetAvif_pai,
			srcsetWebp: srcsetWebp_pai,
			src: src_pai
		},
		penguin: {
			srcsetAvif: srcsetAvif_penguin,
			srcsetWebp: srcsetWebp_penguin,
			src: src_penguin
		},
		port: {
			srcsetAvif: srcsetAvif_port,
			srcsetWebp: srcsetWebp_port,
			src: src_port
		},
		rung: {
			srcsetAvif: srcsetAvif_rung,
			srcsetWebp: srcsetWebp_rung,
			src: src_rung
		},
		somyot: {
			srcsetAvif: srcsetAvif_somyot,
			srcsetWebp: srcsetWebp_somyot,
			src: src_somyot
		},
		toto: {
			srcsetAvif: srcsetAvif_toto,
			srcsetWebp: srcsetWebp_toto,
			src: src_toto
		},
	};

	const sizes = '(max-width: 350px) 100vw, 700px';

	function getNumberOfDaysUnderDetained(detainedDuration: DetainedDuration[]) {
		return detainedDuration.reduce((acc, { detainedDate, releasedDate }) => {
			const detainedDateTemporal = Temporal.PlainDate.from(detainedDate);
			const releasedDateTemporal = releasedDate ? Temporal.PlainDate.from(releasedDate) : todayDate;
			return acc + detainedDateTemporal.until(releasedDateTemporal, { largestUnit: 'days' }).days;
		}, 0);
	}
</script>
{#if activists}
	<main class="activists">
		{#each activists as activist}
			<div class="individual">
				<div class="individual__name">
					{activist.name}
				</div>
				<div class="individual__caption">
					<span>{activist.detainedDays} Days Held Under Pre-Trial Detention</span>
				</div>
				<div class="individual__image">
					<!-- <img src="./assets/{activist.nickname}.jpg" alt={activist.name} /> -->
					<picture>
						<source sizes={sizes} srcset={ images[`${activist.nickname}`].srcsetAvif } type="image/avif"/>
						<source sizes={sizes} srcset={ images[`${activist.nickname}`].srcsetWebp } type="image/webp"/>
						<img 
							src={images[`${activist.nickname}`].src.placeholder}
							loading="eager"
							decoding="async"
							width={images[`${activist.nickname}`].src.width} 
							height={images[`${activist.nickname}`].src.height}
							alt={images[`${activist.nickname}`].src.name} />
					</picture>
					{#if activist.detainedDuration[activist.detainedDuration.length - 1].releasedDate}
						<div class="stamp is-bailed">Bailed</div>
					{/if}
				</div>
			</div>
		{/each}
	</main>
{/if}

<style>
	:global(body) {
		/* this will apply to <body> */
		background-color: black;
		margin: 0;
	}

	.activists {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		column-gap: 10px;
		row-gap: 20px;
  	}

	.individual {
		position: relative;
		width: 100%;
		margin: 0 auto;
		background-color: #4a4a4a;
		color: #fff;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
		display: grid;
		font-family: "helvetica", "arial", sans-serif;
		grid-template-rows: 10% 5% auto;
  	}
	.individual__name {
		align-items: center;
		display: grid;
		font-size: 1.5em;
		font-weight: bold;
		padding-left: 1rem;
		border-bottom: 1px solid;
	}

	.individual__caption {
		/* background-color: #ddb0e1; */
		color: #f9f2e2;
		align-items: center;
		display: grid;
		font-size: 1em;
		padding-left: 1rem;
		border-bottom: 1px solid;
	}

	.individual__image {
		position: relative;
		background-color: #98d6f7;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
	}

	.stamp {
		font-weight: 700;
		text-transform: uppercase;
		mix-blend-mode: multiply;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.is-bailed {
		color: #C4C4C4;
		border: 1rem double #C4C4C4;
		transform: rotate(-5deg);
		font-size: 6rem;
		font-family: "Open sans", Helvetica, Arial, sans-serif;
		border-radius: 0;
		padding: 0.5rem;
	}
</style>