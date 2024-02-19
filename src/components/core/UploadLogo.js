import React, { useEffect, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import Icon from '../icon';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const UploadLogo = ({ onChange, logo }) => {
    // console.log("logo", logo)

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(logo || '');

    useEffect(() => {
        setImageUrl(logo || ''); // Update imageUrl when logo prop changes
    }, [logo]);


    // console.log("imageUrl", imageUrl)

    const handleChange = (info) => {
        setImageUrl("")
        if (info?.file?.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info?.file?.originFileObj, (url) => {
                setLoading(false);
                // console.log("info.file", info.file)
                setImageUrl(url);
                onChange("logo", info?.file?.originFileObj)
            });
        }
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    return (
        <>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? (
                    <div className='relative w-full'>
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                                width: '100%',
                            }}
                        />
                        <span className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white cursor-pointer rounded-full shadow-md hover:opacity-75 p-2'>
                            <Icon name="Upload" size={30} />
                        </span>
                    </div>
                ) : (
                    uploadButton
                )}



            </Upload>
        </>
    );
};
export default UploadLogo;