import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const SingleWorksheet = () => (
  <StaticQuery
    query={graphql`
		query {
			allWpWorksheet(limit: 3) {
				edges {
				  node {
					id
					title
					slug
					content
					BlogExtra {
					  featureImage{
						  sourceUrl
					  }
					  
					}
				  }
				}
			  }
		}
    `}
    render={data => (
				<div className="row" >
				{data &&
				data.allWpWorksheet &&
				data.allWpWorksheet.edges &&
				data.allWpWorksheet.edges.map(
                prop => {
					return (
							<div className="col-lg-4 col-md-6 thumbnial" >
                                 <div className="">
                                     <div className="img-thumbnial">
										 {(prop.node.BlogExtra.featureImage != null) ? (<img src={prop.node.BlogExtra.featureImage.sourceUrl} className="img-fluid w-100"/>) : ('')}
                                     </div>
                                </div>
                                <div className="thumbnial-content">
                                    <h2 dangerouslySetInnerHTML={{ __html: prop.node.title}}  className="thumbnial-title"/>
                                    <p className="thumbnial-details" dangerouslySetInnerHTML={{ __html: (prop.node.content).substring(0, 250)+"...."}} />
                                    <Link to={"/worksheet/"+prop.node.slug+"/"} className="btn btn-secondary-link  float-left">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
                                </div>
							</div>
                            
					)
                }
                )}
				</div>
			
    )}
	/>
)

export default SingleWorksheet
