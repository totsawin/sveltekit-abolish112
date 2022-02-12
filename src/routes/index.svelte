<script>
	import { onMount } from 'svelte';
    import { Temporal } from '@js-temporal/polyfill';
	const todayDate = Temporal.Now.plainDateISO();
	let activists = [];

	function getNumberOfDaysUnderDetained(detainedDuration) {
		return detainedDuration.reduce((acc, {detainedDate, releasedDate }) => {
			const detainedDateTemporal = Temporal.PlainDate.from(detainedDate);
			const releasedDateTemporal = releasedDate ? Temporal.PlainDate.from(releasedDate): todayDate;
			return acc + detainedDateTemporal.until(releasedDateTemporal, { largestUnit: 'days' }).days;
			},0 );
	}

	onMount(async () => {
		await fetch("/api/activists")
			.then(response => response.json())
			.then(data => {
			activists = data.map(activist => {
				return {
				...activist,
				detainedDays: getNumberOfDaysUnderDetained(activist.detainedDuration)
				};
			})
			}).catch(error => {
			console.log(error);
		});
	});
</script>
{#if activists}
	<main class="activists">
		{#each activists as activist}
			<div class="individual">
				<div class="individual__name">
					{ activist.name }
				</div>
				<div class="individual__caption">      
					<span>{ activist.detainedDays } Days Held Under Pre-Trial Detention</span>
				</div>
				<div class="individual__image">
					<img src="./assets/{activist.nickname}.jpg" alt="{activist.name}"/>
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