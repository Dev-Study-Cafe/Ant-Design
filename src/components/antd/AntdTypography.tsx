import { useState } from 'react';
import { Typography, Space } from "antd";

const AntdTypography = () => {
  const { Text, Link, Title, Paragraph } = Typography;
  const [editableStr, setEditableStr] = useState('This is an editable text.');

  return (
    <Space direction="vertical" style={{ margin: '10px' }}>
      <Text>Hello</Text>
      <Text type="secondary">Hello</Text>
      <Text type="success">Hello</Text>
      <Text type="warning">Hello</Text>
      <Text type="danger">Hello</Text>
      <Text disabled>Hello</Text>
      <Text mark>Hello</Text>
      <Text code>Hello</Text>
      <Text keyboard>Hello</Text>
      <Text underline>Hello</Text>
      <Text delete>Hello</Text>
      <Text strong>Hello</Text>
      <Text italic>Hello</Text>
      <Link href="//www.naver.com" target="_blank">Hello</Link>
      <Title level={1}>Hello</Title>
      <Title level={3}>Hello</Title>
      <Paragraph>Hello</Paragraph>
      <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
      <Paragraph copyable>This is a copyable text.</Paragraph>
    </Space>
  )
};

export default AntdTypography