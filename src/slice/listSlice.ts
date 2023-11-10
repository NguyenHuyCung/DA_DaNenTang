// listSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

export interface listState {
  orderList: any[];
}

const initialState: listState = {
  orderList: [],
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ menu: any, quantity: number }>) {
      const { menu, quantity } = action.payload;

      // Kiểm tra nếu menu là null, không thực hiện thêm vào giỏ hàng
      if (menu === null) {
        return state;
      }

      const existingProductIndex = state.orderList.findIndex(item => item.menu.menu_name === menu.menu_name);
      if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng của nó
        state.orderList[existingProductIndex].quantity += quantity;
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm nó vào giỏ hàng
        state.orderList.push({ menu, quantity });
      }
    },
    REPLACE_font: (state, action: PayloadAction<any[]>) => {
      // Gán mảng mới từ action.payload cho thuộc tính 'font'
      state.orderList = action.payload;
    },
    removeItem :(state, action: PayloadAction<{id : any}>) => {
      const { id } = action.payload;

      // Filter out the item with the specified id
      state.orderList = state.orderList.filter(item => item.menu.id !== id);
      
    },

    

  },
});

export const { addItem, removeItem, REPLACE_font } = listSlice.actions;

export default listSlice.reducer;
