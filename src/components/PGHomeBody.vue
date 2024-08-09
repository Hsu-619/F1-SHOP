<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
        <header class="mb-5">
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/imges/SF24.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block text-start">
                        <h1>SF-24</h1>
                        <p>Discover the SF-24 · Total displacement1600 cc · Maximum rpm15,000 · Superchargingsingle
                            turbocharger · Maximum fuel flow rate100 kg/hr · Configuration90° V6 ...</p>
                        <a href="https://www.ferrari.com/en-EN/formula1/sf-24" target="_blank">
                            <button type="button" class="btn btn-primary btn-lg mb-3">Learn more</button>
                        </a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/imges/W15.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>F1W15</h1>
                        <p>F1 W15: 2024 Technical Specifications</p>
                        <a href="https://www.mercedesamgf1.com/f1-w15-2024-technical-specifications" target="_blank">
                            <button type="button" class="btn btn-primary btn-lg mb-3">Learn more</button>
                        </a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/imges/RB20.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block text-end">
                        <h1 class="text-black">RB-20</h1>
                        <p class="text-black">Number of cylinders:6 Number of valves:4 per cylinder Capacity:1,600cc Vee
                            angle:90-degrees Max RPM:15,000RPM Power output:900HP</p>
                        <a href="https://www.redbullracing.com/int-en/cars/rb20" target="_blank">
                            <button type="button" class="btn btn-primary btn-lg mb-3">Learn more</button>
                        </a>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </header>
    <div class="container py-5">
        <section class="row mb-5">
            <div class="col-12 col-lg-4 px-3 py-3 d-flex flex-column justify-content-center align-items-center"
                data-aos="zoom-in-right" data-aos-once="false">
                <div class="my-circle rounded-circle mb-3">
                    <img src="../assets/imges/hamilton.jpg" class="w-100 rounded-circle">
                </div>
                <h2 class="">Lewis Hamilton</h2>
                <h5 class="">currently drives for the Mercedes team .Also regarded as one of the most successful drivers
                    in Formula One history.Hamilton won his first world championship while driving for McLaren in 2008 .
                    Win a total of seven world championships .
                </h5>
                <a href="https://www.mercedesamgf1.com/drivers/driver/lewis-hamilton" target="_blank">
                    <button type="button" class="btn btn-bg text-primary">
                        Learn more
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </a>
            </div>
            <div class="col-12 col-lg-4 px-3 py-3 d-flex flex-column justify-content-center align-items-center"
                data-aos="zoom-in" data-aos-once="false">
                <div class="my-circle rounded-circle mb-3">
                    <img src="../assets/imges/verstappen.jpg" class="w-100 rounded-circle">
                </div>
                <h2 class="">Max Verstappen</h2>
                <h5 class="">currently drives for Red Bull Racing . Verstappen holds the record for the most race wins
                    in a single season, the most podium finishes in a single season, the longest consecutive race wins,
                    and the longest consecutive pole position in the Formula One World Championship .</h5>
                <a href="https://www.redbullracing.com/int-en/drivers/max-verstappen/" target="_blank">
                    <button type="button" class="btn btn-bg text-primary">
                        Learn more
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </a>
            </div>
            <div class="col-12 col-lg-4 px-3 py-3 d-flex flex-column justify-content-center align-items-center"
                data-aos="zoom-in-left" data-aos-once="false">
                <div class="my-circle rounded-circle mb-3">
                    <img src="../assets/imges/leclerc.jpg" class="w-100 rounded-circle">
                </div>
                <h2 class="">Charles Leclerc</h2>
                <h5 class="">currently Drives for Scuderia Ferrari ; he was a member of the Ferrari Driver Academy . He
                    won the GP3 series and F2 drivers' titles in 2016 and 2017 respectively . [1] [2] He has
                    participated in the World Formula One Championship on behalf of the Sauber team since 2018 . [3]
                    Joined Ferrari in 2019 .</h5>
                <a href="https://www.ferrari.com/en-TW/formula1/charles-leclerc" target="_blank">
                    <button type="button" class="btn btn-bg text-primary">
                        Learn more
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </a>
            </div>
        </section>
        <div class="d-flex justify-content-center mb-5">
            <button type="button" class="btn btn-primary btn-lg">button</button>
        </div>
        <section class="row py-5">
            <div class="col-3 d-flex flex-warp flex-column my-auto">
                <p class="fs-3 text-black">一級方程式賽車（英語：Formula One，也叫Formula 1或者F1）
                </p>
            </div>
            <div class="col-9">
                <p class="fs-5">一級方程式賽車（英語：Formula One，也叫Formula
                    1或者F1）是由國際汽車聯盟舉辦的最高級別的賽車比賽。F1賽季包括一系列的比賽，這些通常被稱為「大獎賽」（法語：Grands
                    Prix）的賽事通常在專門修建的賽道上進行，有些情況下也在臨時封閉的普通城市道路上舉行，其中最有名的是在蒙特卡洛舉辦的摩納哥大獎賽。[2]每場比賽的結果算入積分系統並以此確定兩個年度世界冠軍：一個給車手，另一個給製造商。
                </p>
            </div>
        </section>
        <div class="row mx-0 mb-5">
            <div class="col-6 d-flex flex-column">
                <div class="row pb-1">
                    <div class="col-6" data-aos="flip-left" data-aos-once="false">
                        <img class="w-100" src="../assets/imges/silver stone.jpg">
                    </div>
                    <div class="col-6" data-aos="flip-right" data-aos-once="false">
                        <img class="w-100" src="../assets/imges/abudhabi.jpg">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12" data-aos="flip-up" data-aos-once="false">
                        <img class="w-100" src="../assets/imges/monaco.jpg">
                    </div>
                </div>
            </div>
            <div class="col-6 d-flex flex-column">
                <div class="row pb-1">
                    <div class="col-12" data-aos="flip-left" data-aos-once="false">
                        <img class="w-100" src="../assets/imges/suzuka.jpg">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6" data-aos="flip-right" data-aos-once="false">
                        <img class="w-100" src="../assets/imges/singapore.jpg">
                    </div>
                    <div class="col-6" data-aos="flip-up" data-aos-once="false">
                        <img class="w-100" src="../assets/imges/las vegas.jpg">
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex py-5 mb-5 flex-column align-items-center justify-content-center">
            <div class="fs-2">
                Check out this season's full breakdown of drivers, points and current positions.
            </div>
            <div class="fs-4">
                Choose your season champion
            </div>
        </div>
        <div class="px-ms-5 mb-5">
            <table class="table">
                <thead>
                    <tr class="table-active">
                        <th scope="col">Team</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Point</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">RedBull</th>
                        <td>Max</td>
                        <td>Verstappen</td>
                        <td>255</td>
                        <td class="d-flex justify-content-end">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">McLaren</th>
                        <td>Lando</td>
                        <td>Norris</td>
                        <td>171</td>
                        <td class="d-flex justify-content-end">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Ferrari</th>
                        <td>Charles</td>
                        <td>Leclerc</td>
                        <td>150</td>
                        <td class="d-flex justify-content-end">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Ferrari</th>
                        <td>Carols</td>
                        <td>Sains</td>
                        <td>146</td>
                        <td class="d-flex justify-content-end">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-between">
                <a href="https://www.formula1.com/en/drivers" target="_blank">
                    <button type="button" class="btn btn-bg text-primary">
                        Learn more
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </a>
                <button type="button" class="btn btn-primary">
                    Next
                </button>
            </div>
        </div>
        <section class="row py-5">
            <div class="col-3 d-flex flex-warp flex-column my-auto">
                <p class="fs-1">F1 Team Leader
                </p>
            </div>
            <div class="col-9">
                <p class="fs-5">Just like the general manager (GM), supervisor, or head coach of a professional team, F1
                    teams will use the principal (sometimes the more direct "Boss") or CEO to coordinate the team's
                    important decisions and obtain results. The best interests on and off the track, and just like a
                    famous team, serving as the team leader of Ferrari, McLaren and other famous teams is an honor, but
                    it is also a burden.
                </p>
            </div>
        </section>
        <div class="row four-card py-4 d-flex justify-content-center" data-aos="fade-up" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <div class="card" style="width: 18rem;">
                <img src="../assets/imges/toto.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5>Mercedes</h5>
                    <h4 class="mb-4">Toto Wolf</h4>
                    <p class="card-text">In 2009, Wolff purchased a stake in Williams Racing and joined its board of
                        directors. In 2012, he was promoted to the position of CEO of Williams Racing Team .</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="../assets/imges/horner.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5>RedBull</h5>
                    <h4 class="mb-4">Christian Horner</h4>
                    <p class="card-text">In November 2004,the Austrian energy drink company Red Bull purchased the
                        Jaguar Racing Team , which later became the Red Bull Racing Team . Horner was recruited in 2005
                        to become the youngest team president at the time.</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="../assets/imges/guenther.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5>Haas</h5>
                    <h4 class="mb-4">Guenther Steiner</h4>
                    <p class="card-text">recruited the core staff, interviewed every team member,and developed
                        partnerships with outsourcers Dallara and Ferrari.On 14 April 2014, he was officially announced
                        team principal of the fledgling Haas F1 Team.</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="../assets/imges/vasseur.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5>Ferrari</h5>
                    <h4 class="mb-4">Frederic Vasseur</h4>
                    <p class="card-text">At the end of the 2022 season he came to Maranello, taking on the role of
                        General Manager and Team Principal of Scuderia Ferrari. </p>
                </div>
            </div>
        </div>
        <div class="my-lax-box-2"></div>
        <section class="row py-5 d-flex justify-content-center" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <div class="col-5 d-flex flex-warp flex-column my-auto order-md-2">
                <h2 class="lh-1">The Fédération Internationale de l'Automobile</h2>
                <p class="fs-5">is a non-profit international organization founded on June 20, 1904. It is mainly
                    dedicated to promoting motor sports and serving all the world Providing a safe, sustainable and
                    accessible driving environment for motorists everywhere.
                </p>
            </div>
            <div class="col-3 d-flex justify-content-center align-items-center">
                <img class="my-circle rounded-circle" src="../assets/imges/FIA.jpg" alt="">
            </div>
        </section>
        <section class="row py-5 d-flex justify-content-center align-items-center" data-aos="fade-up"
            data-aos-once="false" data-aos-anchor-placement="center-bottom">
            <div class="col-5 d-flex flex-warp flex-column">
                <h2 class="lh-1 display-6">Formula One</h2>
                <p class="fs-5">The " formula " in the name refers to the rules that all participating drivers and
                    vehicles must abide by. The F1 season includes a series of races, called "Grand Prix" (French:
                    Grands Prix ) . The events are usually held on specially built circuits, and in some cases are also
                    held on temporarily closed ordinary city roads . The most famous of them is Monaco Grand Prix in
                    Monte Carlo .
                </p>
            </div>
            <div class="col-3 d-flex justify-content-center">
                <img class="my-circle rounded-circle" src="../assets/imges/F1 LOGO.jpg" alt="">
            </div>
        </section>
        <section class="row py-5 d-flex justify-content-center" data-aos="fade-up" data-aos-once="false"
            data-aos-anchor-placement="center-bottom">
            <div class="col-5 d-flex flex-warp flex-column my-auto order-md-2">
                <h2 class="lh-1">F1 24</h2>
                <p class="fs-5">is a racing video game developed by Codemasters and published by EA Sports. It is the
                    seventeenth entry in the F1 series and holds the license for the 2024 Formula One and Formula 2
                    championships.
                </p>
            </div>
            <div class="col-3 d-flex justify-content-center">
                <img class="my-circle rounded-circle" src="../assets/imges/f1 24.jpg" alt="">
            </div>
        </section>
        <div class="d-flex justify-content-center mb-5">
            <button type="button" class="btn btn-primary btn-lg">button</button>
        </div>
        <section class="row py-5 mb-5">
            <div class="price col-6 d-flex flex-warp flex-column order-md-2">
                <h2>Pirelli</h2>
                <h1 class="lh-1">F1 tyres: details and technical data.</h1>
                <div class="brand d-flex">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    <p>1.2w Reviews</p>
                    <i class="bi bi-facebook ms-3"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-chat-fill"></i>
                </div>
                <p class="fs-4">This year, the number of compounds that Pirelli can nominate throughout the championship
                    has increased to six: making it possible to have tires that are even more perfectly suited to the
                    specific characteristics of each track. A philosophy that is equally true for Pirelli’s road
                    products, which benefit from technology directly transferred from Formula 1®.
                </p>
                <div class="brand d-flex align-items-center pb-3 border-bottom border-3">
                    <span>color</span>
                    <i class="bi bi-circle"></i>
                    <i class="bi bi-circle-fill"></i>
                    <i class="bi bi-circle-fill"></i>
                    <span>size</span>
                    <div class="btn-group">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
                            Clickable
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">item</a></li>
                            <li><a class="dropdown-item" href="#">item</a></li>
                            <li><a class="dropdown-item" href="#">item</a></li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <span>$50000</span>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-primary" type="submit">Shopping Cart</button>
                        <i class="bi bi-heart ms-3"></i>
                    </div>
                </div>
            </div>
            <div class="col-6 order-md-1">
                <img class="w-100" src="../assets/imges/pireli-2.jpg" alt="">
            </div>
        </section>
        <div class="row four-card py-4 d-flex justify-content-center">
            <div class="card" style="width: 18rem;" data-aos="flip-down" data-aos-once="false">
                <img src="../assets/imges/redbullLogo.jpg" class="card-img-top h-50" alt="...">
                <div class="card-body">
                    <h3>RedBull Racing</h3>
                    <h4 class="mb-4">Driver Lineup</h4>
                    <p class="card-text">
                        Max Verstappen
                        <br>
                        Sergio Pérez
                    </p>
                </div>
            </div>
            <div class="card" style="width: 18rem;" data-aos="flip-down">
                <img src="../assets/imges/ferrariLogo.jpg" class="card-img-top h-50" alt="...">
                <div class="card-body">
                    <h3>Scuderia Ferrari</h3>
                    <h4 class="mb-4">Driver Lineup</h4>
                    <p class="card-text">Carlos Sainz <br> Charles Leclerc</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;" data-aos="flip-down">
                <img src="../assets/imges/mercedesLogo.jpg" class="card-img-top h-50" alt="...">
                <div class="card-body">
                    <h3>Mercedes-AMG</h3>
                    <h4 class="mb-4">Driver Lineup</h4>
                    <p class="card-text">Lewis Hamilton <br> George Russell</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;" data-aos="flip-down">
                <img src="../assets/imges/mecleronLogo.jpg" class="card-img-top h-50" alt="...">
                <div class="card-body">
                    <h3>McLaren F1 Team</h3>
                    <h4 class="mb-4">Driver Lineup</h4>
                    <p class="card-text">Lando Norris <br> Oscar Piastri</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;" data-aos="flip-up">
                <img src="../assets/imges/walemsLogo.jpg" class="card-img-top h-50" alt="...">
                <div class="card-body">
                    <h3>Williams Racing</h3>
                    <h4 class="mb-4">Driver Lineup</h4>
                    <p class="card-text">Alex Albon <br> Logan Sargeant</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;" data-aos="flip-up">
                <img src="../assets/imges/aelpinLogo.jpg" class="card-img-top h-50" alt="...">
                <div class="card-body">
                    <h3>Alpine F1 Team</h3>
                    <h4 class="mb-4">Driver Lineup</h4>
                    <p class="card-text">Esteban Ocon <br> Pierre Gasly</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;" data-aos="flip-up">
                <img src="../assets/imges/smbullLogo.jpg" class="card-img-top h-50" alt="...">
                <div class="card-body">
                    <h3>AlphaTauri</h3>
                    <h4 class="mb-4">Driver Lineup</h4>
                    <p class="card-text">Yuki Tsunoda <br> Daniel Ricciardo</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;" data-aos="flip-up">
                <img src="../assets/imges/hasLogo.jpg" class="card-img-top h-50" alt="...">
                <div class="card-body">
                    <h3>Haas F1 Team</h3>
                    <h4 class="mb-4">Driver Lineup</h4>
                    <p class="card-text">Kevin Magnussen <br> Nico Hülkenberg</p>
                </div>
            </div>
        </div>
    </div>
    <div class="map w-100 position-relative">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7788.062511184512!2d136.52844205954753!3d34.844241917104796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60038a958a96b7cd%3A0x86c145fa360123dc!2z6Yi06bm_6LO96YGT!5e0!3m2!1szh-TW!2stw!4v1721284020290!5m2!1szh-TW!2stw"
            width="100%" height="950" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" id="suzuka"></iframe>
        <div class="box-2 position-absolute d-flex align-items-center">
            <form class="feadback-form row g-3 w-100 m-0 d-flex flex-column align-items-center" action="./購物車pg-1.html">
                <h2 class="px-5">FEADBACK</h2>
                <h4 class="px-5">Post-ironic portland shabby chic echo park, banjo fashion axe</h4>
                <div class="col-10">
                    <label for="validationServer03" class="form-label">Email</label>
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                </div>
                <div class="col-10">
                    <label for="validationServer03" class="form-label">Password</label>
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
                </div>
                <div class="col-10">
                    <button class="btn btn-primary w-100" type="submit">Submit</button>
                </div>
                <h4 class="px-5">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</h4>
            </form>
        </div>
    </div>
</template>

<style scoped>
    body{
    overflow-x: hidden ;
}

.my-circle {
    width: 140px;
    height: 140px;
}

.col-12 {
    row-gap: 10px;
}

.four-card {
    row-gap: 20px;
    column-gap: 15px;
}

.brand {
    column-gap: 7px;
}

.price {
    row-gap: 15px;
}

.box-2 {
    width: 35%;
    height: 75%;
    background-color: whitesmoke;
    right: 5%;
    top: 13%;
}

@media (max-width: 1080px) {
    .box-2 {
        width: 70%;
        height: 75%;
        right: 15%;
        top: 17%;
    }
}

@media (max-width: 392px) {
    .box-2 {
        width: 80%;
        height: 70%;
        right: 10%;
        top: 20%;
    }
}

.feadback-form {
    row-gap: 10px;
}

.my-lax-box-2 {
    width: 200px;
    height: 80px;
    margin-top: 200px;
    background-image: url(../img/MCL\ 38.jpg);
    background-position: center;
    background-size: cover;
    font-size: 100px;
    font-weight: bold;
}
</style>