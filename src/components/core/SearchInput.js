
import React from 'react';
import { Core } from '..';

function SearchInput({ onInputChange, name }) {

    return (
        <div className='flex justify-start gap-x-1 items-center w-full'>
            <Core.InputWithLabel
                sm
                type="text"
                name={name}
                onChange={onInputChange}
            />
            <Core.Button sm type="narrow" >Search</Core.Button>
        </div>
    )
}

export default SearchInput