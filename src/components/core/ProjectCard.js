import React from 'react';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
import { Core } from '..';

const { Meta } = Card;

function ProjectCard({ data }) { 

    console.log("ProjectCard data",data)
    return (
        <div>
            <div className='flex justify-end mb-[-45px] right-[10px] relative z-[200]' >
                <Core.ProficienciesActions buttons={['edit']} type={'projectsData'} id={data?._id} />
            </div>
            <NavLink to={data?.projectUrl}>
                <Card
                    size="small"
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src={data?.projectImage}
                        />
                    }
                >
                    <Meta
                        title={data?.name}
                        description={data?.projectUrl}
                    />
                </Card>
            </NavLink>
        </div>
    )
};
export default ProjectCard;