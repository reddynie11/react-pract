import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props)=>{
    const items = props.newsProp.map((item)=>{
        return(
            <NewsItem key={item.id} itemProp={item}/>
        )
    })
    
    return(
        <div>
            {items}
        </div>
    )
}
export default NewsList;