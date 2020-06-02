import React, { Component } from 'react';
import Loader from '../../components/Loader';
import './index.css';

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
          .then((response) => response.json())
          .then(json => this.setState({ show: json }))
    }

    render() {
        const { show } = this.state;
        
        return (
            <div>
                <a href="/">Return</a>
                { show === null && <Loader /> }
                { 
                    show !== null
                    &&
                    <div>
                        <p>{ show.name }</p>
                        <p>Premiered: { show.premiered}</p>
                        <p>Rating: { show.rating.average }</p>
                        <p>Episodes: { show._embedded.episodes.length }</p>
                        <p>
                            <img alt="Show" className="show-cover" src={ show.image.original } />
                        </p>
                        <p>Summary: { show.summary }</p>
                        <p><a href={ show.officialSite } target="_blank">Official Website</a></p>
                        <p>Status: { show.status }</p>
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;