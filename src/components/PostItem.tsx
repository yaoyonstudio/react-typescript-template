import * as React from 'react';
import IPostItem from '../types/IPostItem';

interface IProps {
  key: number,
  data: IPostItem
}

class Home extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <h4>{this.props.data.title}</h4>
      </div>
    );
  }
}

export default Home;
