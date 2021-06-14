import React, { Component } from 'react';



class Portfolio extends Component {

  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title} target="_blank">
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })

        var drawings = this.props.data.drawings.map(function(drawing){
            var projectImage = 'images/portfolio/'+drawing.image;
            return <div key={drawing.title} className="columns portfolio-item" onClick={increaseWidthFunc} >
                <div className="item-wrap">
                    <img alt={drawing.title} src={projectImage} />
                </div>
            </div>
        })



    }

      function increaseWidthFunc(e) {
            e.stopPropagation();
          e.currentTarget.classList.add("increase-width-class");
          var siblingList = e.currentTarget.parentElement.children;
          for(let sibling of siblingList){
              if(sibling !== e.currentTarget){
                  sibling.classList.add("hide-class");
              }
          }
      }

      function decreaseWidthFunc(e) {
          e.currentTarget.getElementsByClassName("increase-width-class").item(0).classList.remove("increase-width-class");
          var siblingList = e.currentTarget.getElementsByClassName("portfolio-item");
          for (let sibling of siblingList) {
              sibling.classList.remove("hide-class");
          }
      }



    function enterFunc(e)  {
        if(e.currentTarget.classList.contains("twelve") && !e.currentTarget.classList.contains("bg-color-grey")){
            e.currentTarget.classList.add("bg-color-grey");
            e.currentTarget.getElementsByTagName("h1").item(0).classList.add("text-color-white");
            if(e.currentTarget.nextElementSibling != null){
                e.currentTarget.nextElementSibling.classList.remove("bg-color-grey");
                e.currentTarget.nextElementSibling.getElementsByTagName("h1").item(0).classList.remove("text-color-white");
            } else{
                e.currentTarget.previousElementSibling.classList.remove("bg-color-grey");
                e.currentTarget.previousElementSibling.getElementsByTagName("h1").item(0).classList.remove("text-color-white");
            }
        }

    }


    return (
      <section id="portfolio">

      <div className="row mfp-inline-holder" style={{maxWidth: "100%", display: "flex"}} onClick={decreaseWidthFunc}>

         <div className="twelve columns collapsed bg-color-grey" onMouseEnter={enterFunc}>

            <h1 className="text-color-white">My Thoughts</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>

         <div className="twelve columns collapsed" onMouseEnter={enterFunc}>

            <h1>My Art</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {drawings}
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;

