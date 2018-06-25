import * as React from 'react';
import PostItem from '../components/PostItem'
import { postService } from '../services'
import IPostItem from '../types/IPostItem'

interface IState {
  dataList: IPostItem[]
  page: number
  pagesize: number
}

class Test extends React.Component <{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      dataList: [],
      page: 1,
      pagesize: 6
    }
  }

  public componentDidMount () {
    postService.getPosts({
      page: this.state.page,
      pagesize: this.state.pagesize
    }, (res: any) => {
      this.setState({
        dataList: res
      })
    })
  }

  public render() {
    return (
      <div className="container">
        <h1>Posts</h1>
        <div>
          {this.state.dataList.map((item: IPostItem, index: number) => <PostItem data={item} key={index} />)}
        </div>
      </div>
    );
  }
}

export default Test;
