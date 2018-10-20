/* This is an utils file that will fetch the data
   like projects, work, skills, etc...
*/
/**
 * Get data from the public folder.
 * @param {string} file - The file to fetch from the server.
 * @return {object} - A promise with the json response.
 */
export const getData = file => (
	fetch(`${process.env.PUBLIC_URL}/data/${file}.json`)
		.then( response => response.json() )
);

/**
 * Sort a data array by date.
 * @param {array} arr - The array to sort.
 * @param {string} by - How to sort the array, by newest or oldest first.
 * @return {array} - The new sorted array.
 */
export const sortByDate = (arr, by) => {
	if (by === 'newest') return arr.sort( (a, b) => b.endDate.num - a.endDate.num);
	if (by === 'oldest') return arr.sort( (a, b) => a.endDate.num - b.endDate.num);
};

/**
 * Sort a data array by title.
 * @param {array} arr - The array to sort.
 * @param {string} by - Sort by ascending or descending based on title.
 * @return {array} - The new sorted array.
 */
export const sortByTitle = (arr, by) => {
	if (by === 'ascending') return arr.sort( (a, b) => sortAlphabetical(a.title, b.title) );
	if (by === 'descending') return arr.sort( (a, b) => sortAlphabetical(b.title, a.title) );
}

/**
 * Sort an array alphabetical with the compare function.
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @return {number} - A number for the compare function to sort the array.
 */
const sortAlphabetical = (a, b) => {
	let x = a.toLowerCase(),
		y = b.toLowerCase();
	if (x < y) return -1;
	if (x > y) return 1;
	return 0;
};
