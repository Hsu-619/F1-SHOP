import { defineStore } from 'pinia'

import Leclerc from '@/assets/imges/leclerc.jpg';
import Hamilton from '@/assets/imges/hamilton.jpg'
import Verstappen from '@/assets/imges/verstappen.jpg'
// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useShopCartStore = defineStore('alerts', {
  // 變數設置的地方，等於vue的data
    state: () => {
        return {
            cartData: {
                product: [
                    {id: 1, fristname: 'Charles', lastname: 'Leclerc', number:16 ,price: 6000, quantity: 1, img: Leclerc},
                    {id: 2, fristname: 'Lewis', lastname: 'Hamilton', number:44 ,price: 9000, quantity: 1, img: Hamilton},
                    {id: 3, fristname: 'Max', lastname: 'Verstappen', number:1 ,price: 7500, quantity: 1, img: Verstappen },
                ],

                method: {
                    pay: '',
                    deliver: '',
                },
                userData: {
                    name: '',
                    phone: '',
                    email: '',
                    city: '',
                    postalCode: '',
                    address: '',
                },
            },
        };
    },

  // 等於vue的computed
    getters: {
        // 計算價格
        totalPrice() {
            const total = this.cartData.product.reduce((acc, item) => {
            acc += item.price * item.quantity;
            return acc;
            }, 0);
    
            return total;
        },
    },

        // 等於vue的methods
    actions: {
        addCart(item) {
            this.cart.push(item);
        },

        // Store恢復初始值
        resetStore() {
            this.$reset();
        }
    },
});