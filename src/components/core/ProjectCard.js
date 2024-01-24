import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
import { Core } from '..';

const { Meta } = Card;

function ProjectCard({ data }) {
    return (
        <div>
            <div className='flex justify-end mb-[-45px] right-[10px] relative z-[200]' >
                <Core.ProficienciesActions buttons={['edit']} type={'projects'} id={data?.id} />
            </div>

            <NavLink to={data?.link}>
                <Card
                    size="small"
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            src={data?.img}
                        />
                    }
                // actions={[
                //     <SettingOutlined key="setting" />,
                //     <EditOutlined key="edit" />,
                //     <EllipsisOutlined key="ellipsis" />,
                // ]}
                >
                    <Meta
                        // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title={data?.title}
                        description={data?.link}
                    />
                </Card>
            </NavLink>
        </div>
    )
};
export default ProjectCard;