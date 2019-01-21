import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './components/results.js'
import APPManager from './APPManager.js'

class App extends Component {
    constructor(props){
        super(props);
        this.query = this.query.bind(this);
        this.state = {results: [], keyword: ""}
        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.update = this.update.bind(this);
        
        APPManager.subscribe(this.update);

    }
    update(){
        this.forceUpdate();
        console.log("updating")
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        this.state.keyword = value
        if(value == ""){
            this.setState({results: []})
        }
    }
    query(event){
        var results = APPManager.search(this.state.keyword)
        this.setState({results: results})
    }
    submit(event){
        event.preventDefault();
        this.query();
    }
    render() {
        return (
            <div className="App">
                <div className="header">
                    Toronto Waste Lookup
                </div>
                <div className="body">
                    <div className="searchWrapper">
                        <form onSubmit={this.submit}>
                            <input type="text" className="text" onEnter={this.onEnter} onChange={this.handleInputChange} />
                            <i className="searchButton fas fa-search" onClick={this.query}></i>
                        </form>
                    </div>
                    <Results display={this.state.results}/>
                </div>
            </div>
        );
    }
}

export default App;
