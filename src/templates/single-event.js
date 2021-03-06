import React, {Component} from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Randomevent from '../components/Event/Randomevent'
import Particles from "react-tsparticles";
import Helmet from 'react-helmet'
class SingleProject extends Component {
  render() {
    const event = this.props.data.allWpEvent
	console.log(event);
    return (
      <Layout>
			<Helmet>
			<title>{event.edges[0].node.yoastseo.title} - QL Tech</title>
			<meta name="title" content={event.edges[0].node.yoastseo.title}></meta>
			<meta name="description" content={event.edges[0].node.yoastseo.metadesc}></meta>
			 <meta name="keywords" content={event.edges[0].node.yoastseo.metakeywords}></meta>
			<meta property="og:type" content="website"></meta>
			<meta property="og:title" content={event.edges[0].node.yoastseo.opengraphtitle}></meta>
			<meta property="og:description" content={event.edges[0].node.yoastseo.opengraphdescription}></meta>
			<meta property="twitter:card" content="summary_large_image"></meta>
			<meta property="twitter:title" content={event.edges[0].node.yoastseo.title}></meta>
			<meta property="twitter:description" content={event.edges[0].node.yoastseo.twitterdescription}></meta>
			</Helmet>
			<div className="bg">
        <div className="area-bg">
			<Particles options={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
		<section className="events-section-1  pt-0" >
       <div className="container">
           <div className="main-panel">
                <div className="row justify-content-center">
                   
                    <div className="col-xl-9 col-lg-10 bg-white">
                        <h1 className="section-heading ">
                            {event.edges[0].node.title}
                        </h1>
                         
                        <div className="event-detail-continer ">
                            <div className="event-image ">
								{(event.edges[0].node.events.image != null) ? ( <img src={event.edges[0].node.events.image.sourceUrl} className="img-fluid w-100" alt=""/>) : ('')}
                               
                            </div>
                            <div className="event-date-and-place">
                                <ul className="date-and-place justify-content-start">
                                    <li><i className="fa fa-calendar"></i> <span>Date : {event.edges[0].node.events.date} </span></li>
                                    <li><i className="fa fa fa-clock-o"></i> <span>Time : 9PM - 11PM</span></li>
                                    <li><i className="fa fa-map-marker"></i> <span>Location : Ahmedabad</span></li>
                                </ul>
                            </div>
                            <div className="event-content-block">
                                <p dangerouslySetInnerHTML={{ __html: event.edges[0].node.events.longDesc}} />
                              <h2 className="section-heading text-center d-block mt-4">Gallery </h2> 
                              
                             </div>
                        </div>
                    </div>
                    
                </div>
            </div>
       </div>
    </section>
    <div className="container">
		<Lightbox images={event.edges[0].node.events.gallery} />
   
    </div>
	
	<Randomevent url={event.edges[0].node.slug} />	
		
		
		
		
			 
		</Layout>
    )
  }
}

SingleProject.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleProject

export const pageQuery = graphql`
  query($id: String!) {
    allWpEvent(filter: {id: { eq: $id }}) {
		edges {
			node {
				title
				slug
				events{
					date
					image{
						sourceUrl
					}
					longDesc
					shortDesc
					 gallery {
					id
					sourceUrl
				  }
				}
				yoastseo {
				focuskw
				title
				metarobotsnofollow
				metarobotsnoindex
				metadesc
				metakeywords
				opengraphdescription
				opengraphimage {
            sourceUrl
          }
				opengraphtitle
				twitterdescription
				twittertitle
				twitterimage
			  }
				
		}}
    }
  }
`