
# 网络层

自动生成接口

# 持久化


# 逻辑层
dva

# 项目结构

+ styles
  index.style.js => {color:size:layout:}

+ widget
  +Button.js   import globalStyles from '../styles/index.style';
  +Form.js
  +Input.js

+ components
  + home
   +NewsView.js
   +NewsView.style.js
   +index.js

+ connect
  + home
    index.js =>  import Home from 'views/home';   export connect()(Home);

+ models
  home.js=>   {  namespace:'home',.....  }
  
  push.js=> { namespace:''  }  


# 路由








