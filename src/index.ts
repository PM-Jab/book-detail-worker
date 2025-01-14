import bookMetadataHandler from './handler/bookMetadataHandler';

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS, PUT, DELETE',
	'Access-Control-Allow-Headers': 'X-Custom-Auth-Key, Range',
};

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		console.log('request', url);
		console.log('params', url.searchParams);
		const bookProfileMetadata = bookMetadataHandler(request, env, ctx);

		const headers = new Headers();
		headers.set('Content-Type', 'application/json');

		headers.set('Access-Control-Allow-Origin', '*');
		headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');

		console.log('bookProfileMetadata: ', bookProfileMetadata);

		return new Response(JSON.stringify(bookProfileMetadata), {
			status: 200,
			headers: corsHeaders,
		});
	},
} satisfies ExportedHandler<Env>;
