import { createSlice } from "@reduxjs/toolkit";


const productReducer = createSlice({
    name: "product",
    initialState: {
        productList: [],
        count: 0,
    },
    reducers: {
        //state.productList.find((item) => item.id === action.payload.id): Bu mahsulot ro‘yxatida (productList) action.payload.id ga teng IDga ega mahsulotni qidiradi.
        // Agar mahsulot mavjud bo‘lmasa (if (!product)), mahsulotni ro‘yxatga qo‘shadi:
        addCard: (state, action) => {
            const product = state.productList.find(
                (item) => item.id === action.payload.id
            );
            if (!product) {
                return {
                    ...state, productList: [
                        ...state.productList,
                        {
                            ...action.payload,
                            userPrice: action.payload.price,
                            userCount: 1,
                        }
                    ]
                }
            }
        },
         // addCard funksiyasi mahsulotlar ro‘yxatiga (productList) yangi mahsulot qo‘shadi. Agar qo‘shilayotgan mahsulot productListda mavjud bo‘lmasa, uni ro‘yxatga kiritadi va userPrice va userCount bilan birga saqlaydi. Bu funksiya orqali xaridlar savatchasi yoki mahsulot qo‘shish vazifalari bajarilishi mumkin.


        toggleAmount: (state, action) => {
            const newProductList = state.productList.map((item) => {
                if (
                    action.payload.type === "increment" && item.id === action.payload.id
                ) {
                    return {
                        ...item,
                        userCount: item.userCount + 1,
                        userPrice: (item.userCount + 1) * item.price,
                    };
                } else if (
                    action.payload.type === "decrement" && item.id === action.payload.id && item.userCount > 1
                ) {
                    return {
                        ...item,
                        userCount: item.userCount - 1,
                        userPrice: (item.userCount - 1) * item.price,
                    }
                }
                return item;
            });
            return { ...state, productList: newProductList }
        },
        deletProduct: (state, action) => {
            const newProductList = state.productList.filter((item) => item.id !== action.payload.id);
            return { ...state, productList: newProductList };
        },
        totalCount: (state) => {
            let newCount = 0;
            for (let i of state.productList) {
                newCount++;
            }
            return { ...item, count: newCount };

        },

    },
});


export default productReducer.reducer;

export const { addCard, totalCount, toggleAmount, deletProduct } = productReducer.actions;