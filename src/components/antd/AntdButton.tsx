import { Button, Space } from 'antd';

const AntdButton = () => {
  return (
    <Space direction="vertical" style={{ margin: '10px' }} >
      <Button type="primary">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Button type="primary" danger>Danger Primary Button</Button>
      <Button type="primary" block>Block Primary Button</Button>
      <Button type="primary" disabled>Disabled Primary Button</Button>
      <Button type="primary" ghost>Ghost Primary Button</Button>
      <Button type="primary" loading>Loading Primary Button</Button>
      <Button type="primary" shape="circle">Circle Primary Button</Button>
      <Button type="primary" shape="round">Round Primary Button</Button>
      <Button type="primary" size="large">Large Primary Button</Button>
      <Button type="primary" size="small">Small Primary Button</Button>
    </Space>
  )
};

export default AntdButton;