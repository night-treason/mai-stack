import { createStore } from "vuex";
import { nanoid } from "nanoid";

export default createStore({
	state: {
		products: [],
	},
	mutations: {
		addProduct(state, product) {
			state.products.push({...product, id: nanoid(5)}); 
		},
	},
});
