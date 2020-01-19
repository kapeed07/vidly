import React from 'react';
import { Row, Col } from 'antd';
import Movies from "./components/movies"

function App() {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Movies />
      </Col>
    </Row>
  );
}

export default App;
