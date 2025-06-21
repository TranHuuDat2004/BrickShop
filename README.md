# BrickShop - Building Block Toy Paradise 🧱

Welcome to BrickShop, an e-commerce website project dedicated to providing creative building block toys from leading brands like **Qman**, **Keeppley**, and **LEGO**. Explore a world of creativity with diverse themes ranging from Superheroes, Conan, Sanrio, Doraemon to Ninjago, Chima, City, and many more!
This README is available in English and Vietnamese. Please expand the section for your preferred language.

<p align="center">
  <img src="Screenshot/logo.png" alt="BrickShop Logo" width="150"/>
</p>

**Project Link:** [https://github.com/TranHuuDat2004/BrickShop](https://github.com/TranHuuDat2004/BrickShop)

---

<details>
<summary><strong>English Version (Click to Expand)</strong></summary>

## 👤 Author

*   **[Team Engineering]**
    *   **Trần Hữu Đạt** - Full-Stack Web Developer - [@TranHuuDat2004](https://github.com/TranHuuDat2004)
    *   **Lê Tấn Huy ( Huy Lê )** - Member - [@CodeSades](https://github.com/Codesades)
    *   **Dương Thị Thùy Linh** - Member - [@thuylinh1501](https://github.com/thuylinh1501)

## Table of Contents

*   [Introduction](#introduction)
*   [Technology Stack](#technology-stack)
*   [Customer Experience](#customer-experience)
    *   [Key Features (For Customers)](#key-features-for-customers)
    *   [Main Pages Description (User)](#main-pages-description-user)
    *   [Customer Interface (Bootstrap)](#customer-interface-bootstrap)
*   [Admin Panel](#admin-panel)
    *   [Key Features (For Administrators)](#key-features-for-administrators-admin)
    *   [Main Pages Description (Admin)](#main-pages-description-admin)
    *   [Admin Interface (Tailwind CSS)](#admin-interface-tailwind-css)
*   [Installation & Setup Guide](#installation--setup-guide)
    *   [Prerequisites](#prerequisites)
    *   [Installation Steps](#installation-steps)
    *   [Environment Variables](#environment-variables)
    *   [Running the Project](#running-the-project)
*   [License](#license)
*   [Contact](#contact)

## Introduction

BrickShop is an e-commerce platform where building block enthusiasts can find an extensive collection from Qman, Keeppley, and LEGO brands. The project offers a complete online shopping experience, from product discovery to payment and order tracking, along with a robust administration system for efficient business management.

## Technology Stack

*   **Frontend:**
    *   HTML5
    *   CSS3
        *   **Bootstrap:** Main CSS framework for the user-facing interface (customer pages).
        *   **Tailwind CSS:** Main CSS framework for the administrator interface (admin pages).
    *   JavaScript
*   **Backend:**
    *   Node.js, Express.js
*   **Database:**
    *   MySQL

## Customer Experience

### Key Features (For Customers)

*   👤 **Authentication & Account Management:**
    *   Register, Login, Logout.
    *   **Profile Settings:** Update personal information (name, email), change password, manage shipping addresses, customize profile picture (upload or choose from available collections), add/edit social media links.
*   🧱 **Browsing & Shopping:**
    *   View introductions to Qman, Keeppley, and LEGO brands on the homepage.
    *   Browse all products or filter by brand/theme.
    *   View product details: Images (gallery), description, price, SKU, suitable age, supplier, variations (if any), add to cart.
    *   Product Search.
*   🛒 **Cart & Checkout:**
    *   View/edit products in the shopping cart.
    *   Apply valid **Voucher/Coupon** codes for discounts.
    *   Proceed through the checkout process.
    *   **QR Code Payment** option.
*   🚚 **Order Management:**
    *   Review past order history.
    *   **Track order details:** View recipient information, address, shipping method, total amount, order date, and the list of products in the order.

### Main Pages Description (User)

*   **Home Page (Index):** The first landing page, providing a general overview of BrickShop and featured brands (Qman, Keeppley, LEGO), along with promotions (e.g., Black Friday). Displays featured themes/products for exploration.
*   **Products Page:** Lists the available building block toy products. Allows users to view multiple products, potentially with filtering or pagination.
*   **Product Detail Page:** Shows comprehensive information about a specific product, including multiple images, detailed description, price, attributes (brand, theme, SKU, age...), quantity selection, and "Add to Cart" / "Buy Now" buttons.
*   **Account Settings Page:** Enables users to manage their personal information, change passwords, update profile pictures (upload new or select from predefined collections like People, Cute, Lego Ninjago), and manage social media links (Twitter, Facebook, Google+, LinkedIn, Instagram).
*   **Order History/Detail Page:** Provides detailed information about a specific order placed by the user, including shipping info, product list, quantities, prices, and the total amount.

### Customer Interface (Bootstrap)
| Home Page                              | LEGO Introduction                      | Qman Introduction                      |
| :------------------------------------: | :----------------------------------: | :----------------------------------: |
| ![BrickShop Home](Screenshot/user_index.png) | ![LEGO Intro](Screenshot/lego.jpg)  | ![Qman Intro](Screenshot/qman.jpg)   |
| **Keeppley Introduction**              | **Products Page**                    | **Product Detail Page**              |
| ![Keeppley Intro](Screenshot/keeppley.jpg)| ![Products Page](Screenshot/product.png)| ![Product Detail](Screenshot/product_detail.png) |
| **Account Settings - Info**          | **Account Settings - Avatar**       | **Account Settings - Social Links** |
| ![Settings - Info](Screenshot/settings_profile.png)| ![Settings - Avatar](Screenshot/settings_avatar.png)| ![Settings - Social](Screenshot/settings_social.png)|
| **Order Detail**                       |                                      |                                      |
| ![Order Detail](Screenshot/order.png) |                                      |                                      |

## Admin Panel

### Key Features (For Administrators)

*   📊 **Dashboard:** Displays a quick overview: Total orders, user count, product count, comment count.
*   👥 **Manage Users:** View a list of all registered users with ID, Avatar, Username, Email. Provides actions like Edit and Delete user accounts.
*   🧱 **Manage Products:** Displays a list of all products with ID, Image, Name, Age, Provider, Price, Status (e.g., new, bestseller), and Edit, Delete actions.
*   💬 **Manage Comments:** Allows administrators to view and potentially approve/delete product comments.
*   📦 **Manage Orders:** Lists all placed orders with ID, Customer Name, Date, Price, Shipping Address, Delivery Method, Order Status. Allows viewing details for each order.
*   🏷️ **Manage Discounts / Coupons:** Manage discount programs or coupon codes (vouchers).
*   ➕ **Add Product:** A form allowing administrators to input information to add a new product, including Product Number, Name (English, Vietnamese), and upload multiple product images.
*   📚 **Add Category:** Allows administrators to add new brands or product themes.
*   🎟️ **Add Coupons:** A form to create new discount codes/vouchers.

### Main Pages Description (Admin)

*   **Dashboard:** Offers a high-level view of the store's activity through key metric cards. Main interface for navigating to other management sections.
*   **Manage Users:** Displays the user list in a table format, allowing admins to view basic information and perform management actions.
*   **Manage Products:** Presents the product catalog in a table. Admins can easily search, review, and edit or remove products.
*   **Manage Order:** Lists orders chronologically, showing their processing status. Provides quick access to order details.
*   **Add Product:** A detailed form interface for adding new products, including multi-language name input and image uploads.

### Admin Interface (Tailwind CSS)
| Dashboard                             | Manage Users                         | Manage Products                       |
| :-----------------------------------: | :----------------------------------: | :-----------------------------------: |
| ![Admin Dashboard](Screenshot/admin_index.png)| ![Admin Manage Users](Screenshot/manage_user.png)| ![Admin Manage Products](Screenshot/magage_product.png)|
| **Manage Orders**                    | **Add Product**                      |                                       |
| ![Admin Manage Order](Screenshot/manage_order.png)| ![Admin Add Product](Screenshot/add_product.png) |                                       |

## Installation & Setup Guide

### Prerequisites

*   Node.js (Version >= 16.x recommended)
*   npm / yarn
*   MySQL Server (Installed and running)
*   Git

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TranHuuDat2004/Keeppley_Nodejs # Or your actual repo name BrickShop
    cd your_project_directory_name
    ```
2.  **Install Backend Dependencies:**
    ```bash
    cd backend # Or your backend directory name
    npm install
    ```
3.  **Database Setup:**
    *   Log in to your MySQL server.
    *   Create a new database (e.g., `brickshop_db`).
    *   Import the database schema (`database.sql` or similar, specify its location).

### Environment Variables

1.  In the `backend` directory, create a `.env` file.
2.  Add the required environment variables:
    ```dotenv
    DB_HOST=localhost
    DB_USER=your_mysql_user
    DB_PASSWORD=your_mysql_password
    DB_NAME=brickshop_db
    DB_PORT=3306
    PORT=3001
    JWT_SECRET=your_super_secret_key_for_jwt
    ```
3.  Replace placeholder values with your actual configuration.

### Running the Project

1.  **Start the Backend Server:**
    ```bash
    cd backend
    npm start
    ```
    The server will run (e.g., `http://localhost:3001`).

2.  **Access the Frontend (Served by Backend):**
    *   User Interface: `http://localhost:3001/`
    *   Admin Interface: `http://localhost:3001/admin`
    *(Note: URLs depend on your Express.js route configuration for EJS views.)*

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

Under the following terms:
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial** — You may not use the material for commercial purposes.

[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc/4.0/)

## Contact
*   **Trần Hữu Đạt:** [huudat.peashooer@gmail.com](mailto:huudat.peashooer@gmail.com) - GitHub: [@TranHuuDat2004](https://github.com/TranHuuDat2004)
*   **Lê Tấn Huy:** GitHub: [@CodeSades](https://github.com/Codesades)
*   **Dương Thị Thùy Linh:** GitHub: [@thuylinh1501](https://github.com/thuylinh1501)

</details>

---

<details>
<summary><strong>Phiên bản Tiếng Việt (Nhấn để Mở rộng)</strong></summary>

## 👤 Tác giả

*   **[Nhóm Kỹ thuật]**
    *   **Trần Hữu Đạt** - Lập trình viên Web Full-Stack - [@TranHuuDat2004](https://github.com/TranHuuDat2004)
    *   **Lê Tấn Huy ( Huy Lê )** - Thành viên - [@CodeSades](https://github.com/Codesades)
    *   **Dương Thị Thùy Linh** - Thành viên - [@thuylinh1501](https://github.com/thuylinh1501)

## Mục lục

*   [Giới thiệu](#giới-thiệu)
*   [Ngăn xếp Công nghệ](#ngăn-xếp-công-nghệ)
*   [Trải nghiệm Khách hàng](#trải-nghiệm-khách-hàng)
    *   [Tính năng Chính (Dành cho Khách hàng)](#tính-năng-chính-dành-cho-khách-hàng)
    *   [Mô tả các Trang Chính (Người dùng)](#mô-tả-các-trang-chính-người-dùng)
    *   [Giao diện Khách hàng (Bootstrap)](#giao-diện-khách-hàng-bootstrap)
*   [Trang Quản trị](#trang-quản-trị)
    *   [Tính năng Chính (Dành cho Quản trị viên)](#tính-năng-chính-dành-cho-quản-trị-viên)
    *   [Mô tả các Trang Chính (Quản trị)](#mô-tả-các-trang-chính-quản-trị)
    *   [Giao diện Quản trị (Tailwind CSS)](#giao-diện-quản-trị-tailwind-css)
*   [Hướng dẫn Cài đặt & Thiết lập](#hướng-dẫn-cài-đặt--thiết-lập)
    *   [Điều kiện Tiên quyết](#điều-kiện-tiên-quyết)
    *   [Các bước Cài đặt](#các-bước-cài-đặt)
    *   [Biến Môi trường](#biến-môi-trường)
    *   [Chạy Dự án](#chạy-dự-án)
*   [Giấy phép](#giấy-phép)
*   [Liên hệ](#liên-hệ)

## Giới thiệu

BrickShop là một nền tảng thương mại điện tử nơi những người đam mê đồ chơi lắp ráp có thể tìm thấy một bộ sưu tập phong phú từ các thương hiệu Qman, Keeppley và LEGO. Dự án cung cấp trải nghiệm mua sắm trực tuyến hoàn chỉnh, từ khám phá sản phẩm đến thanh toán và theo dõi đơn hàng, cùng với một hệ thống quản trị mạnh mẽ để quản lý kinh doanh hiệu quả.

## Ngăn xếp Công nghệ

*   **Frontend (Giao diện người dùng):**
    *   HTML5
    *   CSS3
        *   **Bootstrap:** Framework CSS chính cho giao diện người dùng (trang khách hàng).
        *   **Tailwind CSS:** Framework CSS chính cho giao diện quản trị viên (trang quản trị).
    *   JavaScript
*   **Backend (Hệ thống xử lý):**
    *   Node.js, Express.js
*   **Cơ sở dữ liệu:**
    *   MySQL

## Trải nghiệm Khách hàng

### Tính năng Chính (Dành cho Khách hàng)

*   👤 **Xác thực & Quản lý Tài khoản:**
    *   Đăng ký, Đăng nhập, Đăng xuất.
    *   **Cài đặt Hồ sơ:** Cập nhật thông tin cá nhân (tên, email), đổi mật khẩu, quản lý địa chỉ giao hàng, tùy chỉnh ảnh đại diện (tải lên hoặc chọn từ bộ sưu tập có sẵn), thêm/sửa liên kết mạng xã hội.
*   🧱 **Duyệt & Mua sắm:**
    *   Xem giới thiệu về các thương hiệu Qman, Keeppley và LEGO trên trang chủ.
    *   Duyệt tất cả sản phẩm hoặc lọc theo thương hiệu/chủ đề.
    *   Xem chi tiết sản phẩm: Hình ảnh (thư viện), mô tả, giá, SKU, độ tuổi phù hợp, nhà cung cấp, các biến thể (nếu có), thêm vào giỏ hàng.
    *   Tìm kiếm Sản phẩm.
*   🛒 **Giỏ hàng & Thanh toán:**
    *   Xem/chỉnh sửa sản phẩm trong giỏ hàng.
    *   Áp dụng mã **Voucher/Coupon** hợp lệ để được giảm giá.
    *   Tiến hành qua quy trình thanh toán.
    *   Tùy chọn **Thanh toán bằng Mã QR**.
*   🚚 **Quản lý Đơn hàng:**
    *   Xem lại lịch sử đơn hàng đã đặt.
    *   **Theo dõi chi tiết đơn hàng:** Xem thông tin người nhận, địa chỉ, phương thức vận chuyển, tổng số tiền, ngày đặt hàng và danh sách sản phẩm trong đơn hàng.

### Mô tả các Trang Chính (Người dùng)

*   **Trang Chủ (Index):** Trang đích đầu tiên, cung cấp cái nhìn tổng quan về BrickShop và các thương hiệu nổi bật (Qman, Keeppley, LEGO), cùng với các chương trình khuyến mãi (ví dụ: Black Friday). Hiển thị các chủ đề/sản phẩm nổi bật để khám phá.
*   **Trang Sản phẩm:** Liệt kê các sản phẩm đồ chơi lắp ráp có sẵn. Cho phép người dùng xem nhiều sản phẩm, có thể có tính năng lọc hoặc phân trang.
*   **Trang Chi tiết Sản phẩm:** Hiển thị thông tin toàn diện về một sản phẩm cụ thể, bao gồm nhiều hình ảnh, mô tả chi tiết, giá, thuộc tính (thương hiệu, chủ đề, SKU, độ tuổi...), chọn số lượng và các nút "Thêm vào giỏ hàng" / "Mua ngay".
*   **Trang Cài đặt Tài khoản:** Cho phép người dùng quản lý thông tin cá nhân, thay đổi mật khẩu, cập nhật ảnh đại diện (tải lên ảnh mới hoặc chọn từ các bộ sưu tập được xác định trước như Người, Dễ thương, Lego Ninjago) và quản lý các liên kết mạng xã hội (Twitter, Facebook, Google+, LinkedIn, Instagram).
*   **Trang Lịch sử/Chi tiết Đơn hàng:** Cung cấp thông tin chi tiết về một đơn hàng cụ thể do người dùng đặt, bao gồm thông tin giao hàng, danh sách sản phẩm, số lượng, giá cả và tổng số tiền.

### Giao diện Khách hàng (Bootstrap)
| Trang Chủ                              | Giới thiệu LEGO                      | Giới thiệu Qman                      |
| :------------------------------------: | :----------------------------------: | :----------------------------------: |
| ![BrickShop Home](Screenshot/user_index.png) | ![LEGO Intro](Screenshot/lego.jpg)  | ![Qman Intro](Screenshot/qman.jpg)   |
| **Giới thiệu Keeppley**              | **Trang Sản phẩm**                    | **Trang Chi tiết Sản phẩm**              |
| ![Keeppley Intro](Screenshot/keeppley.jpg)| ![Products Page](Screenshot/product.png)| ![Product Detail](Screenshot/product_detail.png) |
| **Cài đặt TK - Thông tin**          | **Cài đặt TK - Ảnh đại diện**       | **Cài đặt TK - Mạng xã hội** |
| ![Settings - Info](Screenshot/settings_profile.png)| ![Settings - Avatar](Screenshot/settings_avatar.png)| ![Settings - Social](Screenshot/settings_social.png)|
| **Chi tiết Đơn hàng**                       |                                      |                                      |
| ![Order Detail](Screenshot/order.png) |                                      |                                      |

## Trang Quản trị

### Tính năng Chính (Dành cho Quản trị viên)

*   📊 **Bảng điều khiển (Dashboard):** Hiển thị tổng quan nhanh: Tổng số đơn hàng, số lượng người dùng, số lượng sản phẩm, số lượng bình luận.
*   👥 **Quản lý Người dùng:** Xem danh sách tất cả người dùng đã đăng ký với ID, Ảnh đại diện, Tên người dùng, Email. Cung cấp các hành động như Chỉnh sửa và Xóa tài khoản người dùng.
*   🧱 **Quản lý Sản phẩm:** Hiển thị danh sách tất cả sản phẩm với ID, Hình ảnh, Tên, Độ tuổi, Nhà cung cấp, Giá, Trạng thái (ví dụ: mới, bán chạy nhất) và các hành động Chỉnh sửa, Xóa.
*   💬 **Quản lý Bình luận:** Cho phép quản trị viên xem và có thể phê duyệt/xóa các bình luận sản phẩm.
*   📦 **Quản lý Đơn hàng:** Liệt kê tất cả các đơn hàng đã đặt với ID, Tên khách hàng, Ngày, Giá, Địa chỉ giao hàng, Phương thức giao hàng, Trạng thái đơn hàng. Cho phép xem chi tiết cho từng đơn hàng.
*   🏷️ **Quản lý Giảm giá / Coupon:** Quản lý các chương trình giảm giá hoặc mã coupon (voucher).
*   ➕ **Thêm Sản phẩm:** Một biểu mẫu cho phép quản trị viên nhập thông tin để thêm sản phẩm mới, bao gồm Mã sản phẩm, Tên (Tiếng Anh, Tiếng Việt) và tải lên nhiều hình ảnh sản phẩm.
*   📚 **Thêm Danh mục:** Cho phép quản trị viên thêm các thương hiệu hoặc chủ đề sản phẩm mới.
*   🎟️ **Thêm Coupon:** Một biểu mẫu để tạo mã giảm giá/voucher mới.

### Mô tả các Trang Chính (Quản trị)

*   **Bảng điều khiển (Dashboard):** Cung cấp cái nhìn tổng quan về hoạt động của cửa hàng thông qua các thẻ số liệu chính. Giao diện chính để điều hướng đến các mục quản lý khác thông qua menu bên.
*   **Quản lý Người dùng:** Hiển thị danh sách người dùng dưới dạng bảng, cho phép quản trị viên xem thông tin cơ bản và thực hiện các hành động quản lý.
*   **Quản lý Sản phẩm:** Trình bày danh mục sản phẩm dưới dạng bảng. Quản trị viên có thể dễ dàng tìm kiếm, xem xét và chỉnh sửa hoặc xóa sản phẩm.
*   **Quản lý Đơn hàng:** Liệt kê các đơn hàng theo thứ tự thời gian, hiển thị trạng thái xử lý của chúng. Cung cấp quyền truy cập nhanh vào chi tiết đơn hàng.
*   **Thêm Sản phẩm:** Một giao diện biểu mẫu chi tiết để thêm sản phẩm mới vào hệ thống, bao gồm nhập tên đa ngôn ngữ và khả năng tải lên nhiều hình ảnh.

### Giao diện Quản trị (Tailwind CSS)
| Bảng điều khiển                             | Quản lý Người dùng                         | Quản lý Sản phẩm                       |
| :-----------------------------------: | :----------------------------------: | :-----------------------------------: |
| ![Admin Dashboard](Screenshot/admin_index.png)| ![Admin Manage Users](Screenshot/manage_user.png)| ![Admin Manage Products](Screenshot/magage_product.png)|
| **Quản lý Đơn hàng**                    | **Thêm Sản phẩm**                      |                                       |
| ![Admin Manage Order](Screenshot/manage_order.png)| ![Admin Add Product](Screenshot/add_product.png) |                                       |

## Hướng dẫn Cài đặt & Thiết lập

### Điều kiện Tiên quyết

*   Node.js (Khuyến nghị phiên bản >= 16.x)
*   npm / yarn
*   MySQL Server (Đã cài đặt và đang chạy)
*   Git

### Các bước Cài đặt

1.  **Sao chép kho lưu trữ:**
    ```bash
    git clone https://github.com/TranHuuDat2004/Keeppley_Nodejs # Hoặc tên repo thực tế của bạn là BrickShop
    cd ten_thu_muc_du_an_cua_ban
    ```
2.  **Cài đặt các Gói phụ thuộc cho Backend:**
    ```bash
    cd backend # Hoặc tên thư mục backend của bạn
    npm install
    ```
3.  **Thiết lập Cơ sở dữ liệu:**
    *   Đăng nhập vào máy chủ MySQL của bạn.
    *   Tạo một cơ sở dữ liệu mới (ví dụ: `brickshop_db`).
    *   Nhập schema cơ sở dữ liệu (tệp `database.sql` hoặc tương tự, vui lòng chỉ định vị trí của nó) hoặc chạy migrations để tạo các bảng cần thiết (ví dụ: `users`, `products`, `categories`, `orders`, `vouchers`...).

### Biến Môi trường

1.  Trong thư mục `backend`, tạo một tệp `.env`.
2.  Thêm các biến môi trường cần thiết. Ví dụ:
    ```dotenv
    DB_HOST=localhost
    DB_USER=ten_nguoi_dung_mysql_cua_ban
    DB_PASSWORD=mat_khau_mysql_cua_ban
    DB_NAME=brickshop_db # Sử dụng tên bạn đã tạo
    DB_PORT=3306
    PORT=3001 # Cổng cho máy chủ backend
    JWT_SECRET=khoa_bi_mat_sieu_cap_cua_ban_cho_jwt # Quan trọng cho bảo mật
    # Thêm các khóa khác nếu cần (ví dụ: khóa Cổng thanh toán QR)
    ```
3.  Thay thế các giá trị placeholder (`ten_nguoi_dung_mysql_cua_ban`, `mat_khau_mysql_cua_ban`, v.v.) bằng cấu hình thực tế của bạn.

### Chạy Dự án

1.  **Khởi động Máy chủ Backend:**
    ```bash
    cd backend
    npm start
    # Hoặc nếu bạn có script development: npm run dev
    ```
    Máy chủ sẽ chạy trên cổng được chỉ định trong tệp `.env` của bạn (ví dụ: `http://localhost:3001`).

2.  **Truy cập Frontend (Được phục vụ bởi Backend):**

    Khi máy chủ backend đang chạy (thường trên `http://localhost:3001` như được chỉ định trong tệp `.env` hoặc cấu hình máy chủ của bạn):

    *   **Mở trình duyệt web của bạn** và điều hướng đến URL ứng dụng chính. Ví dụ:
        *   Giao diện người dùng: `http://localhost:3001/` (hoặc một route cụ thể như `/home`, `/products`)
        *   Giao diện quản trị: `http://localhost:3001/admin` (hoặc một route cụ thể cho trang quản trị)

    *   **Lưu ý:** Các URL chính xác sẽ phụ thuộc vào cách bạn đã cấu hình các route trong ứng dụng Express.js để render các view EJS.

## Giấy phép

Công trình này được cấp phép theo [Giấy phép Quốc tế Creative Commons Ghi công-Phi thương mại 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

Bạn được tự do:
- **Chia sẻ** — sao chép và phân phối lại tài liệu dưới bất kỳ phương tiện hoặc định dạng nào
- **Phỏng theo** — phối lại, chuyển thể, và xây dựng dựa trên tài liệu

Theo các điều khoản sau:
- **Ghi công** — Bạn phải ghi công tác giả một cách thích hợp, cung cấp một liên kết đến giấy phép, và cho biết nếu có thay đổi nào được thực hiện.
- **Phi thương mại** — Bạn không được sử dụng tài liệu cho mục đích thương mại.

[![Giấy phép: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc/4.0/)

## Liên hệ
*   **Trần Hữu Đạt:** [huudat.peashooer@gmail.com](mailto:huudat.peashooer@gmail.com) - GitHub: [@TranHuuDat2004](https://github.com/TranHuuDat2004)
*   **Lê Tấn Huy:** GitHub: [@CodeSades](https://github.com/Codesades)
*   **Dương Thị Thùy Linh:** GitHub: [@thuylinh1501](https://github.com/thuylinh1501)

</details>
