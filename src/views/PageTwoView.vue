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
                    <div class="progress-bar" style="width: 100%"></div>
                </div>
                <div class="progress p-0 position-absolute" role="progressbar"
                    style="height: 10px; top:33%; left: 45%; width: 10%;">
                    <div class="progress-bar" style="width: 50%"></div>
                </div>
                <div class="progress p-0 position-absolute" role="progressbar"
                    style="height: 10px; top:33%; left: 67%; width: 10%;">
                    <div class="progress-bar" style="width: 0%"></div>
                </div>
            </div>
            <div class="pay-box px-5">
                <div class="list-box">
                    <div class="list fs-2 mb-2 border-top border-primary border-3 pt-3">付款方式</div>
                </div>
                <div class="pay-box-small px-3">
                    <div class="form-check py-3 border-bottom border-primary border-3 ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            信用卡付款
                        </label>
                    </div>
                    <div class="form-check py-3 border-bottom border-primary border-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        <label class="form-check-label" for="flexRadioDefault2">
                            網路ATM
                        </label>
                    </div>
                    <div class="form-check py-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        <label class="form-check-label" for="flexRadioDefault2">
                            超商代碼
                        </label>
                    </div>
                </div>
            </div>
            <div class="transport-box px-5">
                <div class="list-box">
                    <div class="list fs-2 mb-2 border-top border-primary border-3 pt-3">運送方式</div>
                </div>
                <div class="transport-box-small px-3">
                    <div class="form-check py-3 border-bottom border-primary border-3 ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault-2" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            黑貓宅急便
                        </label>
                    </div>
                    <div class="form-check py-3 border-bottom border-primary border-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault-2" id="flexRadioDefault2">
                        <label class="form-check-label" for="flexRadioDefault2">
                            超商店到店
                        </label>
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
                        <span class="d-flex justify-content-end">{{ totalQuantity(driverTime) }}</span>
                        <span class="d-flex justify-content-end">${{ totalPrice(driverTime) }}</span>
                        <span class="d-flex justify-content-end">$1000</span>
                        <span class="d-flex justify-content-end">${{ totalPrice(driverTime) + 1000 }}</span>
                    </div>
                </div>
            </div>
            <div class="next-box px-5 py-4 d-flex justify-content-between">
                <RouterLink to="/pageone">
                    <button type="button" class="btn">
                        <i class="bi bi-arrow-left"></i>
                        返回購物
                    </button>
                </RouterLink>
                <RouterLink to="/pagethree">
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