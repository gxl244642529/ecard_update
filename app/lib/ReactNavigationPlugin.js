import {NavigationActions} from 'react-navigation'


function getCurrentUrl(state){
	let routes = state.routes;
	return routes[routes.length -1].routeName;
}

export default class ReactNavigationPlugin{
	constructor(store){
		this.store = store;
	}

	push(url,param){
		let obj = {routeName:url};
		if(param){
			obj.params = param;
		}
		this.store.dispatch(NavigationActions.navigate(obj));
	}

	goBack(url){
		if(url){
			if(url.startsWith('id-')){
				this._goBackKey(url);
				return;
			}
			let key = this._findKey(url);
			if(key == 'current'){
				return;
			}
			if(key){
				this._goBackKey(key);
				return;
			}
		}
		this.store.dispatch(NavigationActions.back());
	}


	_goBackKey(key){
		this.store.dispatch(NavigationActions.back({key}));
	}

	_findKey(rootName){
		//这里搜索一下是否存在
		let state = this.store.getState();
		let routes = state.nav.routes;
		for(var i= routes.length-1; i >=0 ; --i){
			let route=routes[i];
			if(route.routeName == rootName){
				if(i==routes.length-1){
					return "current";
				}

				//next root.key
				return  routes[i+1].key;
			}
		}

		return undefined;
	}

	goHome(){
		let state = this.store.getState();
		let routes = state.nav.routes;
		/*
		this.store.dispatch(NavigationActions.reset({
			index:0,
			actions: [
		      NavigationActions.navigate({ routeName: 'Home'}),
		    ]}));*/
		if(routes.length <= 1){
			return;
		}

		this.store.dispatch(NavigationActions.back({key:routes[1].key}));

	}


	backOrPush(url,params){

		let key = this._findKey(url);
		if(key=='current'){
			return;
		}
		if(key){
			this._goBackKey( key );
			return;
		}
		this.push(url,params);

	}


	static backMap = {};

	//绑定back事件
	/**
	 * [bindBack description]
	 * @param  {[type]}   url      定义在这个url上面点击的监听
	 * @param  {Function} callback 一个funciton,这个funciton返回false,表示默认处理，返回 一个String,表示跳转到String指定的路由上面
	 * @return {[type]}
	 */
	static bindBack(url,callback){
		ReactNavigationPlugin.backMap[url] = callback;
	}


	static on(state,nextState,action){
		//获取当前页面的名称
		if(action.type=='Navigation/BACK'){
			let url = getCurrentUrl(state);
			let fun = ReactNavigationPlugin.backMap[url]
			if(fun){
				return fun(state,nextState,action);
			}
		}
		console.log(action);


	}

}
