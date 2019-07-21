import React from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json'

import Header from './components/Header';
import NewsList from './components/news_list';

class App extends React.Component{
    constructor(){
        super()
        this.state={
            news : JSON
        } 
    }
    render(){
        //console.log(this.state.news)
        return(
            <div>
                <Header/>
                <NewsList newsProp={this.state.news} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
