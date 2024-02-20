
import React, { useState } from 'react';
import { Core } from '..';

function SearchInput({ onChange, onInputChange, name }) {

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