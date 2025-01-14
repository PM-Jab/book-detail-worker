import { getBookProfileMetadata } from '../service/bookMetadataService';

const bookMetadataHandler = (request: any, env: any, ctx: any) => {
	// handle book metadata
	const url = new URL(request.url);
	const bookTitle = url.searchParams.get('title') || '';
	console.log('bookTitle: ', bookTitle);
	const bookMetadata = getBookProfileMetadata(env, bookTitle);
	return bookMetadata;
};

export default bookMetadataHandler;
