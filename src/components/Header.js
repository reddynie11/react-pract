import React from 'react';

class Header extends React.Component{
    constructor(){
        super()
        this.state={
            keywords : 'defalut State'
        }
    }
    

    inputChangeHandler= (e)=>{
        this.setState({
            keywords:e.target.value
        })
    }

    render(){
        console.log(this.state.keywords);
        return(
            <header>
                <div onClick={()=>{console.log('Click')}}  >Logo</div>
                <input type='text' onChange={this.inputChangeHandler} />
            </header>
        )
    }
}
export default Header;