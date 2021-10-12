import React, {Component} from 'react';
import NationalParks from './components/nationalparks';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

class App extends Component {
    componentDidUpdate() {
    }

    render() {
        return (
            <>
                <NationalParks nationalparks={this.state.nationalparks}/>
            </>
        )
    }

    state = {
        nationalparks: [],
        count: 0
    };

    componentDidMount() {
        const host = process.env.REACT_APP_REST_BACKEND
        console.log(`Using REST backend at ${host}`)

        // Pick a random number of National Parks to retrieve for demo purposes.  Varies the length of query/service
        // invocation time which produces shorter/longer spans.
        const count = getRandomInt(5, 100)
        const start = getRandomInt(0, 359-count)

        fetch(`${host}/api/v1/nationalparks?start=${start}&count=${count}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({nationalparks: data})
            })
            .catch(console.log)
    }
}

export default App;
