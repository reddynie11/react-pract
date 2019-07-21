import React from 'react';
import {css} from 'glamor';

const NewsItem = ({itemProp})=>{
    let news_item_css = css({
        padding: '20px',
        boxSizing:'border-box',
        borderBottom:'1px solid grey'
    })
    

    return(
        <div className={`${news_item_css}`}>
            <h3>{itemProp.title}</h3>
            <div>{itemProp.feed}</div>
        </div>
    )
}
export default NewsItem;
