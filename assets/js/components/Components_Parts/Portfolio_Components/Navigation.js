// @flow
import * as React from 'react';

export const Navigation = ({id, category,isActive,onCatChange}) => {
    return (
        <li   onClick={()=>onCatChange(id)} id={"portfolio-link-" + id+1} className={isActive? 'is-active':''}><a>{category}</a></li>
    );
};