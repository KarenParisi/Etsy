import data from 'api/data.json';

export function getResults() {
	return data.results.filter(function(result){
		if (result.title.indexOf("Whiskey") !== -1) {
			return result;
			} else { 
			return null;
			}
		}
	});
}
