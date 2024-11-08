<!doctype html>
<html>

<head>
    <?php include '../php/head.php'; ?>
</head>

<style>
    .btn-show {
        margin-left: 20%;
        background-color: #f0f0f0;
        /* Example background color */
        border-radius: 20px;
    }

    .btn-instruction {
        margin-right: 20%;
        background-color: #f0f0f0;
        /* Example background color */
        border-radius: 20px;
    }

    .bg-secondary {
        background-color: #6c757d;
        /* Example background color */
        color: white;
    }

    .text-secondary-foreground {
        color: white;
    }

    .hover\:bg-secondary\/80:hover {
        background-color: #5a6268;
        /* Example hover color */
    }

    .bg-primary {
        background-color: #007bff;
        /* Example background color */
        color: white;
    }

    .text-primary-foreground {
        color: white;
    }

    .hover\:bg-primary\/80:hover {
        background-color: #0056b3;
        /* Example hover color */
    }

    .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .py-2 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .rounded {
        border-radius: 0.25rem;
    }

    .button-container {
        display: flex;
        justify-content: center;
        gap: 10px;
        /* Adjust the gap as needed */
        margin-top: 10px;
        /* Adjust the top margin as needed */
    }

    .rounded-full {
        border-radius: 50px;
        /* Adjust for more rounded corners */
    }

    .button1 {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .button1:hover {
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
</style>

<body>


    <!-- Header Section -->
    <header>
        <?php include '../php/header_home_vn.php' ?>
    </header>
    </div>
    <div class="productList">
        <div class="wal">
            <div class="pbanner">
                <img src="../images/20221111115556855.jpg" class="PC-Box" alt="Doraemon" />
                <img src="../images/20221111115556855.jpg" class="Phone-Box" alt="Doraemon" />
            </div>
            <div class="title">Doraemon</div>
            <div class="list">
                <ul>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/20221111120123714.jpg" alt="Time Machine" />
                                </div>
                                <div class="num">K20401</div>
                                <div class="name">Cỗ Máy Thời Gian</div>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/20221111120147229.jpg" alt="Nobita's Room" />
                                </div>
                                <div class="num">K20402</div>
                                <div class="name">Phòng Nobita</div>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/20221111120213761.jpg" alt="Doraemon-Beatles" />
                                </div>
                                <div class="num">K20406</div>
                                <div class="name">Xe hơi Doraemon</div>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/20221111120359010.jpg" alt="Doraemon-Bus" />
                                </div>
                                <div class="num">K20407</div>
                                <div class="name">Xe buýt Doraemon</div>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/20221111120421729.jpg" alt="Doraemon-Tv" />
                                </div>
                                <div class="num">K20408</div>
                                <div class="name">Doraemon-Tivi</div>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/20221111120447995.jpg"
                                        alt="Doraemon-Cement Pipe Space" /></div>
                                <div class="num">K20409</div>
                                <div class="name">Doraemon-Bãi đất trống</div>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/20221111120551198.jpg" alt="Doraemon-Classic" />
                                </div>
                                <div class="num">K20411</div>
                                <div class="name">Doraemon-Kinh Điển</div>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/20221111120614604.jpg"
                                        alt="Doraemon-Maneki-neko" /></div>
                                <div class="num">K20412</div>
                                <div class="name">Doraemon-Maneki-neko</div>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/20221111120638323.jpg"
                                        alt="Doraemon-Astronaut" /></div>
                                <div class="num">K20413</div>
                                <div class="name">Doraemon-Phi Hành Gia</div>
                                <a href="shopping-cart.php" id="btn-cart"
                                    class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    View Cart
                                </a>

                                <a href="your-order.php" id="btn-cart"
                                    class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                    Your Order
                                </a>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/2022111112071463.jpg"
                                        alt="Doraemon-Space Exploration" /></div>
                                <div class="num">K20421</div>
                                <div class="name">Doraemon-Khám Phá Không Gian</div>
                                <button class="btn-show">Show More</button>
                                <button class="btn-instrucion">Instruction</button>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <a href="javascript:;">
                                <div class="imgDiv"><img src="../images/20221111120727826.jpg" alt="Doraemon" /></div>
                                <div class="num">S0104</div>
                                <div class="name">Doraemon</div>
                                <button
                                    class="button1">Show More</button>
                                <button
                                    class="btn-instruction bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded">Instruction</button>
                            </a>

                        </div>
                    </li>

                    <li>
                        <div class="box">
                            <div class="txt">Nhiều sản phẩm mới<br>Hãy chờ đón</div>
                        </div>
                    </li>
                </ul>
                <div class="clear_f"></div>
            </div>
        </div>
    </div>





</body>

</html>
<script language="javascript" type="text/javascript" src="/script/js.js"></script>
<script language="javascript" type="text/javascript" src="/en/script/js.js"></script>
<script src="chrome-extension://igkkmokkmlbkkgdnkkancbonkbbmkioc/sm.bundle.js" data-pname="recorder-screenshot-v3"
    data-asset-path="https://apv3.s3.ap-northeast-2.amazonaws.com"></script>
<div style="display: none" class="ubey-RecordingScreen-count-down ubey-RecordingScreen-count-down-container">
    <style>
        .ubey-RecordingScreen-count-down-container {
            position: fixed;
            height: 100vh;
            width: 100vw;
            top: 0;
            left: 0;
            z-index: 9999999999999;
            background-color: rgba(0, 0, 0, 0.2);
        }

        .ubey-RecordingScreen-count-down-content {
            position: absolute;
            display: flex;
            top: 50%;
            left: 50%;
            justify-content: center;
            align-items: center;
            color: white;
            height: 15em;
            width: 15em;
            transform: translate(-50%, -100%);
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 50%;
        }

        #ubey-RecordingScreen-count-count {
            font-size: 14em;
            transform: translateY(-2%);
        }
    </style>
    <div class="ubey-RecordingScreen-count-down-content">
        <span id="ubey-RecordingScreen-count-count"></span>
    </div>
</div>
</body><chatgpt-sidebar data-gpts-theme="light"></chatgpt-sidebar><chatgpt-sidebar-popups
    data-gpts-theme="light"></chatgpt-sidebar-popups>

</html>