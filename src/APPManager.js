import axios from 'axios'
import { createStore } from 'redux'

const ACTIONS = {
	SET_DATA: "setData",
	TOGGLE_FAV: "fav"
}

const searchReducer = function(state, action){
	switch (action.type) {
		case ACTIONS.SET_DATA:
			var id = 0;
			state.data = action.data
			state.data.map(function(item){
				item.faved = false;
				item.id = id;
				id += 1;
			})
			break
		case ACTIONS.TOGGLE_FAV:
			state.data[action.id].faved = !state.data[action.id].faved;
			break;
	}
	console.log(state)
	return state
}

const store = createStore(searchReducer,{data: []})

const APPManager = {
	setData: function(data){
		var action = {};
		action.type = ACTIONS.SET_DATA;
		action.data = data;
		store.dispatch(action)
	},
	search: function(keyword){
		var state = store.getState();
		var data = state.data;

		var result = [];

		keyword = keyword.toLowerCase()
		keyword = keyword.split(" ")
		data.map(function(item){
			for(var key in keyword){
				var word = keyword[key];
				if(item.keywords.indexOf(word) != -1){
					result.push(item)
				}
			}
		})
		return result
	},
	toggleFav: function(id){
		var action = {};
		action.type = ACTIONS.TOGGLE_FAV;
		action.id = id;
		store.dispatch(action);
	},
	subscribe: function(func){
		store.subscribe(func);
	}
}

axios({
	method:'get',
	url:'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000',
}).then(function(response) {
	APPManager.setData(response.data)
	APPManager.search("tag rubber")//rubber

});



export default APPManager;


















