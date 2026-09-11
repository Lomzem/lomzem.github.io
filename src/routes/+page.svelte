<script lang="ts">
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';

	const projects = [
		{ name: 'dotfiles', description: 'My Linux configuration files.' },
		{ name: 'meettime', description: 'Find meeting times for Chico State clubs.' },
		{ name: 'everest', description: 'A visual editor for SystemRDL registers and fields.' },
		{ name: 'imgcomp', description: 'Compress images in your browser.' }
	];
</script>

<svelte:head>
	<title>Lawjay | Lomzem</title>
	<meta
		name="description"
		content="Hello, my name is Lawjay! Here are some projects I've worked on recently."
	/>
</svelte:head>

<main class="mx-auto max-w-xl px-6 pt-16 pb-12 sm:pt-24">
	<header>
		<div class="mb-6 flex items-center justify-between gap-4">
			<a
				href="https://github.com/Lomzem"
				class="inline-flex items-center gap-3 rounded-sm text-sm underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
			>
				<Avatar.Root class="size-12">
					<Avatar.Image
						src="https://avatars.githubusercontent.com/u/36811841?v=4&s=96"
						alt=""
						width={48}
						height={48}
					/>
					<Avatar.Fallback aria-hidden="true">L</Avatar.Fallback>
				</Avatar.Root>
				<span class="font-mono">@Lomzem</span>
			</a>
			<ThemeToggle />
		</div>
		<h1 class="pt-1 text-2xl leading-tight font-medium tracking-tight">
			Hello, my name is Lawjay!
		</h1>
		<p class="mt-3 leading-relaxed text-muted-foreground">
			Spelled <span class="font-mono text-sm text-foreground">Lom zem</span> in
			<a
				class="underline underline-offset-4 hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
				href="https://www.britannica.com/topic/Hmong">Hmong</a
			>, meaning "fun".
		</p>
	</header>

	<section class="mt-10" aria-labelledby="projects-heading">
		<h2 id="projects-heading" class="text-base font-normal">
			Here are some projects I've worked on recently.
		</h2>
		<ul class="mt-6 space-y-5">
			{#each projects as project (project.name)}
				<li>
					<a
						class="font-mono text-sm font-medium underline underline-offset-4 hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
						href={`https://github.com/Lomzem/${project.name}`}>{project.name}</a
					>
					<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
				</li>
			{/each}
		</ul>
	</section>
</main>
