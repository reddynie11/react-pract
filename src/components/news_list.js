import React from 'react';

// class NewsList extends React.Component{
//     render(){
//         return(
//             <div>News List</div>
//         )
//     }
// }
const NewsList = (props)=>{
    const items = props.newsProp.map((item)=>{
        return(
            <div>
                <h3>{item.title}</h3>
                <div>{item.feed}</div>
            </div>
        )
    })
    
    return(
        <div>
            {items}
        </div>
    )
}
export default NewsList;