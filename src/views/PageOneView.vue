<script>
import { RouterLink, RouterView } from 'vue-router';
import { useShopCartStore } from '@/stores/shopcart';

export default {

    setup() {
        const shopCart = useShopCartStore();

        function decrement(item) {
            if (item.quantity > 0) {
                item.quantity--;
            }
        }
        return { shopCart, decrement };
    },
    methods: {
        setData() {
            this.$router.push('/pagetwo');
        },
    },
    
}
</script>


<template>
        <div class="container-box">
        <div class="order-box my-5">
            <div class="title px-5 pt-4 fs-1">購物車</div>
            <div class="color-line p-4 position-relative d-flex justify-content-center">
                <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                    <button type="button" class="btn btn-sm btn-primary rounded-pill"
                        style="width: 2.5rem; height:2.5rem;">
                        <span class="fs-5">1</span>
                    </button>
                    <span class="d-flex justify-content-center mt-1 myword">確認購物車</span>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                    <button type="button" class="btn btn-sm btn-secondary rounded-pill"
                        style="width: 2.5rem; height:2.5rem;">
                        <span class="fs-5">2</span>
                    </button>
                    <span class="d-flex justify-content-center mt-1 myword">付款及運送</span>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                    <button type="button" class="btn btn-sm btn-secondary rounded-pill"
                        style="width: 2.5rem; height:2.5rem;">
                        <span class="fs-5">3</span>
                    </button>
                    <span class="d-flex justify-content-center mt-1 myword">填寫資料</span>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                    <button type="button" class="btn btn-sm btn-secondary rounded-pill"
                        style="width: 2.5rem; height:2.5rem;">
                        <span class="fs-5">4</span>
                    </button>
                    <span class="d-flex justify-content-center mt-1 myword">完成訂購</span>
                </div>
                <div class="progress p-0 position-absolute my-progress" role="progressbar"
                    style="height: 10px; top:33%; left: 23%; width: 10%;">
                    <div class="progress-bar" style="width: 50%"></div>
                </div>
                <div class="progress p-0 position-absolute" role="progressbar"
                    style="height: 10px; top:33%; left: 45%; width: 10%;">
                    <div class="progress-bar" style="width: 0%"></div>
                </div>
                <div class="progress p-0 position-absolute" role="progressbar"
                    style="height: 10px; top:33%; left: 67%; width: 10%;">
                    <div class="progress-bar" style="width: 0%"></div>
                </div>
            </div>
            <div class="list-box px-5">
                <div class="list fs-2 mb-2 border-top border-primary border-3 py-3">訂單明細</div>
            </div>
            <div v-for="item in shopCart.cartData?.product ?? []" :key="item.id">
                <div class="item-box1">
                    <div class="navbar-brand d-flex py-3 justify-content-between border-bottom border-primary border-3">
                        <div class="left-box d-flex">
                            <img :src="item.img" alt="Logo" width="60" height="60"
                                class="d-inline-block align-text-top me-3">
                            <div class="name-box d-flex flex-column">
                                <div class="name d-flex flex-wrap">
                                    <span class="Max fs-6">{{ item.fristname }}</span>
                                    <span class="Max fs-6">{{ item.lastname }}</span>
                                </div>
                                <span class="Max No16">#{{ item.number }}</span>
                            </div>
                        </div>
                        <div class="right-box d-flex align-items-center">
                            <div class="box col me-3 d-flex justify-content-end">
                            <button type="button" class="btn" @click="decrement(item)">-</button>
                            <input v-model="item.quantity" type="number" id="num" class="text-center"></input>
                            <button type="button" class="btn" @click="item.quantity++">+</button>
                            </div>
                            <div class="money fs-5">${{ item.price }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="total-boxB px-5">
                <div class="total-box d-flex justify-content-end border-bottom border-primary border-3 py-3">
                    <div class="total-Number d-flex flex-column">
                        <span>數量:</span>
                        <span>小計:</span>
                        <span>運費:</span>
                        <span>總計:</span>
                    </div>
                    <div class="total-Money ps-5 ms-5 d-flex flex-column">
                        <span class="d-flex justify-content-end">{{ shopCart.cartData.product.length }}</span>
                        <span class="d-flex justify-content-end">${{ shopCart.totalPrice }}</span>
                        <span class="d-flex justify-content-end">$1000</span>
                        <span class="d-flex justify-content-end">${{ shopCart.totalPrice + 1000 }}</span>
                    </div>
                </div>
            </div>
            <div class="next-box px-5 py-4 d-flex justify-content-between">
                <RouterLink to="/">
                    <button type="button" class="btn">
                        <i class="bi bi-arrow-left"></i>
                        返回購物
                    </button>
                </RouterLink>
                <RouterLink to="/pagetwo">
                    <button type="button" class="btn btn-primary" @click="">
                        下一步
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
*,
::before,
::after {
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
}

.hover:hover {
    background-color: rgb(17, 86, 146);
}

.container-box {
    background-color: gray;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.order-box {
    background-color: white;
    width: 60%;
}

@media (max-width: 1400px) {
    .order-box {
        width: 80%;
    }
}

@media (max-width: 860px) {
    .order-box {
        width: 90%;
    }
}

@media (max-width: 590px) {
    .order-box {
        width: 100%;
    }
}

@media (max-width: 860px) {
    .myword {
        font-size: 14px;
    }
}

@media (max-width: 590px) {
    .next-box {
        flex-direction: column;
    }
}

.amount {
    height: 30px;
    width: 50px;
}

@media (max-width: 590px) {
    .Max {
        font-size: 12px;
    }
}
.item-box1 {
        padding: 0 48px 0 48px;
    }
@media (max-width: 590px) {
    .item-box1 {
        padding: 0px;
    }
}
.text-center{
    width: 2.5rem;
}
</style>