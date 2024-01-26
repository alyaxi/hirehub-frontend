import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Core } from '..';
import Icon from '../icon';

const { Dragger } = Upload;

function DragImg({ state, setState }) {
    const [imageUrl, setImageUrl] = useState('');

    const props = {
        name: 'file',
        multiple: false,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange(info) {
            const { status } = info.file;
            // if (status !== 'uploading') {
            //     console.log(info.file);
            // }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                setState(info.file);

                const reader = new FileReader();
                reader.onload = (e) => {
                    setImageUrl(e.target.result);
                };
                reader.readAsDataURL(info.file.originFileObj);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const deleteFile = () => {
        setImageUrl('');
        setState(null);
    };
    
    return (
        <>
            <label className={`flex justify-start text-[14px] font-medium text-gray-2 tracking-wide mb-2 font-semibold capitalize`}>Upload Image</label>
            {(imageUrl === "" && (state === undefined || state === null|| state === '')) ?
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon mt-4">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-hint mb-4">
                        Drag and drop image here, or click add image
                    </p>
                    <Core.Button type="narrow" className={"mb-4"}>Add Image</Core.Button>
                </Dragger>
                :
                <>
                    {imageUrl && (
                        <div className='relative flex justify-between items-center py-2'>
                            <img src={imageUrl} alt="Uploaded" className='w-full max-w-[100%] h-[100%] max-h-[220px] rounded-lg object-cover' />
                            <span onClick={deleteFile} className='absolute right-3 top-5 bg-white text-[red] cursor-pointer rounded-full shadow-md p-2'>
                                <Icon name="Delete" />
                            </span>
                        </div>
                    )}
                </>
            }
        </>
    );
}

export default DragImg;
