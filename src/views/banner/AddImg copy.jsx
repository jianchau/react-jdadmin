// import { Form, Input, Button,Upload} from 'antd';
// import {UploadOutlined} from '@ant-design/icons'


// import {addBanner} from '../../api/banner'
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };


// const AddImg = () => {
 
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };
//   const normFile = (e) => {
//     console.log('Upload event:', e.fileList[0]);
//     console.log(e.fileList[0].thumbUrl)
//     if (Array.isArray(e)) {
//       return e;
//     }
//   }

//   return (
//     <Form
//       {...layout}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//     >
//       <Form.Item
//         label="链接地址"
//         name="link"
//         labelCol={{span:8}}
//         wrapperCol={{span:8}}
//       >
//         <Input placeholder="请输入链接地址"/>
//       </Form.Item>

//       <Form.Item
//         label="图片提示"
//         name="alt"
//         labelCol={{span:8}}
//         wrapperCol={{span:8}}
//       >
//         <Input placeholder="请输入图片提示信息"/>
//       </Form.Item>
//       <Form.Item
//         name="bannerimg"
//         label="上传图片"
//         valuePropName="fileList"
//         getValueFromEvent={normFile}
//         rules={[
//           {
//             required: true,
//             message: '请选择轮播图片',
//           },
//         ]}
//       >
//         <Upload 
//         name="logo" 
//         listType="picture"
//         action=''
//         >
//           <Button icon={<UploadOutlined />}>Click to upload</Button>
//         </Upload>
//       </Form.Item>
//       <Form.Item 
//       wrapperCol={{offset:8}}
//       >
//         <Button type="primary" 
//         htmlType="submit"
//         >点击添加</Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default AddImg

