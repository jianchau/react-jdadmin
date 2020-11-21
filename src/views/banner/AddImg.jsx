import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AddImg = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="链接地址"
        name="address"
        labelCol={{span:8}}
        wrapperCol={{span:8}}
      >
        <Input placeholder="请输入链接地址"/>
      </Form.Item>

      <Form.Item
        label="图片提示"
        name="alt"
        labelCol={{span:8}}
        wrapperCol={{span:8}}
      >
        <Input placeholder="请输入图片提示信息"/>
      </Form.Item>

      <Form.Item  
      name="pic" 
      wrapperCol={{span:6,offset:8}} >
        <Input type="file" />
      </Form.Item>

      <Form.Item 
      {...tailLayout}
      wrapperCol={{offset:10}}
      >
        <Button type="primary" htmlType="submit">
          点击添加
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddImg

