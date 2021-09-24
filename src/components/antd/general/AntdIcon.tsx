import { QuestionOutlined, StarTwoTone } from '@ant-design/icons';
import { Space } from 'antd';

const AntdIcon = () => {
  return (
    <Space direction="vertical" style={{ margin: '10px' }}>
      <QuestionOutlined />
      <QuestionOutlined rotate={45} />
      <QuestionOutlined spin />
      <QuestionOutlined style={{ fontSize: '30px' }} />
      <StarTwoTone twoToneColor="#FF0000" />
    </Space>
  )
};

export default AntdIcon;