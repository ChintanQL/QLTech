import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const IndustriesHeader = () => (
  <StaticQuery	
    query={graphql`
      query {
         allWpIndustries {
    edges {
      node {
        title
        slug
      }
    }
  }
		}
    `}
    render={data => (
			  <ul className="dropdown-menu-ul-list">
                                     
				{data &&
				data.allWpIndustries &&
				data.allWpIndustries.edges &&
				data.allWpIndustries.edges.map(
                prop => {
					return (
					<li>
                                           <Link to={"/industries/"+prop.node.slug+"/"} className="dropdown-item mt-1">
                                               <span className="dropdown-menu-li-list" dangerouslySetInnerHTML={{ __html: prop.node.title}}></span>
                                           </Link>
                                       </li>
					)
                }
                )}
									 
                                      
                                   </ul>
    )}
	/>
)

export default IndustriesHeader
