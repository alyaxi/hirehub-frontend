import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');
    
    if (!isImage && !isVideo) {
        message.error('You can only upload JPG/PNG images or videos!');
    }
    
    const isLt2M = file.size / 1024 / 1024 < 2;
    
    if (!isLt2M) {
        message.error('File must be smaller than 2MB!');
    }
    
    return (isImage || isVideo) && isLt2M;
};

const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
};

const UploadVideo = ({ onChange }) => {
    const [loading, setLoading] = useState(false);
    const [mediaUrl, setMediaUrl] = useState('');

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setMediaUrl(url);
                onChange(info.file);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <Upload
            name="media"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {mediaUrl ? (
                <video src={mediaUrl} controls style={{ width: '100%' }} />
            ) : (
                uploadButton
            )}
        </Upload>
    );
};

export default UploadVideo;
