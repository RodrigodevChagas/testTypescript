// const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=breaking%20bad';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e67fc36863msh67083d64824cb52p12baccjsn4d6e8c18a83b',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };

// try {
//     getApiResponse();
// } catch (error) {
//     console.error(error);
// }
// async function  getApiResponse() {
// const response = await fetch(url, options);
// const result = await response.json();
// console.log(result);
// }

//got = tt0944947

const url = 'https://imdb8.p.rapidapi.com/title/get-ratings?tconst=tt0903747';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e67fc36863msh67083d64824cb52p12baccjsn4d6e8c18a83b',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

try {
    getApiResponse();
} catch (error) {
    console.error(error);
}
async function  getApiResponse() {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
}