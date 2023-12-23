import { useState, useEffect } from 'react';

const Marker = (options) => {
  const [marker, setMarker] = useState();
  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());      
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {      
      marker.setOptions(options);
      let infoWindow = new google.maps.InfoWindow();
      infoWindow.setContent("<div class='popup' style='width:130px;text-align:center;'><img src='"+options.img+"' style='width:100%;display:block;margin-bottom:10px;' />"+options.title+"</div>");
                                  
      google.maps.event.addListener(marker, 'mouseover', function() {
        marker.setIcon("/pinHover.png");
        infoWindow.open(options.map,marker)
      });
      google.maps.event.addListener(marker, 'mouseout', function() {
        marker.setIcon("/pinIcon.png");
        infoWindow.close()
      });
        if (options.activeMarker && options.activeMarker == options.id){
          options.map.panTo(marker.getPosition());
          options.map.setZoom(18);
          marker.setIcon("/pinHover.png");
          infoWindow.open(options.map,marker)
        }
    }
  }, [marker, options]);

  return null;
};

export default Marker;
