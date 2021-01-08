const initialState = {
    products: [
        { title: 'Maggi', url: "https://images-na.ssl-images-amazon.com/images/I/812o4EQXPKL._SL1500_.jpg", price: 20, quantity: 1 },
        { title: 'Roti', url: "https://werecipes.com/app/uploads/2015/04/phulka-roti-chappati-recipe.jpg", price: 10, quantity: 1 },
        { title: 'Pizza', url: "https://img.grouponcdn.com/deal/872bd115e31d4093bd6729b2be0872a5/a5/v1/c700x420.jpg", price: 200, quantity: 1 },
        { title: 'Pasta', url: "https://www.dinneratthezoo.com/wp-content/uploads/2018/07/penne-alla-vodka-5.jpg", price: 100, quantity: 1 },
        { title: 'Meat', url: "https://media.wired.com/photos/5b493b6b0ea5ef37fa24f6f6/master/pass/meat-80049790.jpg", price: 150, quantity: 1 },
    ],
    selectedProducts: [],
    totalAmount:0,
}


const shopReducer = (state = initialState, action) => {
    switch (action.type) {


        case "ADD_SELECTED_PRODUCT":
            const newSelectedProducts1 = [...state.selectedProducts];
            let added = false;
            if (newSelectedProducts1.length > 0) {
                newSelectedProducts1.forEach((item, i) => {
                    if (action.payload.title === item.title) {
                        newSelectedProducts1[i].quantity += 1;
                        added = true;
                    }


                })

                if (!added)

                    newSelectedProducts1.push(action.payload);
            }

            else

                newSelectedProducts1.push(action.payload);


            return {
                ...state,
                selectedProducts: [...newSelectedProducts1],
                totalAmount: state.totalAmount + action.payload.price,
            };
        case "INCREASE_QUAN":
            const newSelectedProducts = [...state.selectedProducts];
            let newAmount = state.totalAmount;
            newSelectedProducts.forEach((item, i) => {
                if (action.id === item.title) {
                    newSelectedProducts[i].quantity += 1;
                    newAmount += newSelectedProducts[i].price;
                }
            });

            return {
                ...state,
                selectedProducts: newSelectedProducts,
                totalAmount: newAmount,
            }

        case "DECREASE_QUAN":
            const newSelectedProducts2 = [...state.selectedProducts];
            let newAmount2 = state.totalAmount;
            newSelectedProducts2.forEach((item, i) => {
                if (action.id === item.title) {
                    if (newSelectedProducts2[i].quantity > 0) {
                        newSelectedProducts2[i].quantity -= 1;
                        newAmount2 -= newSelectedProducts2[i].price;
                    }
                    if(newSelectedProducts2[i].quantity === 0){
                        const deleteProducts=newSelectedProducts2.splice(i,1); 
                    }
                }
            });

            return {
                ...state,
                selectedProducts: newSelectedProducts2,
                totalAmount: newAmount2,
            }
        default:
            return state;



    }

};
export default shopReducer;