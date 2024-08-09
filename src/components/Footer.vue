<template>
        <footer class="pt-2 bg-primary-subtle" data-bs-theme="dark">
        <div class="container text-center pt-3 d-flex flex-column">
            <div class="row ">
                <div class="col-lg-4 col-12 d-flex flex-wrap justify-content-center mb-3">
                    <img src="../assets/imges/F1 LOGO.jpg" alt="" class="me-2" width="60 " height="60">
                    <div class="d-flex flex-column text-light">
                        <span class="fs-3">Foumula 1</span>
                        <span class="fs-5">Official Store</span>
                    </div>
                    <div class="d-flex text-light">
                        <span class="fs-3 text-danger d-flex align-items-center">Racing For Speed</span>
                    </div>
                </div>
                <div class="col-lg-8  col-12 d-flex flex-wrap">
                    <div class="col-xl-3 col-lg-6 col-12 mb-3">
                        <ul class="list-unstyled text-body-secondary">
                            <h5>Categories</h5>
                            <li>link1</li>
                            <li>link2</li>
                            <li>link3</li>
                            <li>link4</li>
                        </ul>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-12 mb-3">
                        <ul class="list-unstyled text-body-secondary">
                            <h5>Categories</h5>
                            <li>link1</li>
                            <li>link2</li>
                            <li>link3</li>
                            <li>link4</li>
                        </ul>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-12 mb-3">
                        <ul class="list-unstyled text-body-secondary">
                            <h5>Categories</h5>
                            <li>link1</li>
                            <li>link2</li>
                            <li>link3</li>
                            <li>link4</li>
                        </ul>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-12 mb-3">
                        <ul class="list-unstyled text-body-secondary">
                            <h5>Categories</h5>
                            <li>link1</li>
                            <li>link2</li>
                            <li>link3</li>
                            <li>link4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0">
            <div class="bg-secondary d-flex justify-content-between px-5 py-2">
                <span class="ms-5 text-light"> ©2024 TokyoHot</span>
                <div class="me-5">
                    <a href="" class="text-light me-2"><i class="bi bi-facebook"></i></a>
                    <a href="" class="text-light me-2"><i class="bi bi-twitter"></i></a>
                    <a href="" class="text-light me-2"><i class="bi bi-instagram"></i></a>
                    <a href="" class="text-light me-5"><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>
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