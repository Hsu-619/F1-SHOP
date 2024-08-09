<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <div class="container-full position-relative">
        <div class="row mx-0 h-100">
            <div class="col-6 text-light d-flex h-100">
                <div class="bg-word d-flex flex-column justify-content-center position-relative">
                    <div class="left-box">
                        <div class="d-flex flex-column">
                            <span class="word1 px-5 pt-5">Most Fast Racing</span>
                            <span class="word2 px-5">Formula One Officle SHOP</span>
                        </div>
                    </div>
                    <div class="link position-absolute">
                        <a href="" class="text-black me-2"><i class="bi bi-facebook"></i></a>
                        <a href="" class="text-black me-2"><i class="bi bi-twitter"></i></a>
                        <a href="" class="text-black me-2"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
                <div class="left-login h-100 position-absolute">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <form class="row g-3 d-flex justify-content-center align-items-center">
                            <div class="form-top col-9 d-flex flex-column align-items-center justify-content-center">
                                <div class="Logo d-flex" href="">
                                    <img src="../assets/imges/F1 LOGO.jpg" alt="Logo" width="100" height="100"
                                        class="d-inline-block align-text-top">
                                </div>
                                <div class="box-all d-flex">
                                    <div class="box d-flex justify-content-center align-items-center">
                                        <div class="fs-2">F</div>
                                    </div>
                                    <div class="box d-flex justify-content-center align-items-center">
                                        <div class="fs-2">G+</div>
                                    </div>
                                    <div class="box d-flex justify-content-center align-items-center">
                                        <div class="fs-2">在</div>
                                    </div>
                                </div>
                                <span class="word3 text-light">請使用電子郵件登入您的帳戶</span>
                            </div>
                            <div class="d-flex justify-content-center">
                                <input type="text" class="form-control w-75" id="validationDefaultUsername" placeholder="name@example.com" required>
                            </div>
                            <div class="d-flex justify-content-center">
                                <input type="password" class="form-control w-75" id="floatingPassword"
                                    placeholder="Password">
                            </div>
                            <RouterLink to="/pageone">
                                <div class="submit d-flex justify-content-center">
                                    <button class="btn btn-primary w-75" type="submit">送出</button>
                                </div>
                            </RouterLink>
                            <div class="d-flex align-items-end justify-content-center">
                                <a href="" class="text-black me-2"><i class="bi bi-facebook"></i></a>
                                <a href="" class="text-black me-2"><i class="bi bi-twitter"></i></a>
                                <a href="" class="text-black me-2"><i class="bi bi-instagram"></i></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="right col-6 h-100">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <form class="row g-3 needs-validation d-flex justify-content-center align-items-center">
                        <div class="form-top col-9 d-flex flex-column align-items-center justify-content-center">
                            <div class="Logo d-flex" href="">
                                <img src="../assets/imges/F1 LOGO.jpg" alt="Logo" width="100" height="100"
                                    class="d-inline-block align-text-top">
                            </div>
                            <div class="box-all d-flex">
                                <div class="box d-flex justify-content-center align-items-center">
                                    <div class="fs-2">F</div>
                                </div>
                                <div class="box d-flex justify-content-center align-items-center">
                                    <div class="fs-2">G+</div>
                                </div>
                                <div class="box d-flex justify-content-center align-items-center">
                                    <div class="fs-2">在</div>
                                </div>
                            </div>
                            <span class="word3 text-light">請使用電子郵件登入您的帳戶</span>
                        </div>
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                            <label for="floatingInput">Email address</label>
                            <div class="invalid-feedback">
                                Please input your email.
                            </div>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <RouterLink to="/pageone">
                            <div class="submit d-flex justify-content-center">
                                <button class="btn btn-primary w-75" type="submit">送出</button>
                            </div>
                        </RouterLink>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.container-full {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/imges/F1-1.png);
    background-size: cover;
}

.link {
    bottom: 5%;
    left: 50%;
    display: flex;
}

.left-login {
    display: none;
}

@media (max-width:1080px) {
    .right {
        display: none;
    }

    .left-box {
        display: none;
    }

    .left-login {
        display: flex;
        left: 6%;
    }

    .link {
        display: none;
    }
}

.word1 {
    font-size: 72px;
}

.word2 {
    font-size: 48px;
}

.word3 {
    font-size: 20px;
}

.text-light {
    font-size: 24px;
}

.right {
    background-color: blue;
    opacity: 0.9;
}

.box-all {
    column-gap: 20px;
}

.box {
    border: 1px solid black;
    border-radius: 50%;
    height: 70px;
    width: 70px;
}

.form-top {
    row-gap: 20px;
}
</style>