import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'
import thumbnial from '../../img/career/thumbnial.jpg'


const settings = {
      dots: false,
      infinite: true,
      speed: 500,
	  autoplay: true,
		autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
	    mobileFirst: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        dots: true
      }
    }
  ]
    };
const CareerSlider = () => (
  <StaticQuery
    query={graphql`
      query {
        allWpWorkpage {
                    edges {
                      node {
                        workpage1section1 {
                          buttonLink
                          buttonName
                          shortDescrpition
                          title
                          image {
                            sourceUrl
                          }
                        }
                      }
                    }
                  }
		}
    `}
    render={data => (
		<section className="career-section-01">
		<div className="container"><div className="main-panel" >
		<Slider {...settings} className="career-slider-1" >
			  {data &&
                            data.allWpWorkpage &&
                            data.allWpWorkpage.edges.map(
                            prop => {
                            return (   
                                <div className="slide">
                                    <div className="row justify-content-center">
                                        <div className="col-md-5">
                                            <h1 className="section-heading mb-3">{prop.node.workpage1section1.title}</h1>
                                            <p className="label-text">
                                            {prop.node.workpage1section1.shortDescrpition}
                                            </p>
                                            <a href="javascript:;" className="btn btn-default apply">
                                                {prop.node.workpage1section1.buttonName}
                                            </a>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={prop.node.workpage1section1.image.sourceUrl} className="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                   )
                                }
                            )} 
		</Slider>
			</div>
			</div>
		</section>  
			
    )}
	/>
)

export default CareerSlider
