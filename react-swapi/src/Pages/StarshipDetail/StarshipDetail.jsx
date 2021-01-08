import React, { Component } from 'react'
 import { Link } from 'react-router-dom'

 class StarshipDetail extends Component {
     state = {
         starship: this.props.location.state.starship
     }

     render() {
         return ( 
             <div>
                 {this.state.starship.name}
                 {this.state.starship.model}
                 <Link
                 to={{
                     pathname: '/'
                 }}
                 >
                     return
                 </Link>
             </div>
         );
     }
 }

 export default StarshipDetail;