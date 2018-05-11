
import {

  RefreshControl
} from 'react-native';
export default class Refresh extends Component{

  return (
    <RefreshControl
        refreshing={this.state.isRefreshing}
        onRefresh={this._onRefresh}
        colors={refreshColors}
        progressBackgroundColor="#ffffff"
      />
  );
}
