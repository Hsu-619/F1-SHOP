<script>
    import { RouterLink } from 'vue-router'
    import { totalPrice } from '@/composable/useCount';
    import { totalQuantity } from '@/composable/useQuantity';

    export default {
        setup() {
            return { totalPrice , totalQuantity };
        },
        data() {
            return {
                driverTime: [],
                liveInfo: [
                    {
                    name:'',
                    phone:'',
                    email:'',
                    city:'',
                    area:'',
                    address:'',
                    }
                ],
            }
        },
        mounted() {
            this.getStorage();
        },
        methods: {
    // 取得Storage的車手費用資料
        getStorage() {
            try {
                const data = JSON.parse(sessionStorage.getItem('driver-time')) || [];
                this.driverTime = data;
                } catch (error) {
                    console.error(error);
                }             
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
                    <button type="button" class="btn btn-sm btn-primary rounded-pill"
                        style="width: 2.5rem; height:2.5rem;">
                        <span class="fs-5">2</span>
                    </button>
                    <span class="d-flex justify-content-center mt-1 myword">付款及運送</span>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                    <button type="button" class="btn btn-sm btn-primary rounded-pill"
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
                    <div class="progress-bar" style="width: 100%"></div>
                </div>
                <div class="progress p-0 position-absolute" role="progressbar"
                    style="height: 10px; top:33%; left: 45%; width: 10%;">
                    <div class="progress-bar" style="width: 100%"></div>
                </div>
                <div class="progress p-0 position-absolute" role="progressbar"
                    style="height: 10px; top:33%; left: 67%; width: 10%;">
                    <div class="progress-bar" style="width: 50%"></div>
                </div>
            </div>
            <div class="list-box px-5">
                <div class="list fs-2 mb-2 border-top border-primary border-3 pt-3">寄送資料</div>
            </div>
            <span class="fs-4 ps-5">姓名</span>
            <div class="input-group mb-3 px-5">
                <input type="text" class="form-control" placeholder="NLNLOuO">
            </div>
            <span class="fs-4 ps-5">電話</span>
            <div class="input-group mb-3 px-5">
                <input type="text" class="form-control" placeholder="0800-000-000">
            </div>
            <span class="fs-4 ps-5">Emali</span>
            <div class="input-group mb-3 px-5">
                <input type="text" class="form-control" placeholder="abc123@gmail.com">
            </div>
            <span class="fs-4 ps-5">地址</span>
            <div class="input-group mb-3 px-5">
                <input type="text" class="form-control me-2" placeholder="城市">
                <input type="text" class="form-control ms-2" placeholder="區域">
            </div>
            <div class="input-group mb-3 px-5">
                <input type="text" class="form-control" placeholder="地址">
            </div>
            <div class="total-boxB px-5">
                <div class="total-box d-flex justify-content-end border-bottom border-top border-primary border-3 py-3">
                    <div class="total-Number d-flex flex-column">
                        <span>數量:</span>
                        <span>小計:</span>
                        <span>運費:</span>
                        <span>總計:</span>
                    </div>
                    <div class="total-Money ps-5 ms-5 d-flex flex-column">
                        <span class="d-flex justify-content-end">{{ totalQuantity(driverTime) }}</span>
                        <span class="d-flex justify-content-end">${{ totalPrice(driverTime) }}</span>
                        <span class="d-flex justify-content-end">$1000</span>
                        <span class="d-flex justify-content-end">${{ totalPrice(driverTime) + 1000 }}</span>
                    </div>
                </div>
            </div>
            <div class="next-box px-5 py-4 d-flex justify-content-between">
                <RouterLink to="/pagetwo">
                    <button type="button" class="btn">
                        <i class="bi bi-arrow-left"></i>
                        返回購物
                    </button>
                </RouterLink>
                <RouterLink to="/pagefour">
                    <button type="button" class="btn btn-primary">
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
</style>