import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Particles from "react-tsparticles";
import Helmet from 'react-helmet'
import quote from  "../img/quote.png"
import ContactPlatform from '../components/Contact/ContactPlatform'
import ReactModal from 'react-modal'
import ReactWOW from 'react-wow'
class Singleplatform extends Component {
	
	constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
        testimonial_img: "",
        testimonial_name: "",
        testimonial_designation: "",
        testimonial_text: "",
        show: "d-block",
      }
    }
	 handleModalOpen = (img,name,des,desc) => {
        this.setState({ isModalOpen: true,testimonial_img:img,testimonial_name:name,testimonial_designation:des,testimonial_text:desc })
		
    }

    handleModalClose = event => {
		this.setState({ isModalOpen: false })
    }
	
  render() {
    const platform = this.props.data.allWpPlatform
	 const works = this.props.data.allWpWork
    return (
      <Layout>
			<Helmet>
			<title>{platform.edges[0].node.yoastseo.title} - QL Tech</title>
			<meta name="title" content={platform.edges[0].node.yoastseo.title}></meta>
			<meta name="description" content={platform.edges[0].node.yoastseo.metadesc}></meta>
			 <meta name="keywords" content={platform.edges[0].node.yoastseo.metakeywords}></meta>
			<meta property="og:type" content="website"></meta>
			<meta property="og:title" content={platform.edges[0].node.yoastseo.opengraphtitle}></meta>
			<meta property="og:description" content={platform.edges[0].node.yoastseo.opengraphdescription}></meta>
			<meta property="twitter:card" content="summary_large_image"></meta>
			<meta property="twitter:title" content={platform.edges[0].node.yoastseo.title}></meta>
			<meta property="twitter:description" content={platform.edges[0].node.yoastseo.twitterdescription}></meta>
			</Helmet>
			<div className="bg">
        <div className="area-bg">
			<Particles options={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
		
			
			
			<section className="events-section-1 article-section-1 blog-section pt-0">
				<div className="container bg-white">
					<div className="main-panel">
						<div className="row justify-content-center">
							<div className="col-xl-9 col-lg-10">
								<div className="event-content-block">
										<h1 className="section-heading mb-2">{platform.edges[0].node.title}</h1>
										<div className="label-text" dangerouslySetInnerHTML={{ __html: platform.edges[0].node.content }}>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			{(platform.edges[0].node.Servicestestimonial.image != null) ? (<section className="home-testimonial-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 ">
                    <span className="section-subheading-heading">Testimonial</span> 
                    <ReactWOW  animation='fadeIn'>
					<h2 className="section-heading text-center  ">
                        Our customers loves us
                    </h2>
					</ReactWOW>
                </div>
            </div>
        </div>
        
        <div className="testiomonial-slider ">
            <div className="customer-testimonial-block">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-6">
                            <div className="author-image">
                                <img src={(platform.edges[0].node.Servicestestimonial.image != null) ? platform.edges[0].node.Servicestestimonial.image.sourceUrl : ''} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                            <div className="author-content">
                                <div className="quote">
                                    <img src={quote} className="img-fluid" alt=""/>
                                </div>
                                
								
								<span>{(platform.edges[0].node.Servicestestimonial.testimonial).substring(0, 400)}</span>
                                              {(platform.edges[0].node.Servicestestimonial.testimonial.length  > 400 ? (<span>...<a href="javascript:;" className="readmore" onClick={() => this.handleModalOpen(platform.edges[0].node.Servicestestimonial.image.sourceUrl,platform.edges[0].node.Servicestestimonial.clientName,platform.edges[0].node.Servicestestimonial.designationcompany,platform.edges[0].node.Servicestestimonial.testimonial)}>Read More</a></span>):(''))}
								
                                <div className="author-info">
                                    <h4 dangerouslySetInnerHTML={{ __html: platform.edges[0].node.Servicestestimonial.clientName}} ></h4>
                                    <p dangerouslySetInnerHTML={{ __html: platform.edges[0].node.Servicestestimonial.designationcompany}} ></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>):('')}
			
			
			<section className="home-about-section pt-4 pb-4 bg-white">
        <div className="container">
           
            <div className="row justify-content-start">
                <div className="col-md-12">
                    <ReactWOW  animation='fadeInUp'>
					<div className="about-content xs-center sm-center wow fadeInUp">
                        <span className="sub-heading text-center d-block mb-0">FAQs</span>
                        <h3 className="section-heading text-center"></h3>
                         <div id="accordion" className="faq-section mt-4">
                                
								{platform.edges[0].node.ServicesFAQ.faq &&
									platform.edges[0].node.ServicesFAQ.faq.map(
									(prop,i) => {
									return (
										<div key={i} className="card">
										<div className="card-header collapsed bg-white row  m-0" data-toggle="collapse" href={"#faq"+i} role="tab">
											<span className="toggle-icon"></span> {prop.question}
										</div>
										<div id={"faq"+i} className="collapse" role="tabpanel" data-parent="#accordion" >
											<div className="card-body">
												<p className="label-text">
													{prop.answer}
												</p>
											</div>
										</div>
									</div>
									)
								}
								)}
								
								
								
								
                            </div>
                    </div>
					</ReactWOW>
                </div>
            </div>
            
        </div>
        
    </section>
	<section className="home-work-section home-work-section-details pt-4  ">
        
        <div className="container bg-white">
               
            <div className="row">
                <div className="col-md-12">
                    
                        <span className="section-subheading-heading">Our Success</span> 
                        <ReactWOW  animation='fadeInUp'>
						<h2 className="section-heading text-center wow fadeIn" >
                            See it in Action
                        </h2>
						</ReactWOW>
                    <div className=" pt-0">
                        <ReactWOW  animation='fadeInUp'>
						<div className="home-portfolio-slider-1 wow  animated" >
                            <div className="row">
							{
							works &&
							works.edges.map(
							prop => {
								return (
                                <div className="col-md-4">
                                   <div className="work-thumbnial">
                                       <div className="work-thumbnail-image">
                                           <img src={prop.node.work.mainImage.sourceUrl} className="img-fluid" alt=""/>
                                       </div>
                                       <div className="work-thumbnail-details">
                                           <p className="work-title" dangerouslySetInnerHTML={{ __html: prop.node.work.title }}  ></p>
                                           <p className="label-text">{prop.node.work.shortDescprition}</p>
                                           <Link to={"/work/"+prop.node.slug+"/"} className="btn btn-secondary-link">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
                                       </div>
                                   </div>
                               </div>
							   )
							}
							)}
							   
                            </div>
                            
                            
                        </div>
						</ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    </section>	
<section className="form-section mt-4 ">
            <div className="container  bg-white">
                <div className="row justify-content-center">
                    <div className="col-md-10">
					<span className=" sub-heading d-block mb-2 text-center mb-2" >Contact Us</span>
                        <ReactWOW  animation='fadeInUp'>
						<h2 className="section-heading text-center wow fadeIn mb-2">
                            Let us know how we can help
                        </h2>
						</ReactWOW>

                    </div>
                </div>
                <div className="main-panel">
                    <ContactPlatform url={"platform/"+platform.edges[0].node.slug} />
                </div>
            </div>
    </section>	
	<ReactModal  
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
            className="modal d-block fade testimonial-view show"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg " tabindex="-1" role="dialog">
          <div class="modal-content " >
              <button type="button" class="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
        
            <div class="modal-body p-4">
                <div class="row justify-content-center">
                    
                    <div class="col-xl-12">
                        <div class="author-content">
                            <div class="quote">
                                <img src={quote} class="img-fluid" alt=""/>
                            </div>
                            <p class="label-text testimonialDetail"></p>
                            <div class="author-info">
                                <div className="author-content">
                                         
                                          <p className="label-text">
                                              <span>{this.state.testimonial_text}</span>
                                          </p>
										  <div className="author-details-block">
											<div className="author-image text-center">
												<img src={this.state.testimonial_img} className="img-fluid d-inline" alt={this.state.testimonial_name} />
											</div>
											 <div className="author-info">

												
                                              <h4>{this.state.testimonial_name}</h4>
                                              <p>{this.state.testimonial_designation}</p>
                                          </div>
										  
										  </div>
                                         
                                      </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
          </div>
        </div>
       
          
      
      
        </ReactModal>
		</Layout>
    )
  }
}

Singleplatform.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleplatform

export const pageQuery = graphql`
  query($id: String!,$casestudyids: [Int]) {
    allWpPlatform(filter: {id: { eq: $id }}) {
		edges {
			node {
				title
				content
				slug
				ServicesFAQ {
					faq {
						answer
						question
					}
				}
				Servicestestimonial {
					clientName
					designationcompany
					testimonial
					image {
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
	allWpWork(filter: {databaseId: {in: $casestudyids}},sort: {fields: databaseId, order: ASC}) {
    edges {
      node {
				title
				slug
				work{
					title
					shortDescprition
					mainImage {
                                sourceUrl
                                
                              }
				}
				
		}
    }
  }
	
  }
`