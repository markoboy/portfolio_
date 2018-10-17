/* This is an utils file that will fetch the data
   like projects, work, skills, etc...
*/
/**
 * Get data from the public folder.
 * @param {string} file - The file to fetch from the server.
 * @return {object} - A promise with the json response.
 */
export const getData = file => (
	fetch(`/data/${file}.json`)
		.then( response => response.json() )
);
