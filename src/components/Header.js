import React from 'react';

class Header extends React.Component{

    state={
        keywords : 'defalut State'
    }

    inputChangeHandler(e){
        console.log(e.target.value)
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