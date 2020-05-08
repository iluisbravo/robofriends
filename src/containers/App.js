import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {

    constructor(){
        super();
        //declare states
        this.state = {
            robots: [],
            searchfild: ''
        }

        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots: users}));

        
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({searchfild: event.target.value});
    }

    render(){
        console.log('render');

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfild.toLowerCase());
        });

        let bodyApp = '';
        if(this.state.robots.length === 0){
            bodyApp = <h1> Loading... </h1>;
        }
        else{
            bodyApp = <CardList robots={filteredRobots} />;
        }

        return(
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                       {bodyApp}
                    </ErrorBoundry>               
                </Scroll>                
            </div>
        );        
    }

}

export default App;