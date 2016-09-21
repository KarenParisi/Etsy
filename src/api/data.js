import data from 'api/data.json';

export function getImages() {
	return data.results.map(function(result){
		return {
			id: result.listing_id,
			image: result.Images[0].url_75x75
			
		}
	});
}


// var newArr = data.results.map(function(item){
// return item.Images[0].url_75x75
// })












// export function getResults() {
// 	return data.results.filter(function(result){
// 		if (result.title.indexOf("Whiskey") !== -1) {
// 			return result;
// 			} else { 
// 			return null;
// 			}
// 		}
// 	});
// }






// export function getResults() {
// 	return data.results.filter(function(result){
// 		if (result.title.indexOf("Whiskey") !== -1) {
// 			return result;
// 			} else { 
// 			return null;
// 			}
// 		}
// 	});
// }
