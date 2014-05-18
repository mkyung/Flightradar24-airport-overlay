(function(){
	var overlays = []
	var $checkboxContainer = $("<div style='margin-left: 10px; color: white;'></div>")

	AirportOverlay.prototype = new google.maps.OverlayView();

	function AirportOverlay(bounds, image, map) {
		this.bounds_ = bounds;
		this.image_ = image;
		this.map_ = map;
		this.div_ = null;
		this.setMap(map);
	}

	AirportOverlay.prototype.onAdd = function() {

		var div = document.createElement('div');
		div.style.borderStyle = 'none';
		div.style.borderWidth = '0px';
		div.style.position = 'absolute';
		var img = document.createElement('img');
		img.src = this.image_;
		img.className = "fr24-airport-overlay";
		img.style.width = '100%';
		img.style.height = '100%';
		img.style.opacity = 0.7;
		img.style.position = 'absolute';
		div.appendChild(img);

		this.div_ = div;
		var panes = this.getPanes();
		panes.overlayLayer.appendChild(div);
	};

	AirportOverlay.prototype.draw = function() {
		var overlayProjection = this.getProjection();
		var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
		var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());
		var div = this.div_;
		div.style.left = sw.x + 'px';
		div.style.top = ne.y + 'px';
		div.style.width = (ne.x - sw.x) + 'px';
		div.style.height = (sw.y - ne.y) + 'px';
	};

	AirportOverlay.prototype.onRemove = function() {
		this.div_.parentNode.removeChild(this.div_);
		this.div_ = null;
	};

	function getPath(){
		var src = $("#fr24-airport-overlay").attr("src").replace(/.*?:\/\//g, "");
		return src.replace("js/fr24-airport-overlay.js", "")

	}

	for(var i in fr24_airport_overlay_data){
		var d = fr24_airport_overlay_data[i]
		var neBound = new google.maps.LatLng(d.neBoundLat, d.neBoundLng);
		var swBound = new google.maps.LatLng(d.swBoundLat, d.swBoundLng);
		var bounds = new google.maps.LatLngBounds(swBound, neBound);
		var srcImage = '//' + getPath() + 'images/airports/' + d.image
		var overlay = new AirportOverlay(bounds, srcImage, map);
		overlays.push(overlay)

		var $checkbox = $("<div style='display: inline-block; width: 100%;'><input name='fr24-airport-overlay-choice' value="+i+" type='checkbox' style='display: block; float: left; width: 10%;' checked><div style='float: left; width: 90%;'>"+d.name+"</div></div>")
		$checkboxContainer.append($checkbox)
	}

	$("#mainView").append($checkboxContainer)
	$(document).on("change", "input[name=fr24-airport-overlay-choice]", function(){
		var idx = parseInt($(this).val())
		if($(this).is(":checked")){
			$(overlays[idx].div_).slideDown()
		}else{
			$(overlays[idx].div_).slideUp()
		}
	})

})()




