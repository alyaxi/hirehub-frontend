import React from 'react';
import { Card } from 'antd';
// import { NavLink } from 'react-router-dom';
import { Core } from '..';

const { Meta } = Card;

function ProjectCard({ data, index, type }) {

    console.log("ProjectCard data",data)

    const DEFAULT_THUMBNAIL_SVG = `
    <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="250" fill="#D9D9D9"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="26" fill="#0000008f">No Image</text>
    </svg>`;

    return (
        <div className='relative project-card min-h-[160px]'>
            <div className='flex justify-end mb-[-45 px] top-[5px] right-[5px] absolute z-[200]' >
                {type === "candidate" &&
                    <Core.ProficienciesActions buttons={['edit']} type={'projectsData'} id={data?._id} index={index} />
                }
            </div>
            {/* <NavLink to={data?.projectUrl}> */}
                <Card
                    size="small"
                    hoverable
                    style={{
                        width: 196,
                    }}
                    cover={
                        <img
                            alt="Project"
                            src={data?.projectImage}
                            style={{ maxHeight: '100px', objectFit: "cover" }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `data:image/svg+xml;base64,${btoa(DEFAULT_THUMBNAIL_SVG)}`;
                            }}
                        />
                    }
                > 
                   <Meta
                        title={data?.name ? data?.name : "-"}
                        description={data?.projectUrl ? data?.projectUrl : "-"}
                    /> 
                </Card>
            {/* </NavLink> */}
        </div>
    )
};
export default ProjectCard;