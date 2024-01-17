
import React, { useState } from 'react';
import { Core } from '..';

function SearchInput({ onChange,onInputChange }) {

    return (
        <div className='flex justify-start gap-x-1 items-center w-full'>
            <Core.InputWithLabel
                // key={resetTrigger3 ? 'reset' : 'normal'} 
                type="text"
                name={'SearchProduct'}
                // setValue={setExpirationDate}
                onChange={onInputChange}
                sm />
            <Core.Button sm type="narrow" >Search</Core.Button>
        </div>
    )
}

export default SearchInput