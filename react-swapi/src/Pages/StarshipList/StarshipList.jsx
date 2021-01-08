import React, { Component } from 'react'
import { getAllStarShips } from '../../Services/api-calls'
import { Link } from 'react-router-dom'

class StarshipList extends Component {
    state = {
        starships: []
    }

    async componentDidMount() {
        const starshipData = await getAllStarShips()
        this.setState({starships: starshipData.results})
    } 

    render() {
        return (
            <>
            <div>
                {this.state.starships.map((starship) =>
                <Link
                to={{
                    pathname: '/details',
                    state: {starship}
                }}>
                <button>
                    {starship.name}
                </button>
                </Link>
                )}
            </div>
            </>
        );
    }
}


export default StarshipList