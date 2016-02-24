console.log($)

console.log("hello world")

var apiKey = '6b4e43a15a744d6cbf0c9971a3350932'

var baseUrl = 'http://openstates.org/api/v1/legislators/?state=ny&apikey='
var fullUrl = baseUrl + apiKey

$.getJSON(fullUrl)

var promise = $.getJSON(fullUrl)



var legislatorToHTML = function(legislatorObject) {
	var newString = '<img src ="' + legislatorObject.photo_url + '">'
	var phoneNo = legislatorObject.offices[0].phone
	var email = legislatorObject.offices[0].email
	var state = legislatorObject.state.toUpperCase()
	var picURL = legislatorObject.photo_url
	var containerEl = document.querySelector("#container")
	containerEl.innerHTML = legislatorToHTML

}

var handleData = function(resultArray) {
	var htmlString =''
	for (var i = 0; i < 10; i++) {
		console.log(resultArray[i])
		var legislatorObject = resultArray[i]
		htmlString += legislatorToHTML(legislatorObject)
	}
	var containerEl = document.querySelector("#container")
	containerEl.innerHTML = htmlString
}
	
promise.then(legislatorToHTML) 

