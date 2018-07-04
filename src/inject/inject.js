chrome.extension.sendMessage({}, function(response) {
  function showAllDates(){
    console.log(Array.from(document.getElementsByClassName("event-info-box")).map(box => {
      let venue = box.getElementsByClassName("event-info-box-venue-text")[0] || box.getElementsByClassName("event-info-box-venue-link")[0] || null;
      let time = box.getElementsByClassName("event-info-box-date")[0] || null;
      return [venue && venue.innerText, time && time.innerText]
    }));
  }

  function addMapBox() {
    let targetElement = document.getElementById("root-event-search-calendar");
    var map = new google.maps.Map(targetElement, {
      zoom: 14,
      center: {
        lat: -79.4260899,
        lng: 43.6525052
      }
    })
  }
	var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      showAllDates();
      addMapBox();
    }
	}, 10);

});
