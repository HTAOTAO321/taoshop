import {
  SELECTED_GOODS_COUNT,
  SELECTED_GOODS,
  SELECTED_GOODS_PRICE
} from "./mutation-type";

export default {
  // 1.获取选中商品数量
  SELECTED_GOODS_COUNT(state) {
    // 取出商品
    let count = 0;
    let shopCart = state.shopCart;
    Object.values(shopCart).forEach((goods, index) => {
      if (goods.checked) {
        count++;
      }
    });
    return count;
  },
  // 2.选中的商品
  SELECTED_GOODS(state) {
    let goodsArray = [];
    let shopCart = state.shopCart;
    Object.values(shopCart).forEach((good, index) => {
      if (good.checked) {
        goodsArray.push(shopCart[good.id]);
      }
    });
    return goodsArray;
  },
  // 3.选中商品的价格
  SELECTED_GOODS_PRICE(state) {
    let totalPrice = 0;
    // 3.1 取到shopCart里面的数据遍历找到选中的goods计算总价
    Object.values(state.shopCart).forEach((goods, index) => {
      if (goods.checked) {
        // 3.2 计算总价,由于Vant的SubmitBar组件接受的价格格式是保留两位小数且中间不需要.所以需要转换下
        totalPrice += goods.price * goods.num * 100;
      }
    });
    return totalPrice;
  }
};
