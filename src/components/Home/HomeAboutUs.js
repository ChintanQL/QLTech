import React, {Component} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import img from '../../img/about-us.png';
import ReactModal from 'react-modal'
import ReactWOW from 'react-wow'




class HomeAboutUsData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      testimonial_img: "",
      testimonial_name: "",
      testimonial_designation: "",
      testimonial_text: "",
    }
  }
	handleModalOpen = () => {
		this.setState({ isModalOpen: true})
	
	}
  
	handleModalClose = event => {
	this.setState({ isModalOpen: false })
	}


render() {
  //const posts = this.props.data.allMarkdownRemark.node
 const AboutUsData = this.props.data.allWpHomeAboutUs;
  return(
      <>

         
<section className="home-about-section bg-white">
        <div className="container">
            <ReactWOW animation='fadeIn' >
			<div className="about-mockup-bg">
               
            </div>
            </ReactWOW>

            <div className="row justify-content-end">
			<div className="col-md-5 col-lg-6 col-sm-12 text-center">
				 <img data-src={img} className="img-fluid d-inline lazyload" alt="" />
			</div>
                <div className="col-md-7 col-lg-6 col-sm-12 ">
                    <ReactWOW animation='fadeInUp' >
					<div className="about-content xs-center sm-center">
                        <h4 className="sub-heading ">About us</h4>
                        {AboutUsData && AboutUsData && AboutUsData.edges.map(
     
                
                    
                
                          prop => {
                          return ( 
                  <div>
                        <h3 className="section-heading">{prop.node.homeAbout.title}</h3>
                        <p className="label-text">{prop.node.homeAbout.shortDescprition}</p>
                        <p className="text-primary font-weight-bold">{prop.node.homeAbout.boldcontent}</p>
                        <div  className="play-button" onClick={() => this.handleModalOpen()}>
                            <span data-video-id="" className="video-area-popup">
                                <i className="fa fa-play"></i></span>
                            <span>Check out our quick introduction</span>
                        </div>
                    </div>
                         )
                }
              )}
                    </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
      
    </section>
<ReactModal  
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleModalClose}
          className="modal d-block fade testimonial-view show"
      >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content ">
            <button type="button" className="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
      
          <div className="modal-body p-0">
          <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/pozK-668Ams?rel=0" allowfullscreen></iframe>
            </div>
              
          </div>
        
        </div>
      </div>
     
        
    
    
      </ReactModal>
        </>
)

}
}






const HomeAboutUs = () => (
  <StaticQuery
    query={graphql`
      query {
          allWpHomeAboutUs {
            edges {
              node {
                id
                homeAbout {
                  title
                  shortDescprition
                  boldcontent
                }
              }
            }
          }
            
        }
    `}
    render={(data) => <HomeAboutUsData data={data} />}
  
	/>
)

export default HomeAboutUs
