import React from "react";

class MapPro extends React.Component {
    constructor(props) {
        super(props);
      }

   

    componentDidMount() {
        this.$el = $(this.el);    
        let floorData = this.props.floors;
        let theData = JSON.parse(this.props.map);
        // if(this.props.floor){
        //   console.log(floorData)
        //   floorData.sort(function(a, b) { 
        //     return a.info.slug - b.info.slug;
        //   });
        // }
        
        for(let s in theData.spots) {
            theData.spots[s].default_style = {fill_opacity: 0};

            if(theData.spots[s].actions && theData.spots[s].actions.link){
                    theData.spots[s].actions.link = "#"+theData.spots[s].actions.link;
            }
                    theData.spots[s].mouseover_style = {fill:"#1fa74d",fill_opacity:0.6};
                    theData.spots[s].tooltip_style = {position:"left"};
            if(theData.spots[s].actions){
              theData.spots[s].actions.mouseover = "no-action";
            }

            if(floorData.length > 0 && floorData[s]?.status != 1) {
              theData.spots[s].actions = {click: "no-action"};
              theData.spots[s].mouseover_style = {fill:"#c5c5c5",fill_opacity:0.6};
            }
            if(this.props.floor){

              let full_area = (floorData[s].summer_area + floorData[s].living_area).toFixed(2); 
              theData.spots[s].actions.mouseover = "show-tooltip";
              theData.spots[s].tooltip_style = {position:"left"};
              theData.spots[s].tooltip_style.width="90";
              theData.spots[s].tooltip_style.padding="0";
			  
			  let gayidulia = "<span class='normal'>გაყიდულია</span>";
			  if(floorData[s]?.status == 1){
				  gayidulia = '';
			  }
              theData.spots[s].tooltip_content = {plain_text:"<span class='normal'>"+this.props.flatt+" N"+floorData[s].info.title+"<span class='size'>"+full_area+" M<span class='mk'>2</span></span>"+gayidulia+"</span>"};

            }
        }
        if(this.props.floor){
          theData.tooltips = {tooltip_animation: "fade"};
        }
        
        this.$el.find('div').imageMapPro(theData);
        
        this.timer = setTimeout(() => { 
          if(document.querySelector('#image-map-pro-container polygon')){
            if(!this.props.floor){
              document.querySelector('#image-map-pro-container polygon[data-index="0"]').classList.add('active'); 
              for(let i = 0; i < document.querySelectorAll('#image-map-pro-container polygon').length; i++){
                document.querySelectorAll('#image-map-pro-container polygon')[i].addEventListener('mouseover',removeActive);
              }
            }
            if(this.props.active_flat){
              for(let s in theData.spots) {
                if(floorData[s].id == this.props.active_flat.id){
                  for(let i =0; i<document.querySelectorAll('.imp-initialized').length;i++){
                    document.querySelectorAll('.imp-initialized')[i].querySelector('.imp-shape-container polygon[data-index="'+s+'"]').classList.add('active'); 
                    
                  }  
                }                
              }
              
            }
          }
          $(".mapPro").addClass('active') 
        },100);

        function removeActive(){
          if(document.querySelector('#image-map-pro-container polygon.active'))
            document.querySelector('#image-map-pro-container polygon.active').classList.remove('active');
        }
    }

    
  
    componentDidUpdate(){
      //if(this.props.floorLayout && !this.props.mapProReload)return false;
     
     
 
      if(this.$el !== null) {
        let elem = this.$el[0]
        //let currentDiv = elem.parentNode;
        //console.log(currentDiv);
        //if (!currentDiv) return false;

        elem.removeChild(elem.firstChild);
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "image-map-pro-container");
        elem.appendChild(newDiv);
  
        let floorData = this.props.floors;
		
        let theData = JSON.parse(this.props.map);
        for(let s in theData.spots) {
          theData.spots[s].default_style = {fill_opacity: 0};

          if(theData.spots[s].actions && theData.spots[s].actions.link){
                  theData.spots[s].actions.link = "#"+theData.spots[s].actions.link;
          }
                  theData.spots[s].mouseover_style = {fill:"#1fa74d",fill_opacity:0.6};
                  theData.spots[s].tooltip_style = {position:"left"};
          if(theData.spots[s].actions){
            theData.spots[s].actions.mouseover = "no-action";
          }

          if(floorData.length > 0 && floorData[s]?.status != 1) {
            theData.spots[s].actions = {click: "no-action"};
            theData.spots[s].mouseover_style = {fill:"#c5c5c5",fill_opacity:0.6};
          }
          if(this.props.floor){

            let full_area = (floorData[s].summer_area + floorData[s].living_area).toFixed(2); 
            theData.spots[s].actions.mouseover = "show-tooltip";
            theData.spots[s].tooltip_style = {position:"left"};
            theData.spots[s].tooltip_style.width="90";
            theData.spots[s].tooltip_style.padding="0";
			
			  let gayidulia = "<span class='normal'>გაყიდულია</span>";
			  if(floorData[s]?.status == 1){
				  gayidulia = '';
			  }
            theData.spots[s].tooltip_content = {plain_text:"<span class='normal' >"+this.props.flatt+" N"+floorData[s].info.title+"<span class='size'>"+full_area+" M<span class='mk'>2</span></span>"+gayidulia+"</span>"};

          }
      }
        
        this.$el.find('div').imageMapPro(theData);
        this.timer = setTimeout(() => { 
          
          if(document.querySelector('#image-map-pro-container polygon')){
            if(this.props.active_flat){
              for(let s in theData.spots) {
                if(floorData[s].id == this.props.active_flat.id){
                  for(let i =0; i<document.querySelectorAll('.imp-initialized').length;i++){
                    document.querySelectorAll('.imp-initialized')[i].querySelector('.imp-shape-container polygon[data-index="'+s+'"]').classList.add('active'); 
                  }                  
                }                
              }
              
            }
          }
          
        },10);
        $(".mapPro").addClass('active') 
       
                  
      }

    }

      componentWillUnmount() {
        clearTimeout(this.timer);
      }
  render() {

    return <div className="mapPro" id="mappro" ref={el => this.el = el}><div  id="image-map-pro-container" ></div></div>;
  }
}

export default MapPro;