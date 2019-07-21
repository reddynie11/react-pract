import React from 'react';

const NewsItem = ({itemProp})=>{
    return(
        <div>
            <h3>{itemProp.title}</h3>
            <div>{itemProp.feed}</div>
        </div>
    )
}
export default NewsItem;
