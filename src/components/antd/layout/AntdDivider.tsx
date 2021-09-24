import { Divider, Space } from "antd";

const AntdDivider = () => {
  return (
    <Space direction="vertical" style={{ width: '100%', height: '100%', margin: '10px' }}>
      <Divider />
      <Divider dashed />
      <Divider orientation="left">Left</Divider>
      <Divider orientation="center">Center</Divider>
      <Divider orientation="right">Right</Divider>
      <Divider orientation="left" plain>Left</Divider>
      <Divider orientation="center" plain>Center</Divider>
      <Divider orientation="right" plain>Right</Divider>
      <Divider style={{ height: '300px' }} type="vertical" />
    </Space>
  )
};

export default AntdDivider;