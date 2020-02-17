import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import './tarbar.scss'


class TabBar extends Taro.PureComponent{
  static defaultProps ={
  };
  static state={

  };
  TabList=[
      {
    iconName: 'home-icon',
    iconNameCurrent: 'home-icon-select',
    title: '首页'
  },
  {
    iconName: 'book-icon',
    iconNameCurrent: 'book-icon-select',
    title: '学习',
  },{
    iconName: 'account-icon',
    iconNameCurrent: 'account-icon-select',
    title: '个人',
  }];
  render() {
    return (
      <View className='tabbar-view'>
        <View className='at-row'>
          {this.TabList.map((item, index) => {
            return (
              <View className='at-col-4'>
                <View className='tabbar-item' onClick={this.props.onTabChange.bind(this, index)}>
                  <View className='icon'>
                    <View className={this.props.current === index ? item.iconNameCurrent : item.iconName}></View>
                  </View>
                  <View className={this.props.current === index ?'title-select' : 'title'}>
                    {item.title}
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

export default TabBar;
