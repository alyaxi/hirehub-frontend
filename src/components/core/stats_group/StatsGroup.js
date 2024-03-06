import React from 'react';
import Stat from './Stat';

function StatsGroup({ data }) {

    return (
        <div className='flex justify-start items-center flex-wrap gap-x-[2%] gap-y-4 pb-5'>
            {data.map((value, index) => {
                return (
                    <Stat key={value * 5} index={index} data={value} />
                )
            })}
        </div>
    );
}

export default StatsGroup;
