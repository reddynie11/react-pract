import React from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json'

import Header from './components/Header';
import NewsList from './components/news_list';

class App extends React.Component{
    constructor(){
        super()
        this.state={
            news : JSON,
            filt:[]
        } 
    }
    getKeyword = (e)=>{
        //console.log(e.target.value)
        let searchWord = e.target.value
        let filt = this.state.news.filter((item)=>{
            return item.title.indexOf(searchWord)>-1
        });
        this.setState({
            filt:filt
        })
        //console.log(filt)
    }
    render(){
        //console.log(this.state.news)
        return(
            <div>
                <Header keyword={this.getKeyword} />
                <NewsList newsProp={this.state.filt.length === 0 ? this.state.news:this.state.filt} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
