<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  const [ dataWithoutEscapeHandling, errorWithoutEscapeHandling ] = data.tokenVerifiedWithoutEscapeHandling;
  const [ dataWithEscapeHandling, errorWithEscapeHandling ] = data.tokenVerifiedWithEscapeHandling;
</script>

<h1>Example of formatting issue</h1>
<p>{ data.token }</p>

<textarea rows="8" cols="65">{data.publicKey}</textarea>

<h2>Verification with Public env key AS-IS</h2>
{#if errorWithoutEscapeHandling}
<p>Verification failed with error: {errorWithoutEscapeHandling}</p>
{:else}
<p>Success: {JSON.stringify(dataWithoutEscapeHandling)}</p>
{/if}

<h2>Verification with Public env key with escaped newlines</h2>
{#if errorWithEscapeHandling}
<p>Verification failed with error: {errorWithEscapeHandling}</p>
{:else}
<p>Success: {JSON.stringify(dataWithEscapeHandling)}</p>
{/if}
