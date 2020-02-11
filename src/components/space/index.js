// var pageCommonBehavior = require('./page-common-behavior')
Component({
  properties: {
    // 这里定义了collected属性，属性值可以在组件使用时指定
    collected: {
      type: Boolean,
      value: false
    }
  },
  data: {
    // 这里是一些组件内部数据
  },
  methods: {
    // 这里是一个自定义方法
    _onCollection: function() {
      let collected = this.properties.collected;
      this.setData({ collected: !collected })
      this.triggerEvent('collected', this.properties.collected);
    }
  }
});


//Component is not found in path "pages/course/course_view"
//(using by "pages/home/home_view");onAppRoute
//Error: Component is not found in path "pages/course/course_view"
//(using by "pages/home/home_view")
