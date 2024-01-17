
import React, { useState } from 'react';
import { Upload } from 'antd';
import Icon from '../icon';
import DefaultAvatar from "../../assets/images/avatars/default-avatar.svg"

const UploadAvatar = () => {
    // const [fileList, setFileList] = useState([]);
    const [fileList, setFileList] = useState([  
    {
        uid: '-1',
        name: 'yyy.png',
        status: 'done',
        // url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        url: DefaultAvatar,
        // thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: DefaultAvatar,
      },
]);
const onChange = ({ fileList: newFileList }) => {
        if (newFileList.length > 1) {
            newFileList.shift(); // Remove additional files if more than one is selected
        }
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    console.log("fileList", fileList)
    return (
       <div className='min-h-[112px]'>
         <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture-circle"
            fileList={fileList}
            className=''
            onChange={onChange}
            onPreview={onPreview}
        >
            {fileList.length < 2 &&
                <span className="relative right-[25px] top-[15px] flex justify-center items-center w-[21px] h-[21px] cursor-pointer bg-gray-6 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all" >
                    <span className='text-white'><Icon name="Edit" size={11} /></span>
                </span>
            }
        </Upload>
       </div>
    );
};

export default UploadAvatar;




// import React from 'react';
// import { UploadOutlined } from '@ant-design/icons';
// import { Button, Upload } from 'antd';
// const fileList = [
  
//   {
//     uid: '-1',
//     name: 'yyy.png',
//     status: 'done',
//     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//   },
   
// ];
// const UploadAvatar = () => (
//   <>
//     <Upload
//       action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//       listType="picture-circle"
//       defaultFileList={[...fileList]}
//     >
//       <Button icon={<UploadOutlined />}>Upload</Button>
//     </Upload> 
//   </>
// );
// export default UploadAvatar;
