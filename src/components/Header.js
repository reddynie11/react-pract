import React from 'react';

const Header = (props)=>{
        
        return(
            <header>
                <div onClick={()=>{console.log('Click')}}  >Logo</div>
                <input type='text' onChange={props.keyword} />
            </header>
        )
    
}
export default Header;