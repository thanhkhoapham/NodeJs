import { ReactElement, useEffect, useState } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface Props {
  title: string, 
  description: string
}

export const CategoryCard = ({ title, description}: Props): ReactElement => {

  return <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={title} description={description} />
  </Card>
};
