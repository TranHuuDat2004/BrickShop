<?php
include 'login.php';
// Chưa đăng nhập 
if (isset($_SESSION["adminID"])){
    $adminID = $_SESSION["adminID"];
    // print_r($userName);
    $sqlLogin = "SELECT * FROM `Admin` WHERE adminID = '$adminID' ";
    $queryLogin = mysqli_query($conn, $sqlLogin);
    // print_r($queryLogin);
    // Kiểm tra kết quả truy vấn

    // Duyệt qua từng hàng dữ liệu từ kết quả truy vấn
    $row = $queryLogin->fetch_assoc();
    // Thêm thông tin từng hàng vào mảng $userLogin
    $userLogin = array(
        "adminID" => $row["adminID"],
        "userName" => $row["userName"],
        "email" => $row["email"],
        "image" => $row["image"],
        "loginpassword" => $row["loginpassword"],
        "birthday" => $row["birthday"],
        "bio" => $row["bio"],
        "country" => $row["country"],
        "phone" => $row["phone"]
    );
}

else {    
    // Chưa đăng nhập 
    header('Location: login_admin_en.php');
    exit();
}

// Kết nối cơ sở dữ liệu
$conn = new mysqli('localhost', 'root', '', 'keeppley-shop'); // servername, username, password, database's name
if ($conn->connect_error) {
  die("Connection Failed: " . $conn->connect_error);
}

// Kiểm tra xem `p_id` có tồn tại và hợp lệ không
if (isset($_GET['p_id']) && is_numeric($_GET['p_id'])) {
  $p_id = mysqli_real_escape_string($conn, $_GET['p_id']);

  // Truy vấn để lấy thông tin sản phẩm dựa trên `p_id`
  $sql = "SELECT * FROM product WHERE p_id = $p_id";
  $result = mysqli_query($conn, $sql);

  if ($row = mysqli_fetch_assoc($result)) {
    $p_id = $row['p_id'];
    $p_number = $row['p_number'];
    $p_name_en = $row['p_name_en'];
    $p_name_vn = $row['p_name_vn'];
    $p_category = $row['p_category'];
    $p_price_en = $row['p_price_en'];
    $p_price_vn = $row['p_price_vn'];
    $p_tutorial = $row['p_tutorial'];
    $p_age = $row['p_age'];
    $p_description_en = $row['p_description_en'];
    $p_description_vn = $row['p_description_vn'];

    // Tách chuỗi hình ảnh thành mảng và loại bỏ khoảng trắng thừa
    $product_images = array_map('trim', explode(',', $row["p_image"]));

    // Kiểm tra và gán lại giá trị nếu ảnh thứ 2 và thứ 3 trống
    if (empty($product_images[1])) {
      $product_images[1] = $product_images[0];
    }

    if (empty($product_images[2])) {
      $product_images[2] = $product_images[0];
    }
  } else {
    // Nếu không tìm thấy sản phẩm, chuyển hướng người dùng về trang quản lý sản phẩm
    header('Location: manageProduct.php');
    exit();
  }
} else {
  // Nếu không có `p_id` hoặc giá trị không hợp lệ, chuyển hướng người dùng về trang quản lý sản phẩm
  header('Location: manageProduct.php');
  exit();
}

// Lấy danh sách các danh mục để hiển thị trong form chọn
$sqlCategory = "SELECT * FROM `category`";
$resultCategory = mysqli_query($conn, $sqlCategory);

$categories = array();
if ($resultCategory->num_rows > 0) {
  while ($row = mysqli_fetch_assoc($resultCategory)) {
    $categories[] = $row['name_en'];
  }
}

?>

<!DOCTYPE html>
<html :class="{ 'theme-dark': dark }" x-data="data()" lang="en">

<head>
  <?php include 'head.php' ?>
  <?php include 'getAdmin.php' ?>

<!-- Place the first <script> tag in your HTML's <head> -->
<script src="https://cdn.tiny.cloud/1/be9jpdenr0dn2q72l59n3xrecjq8xb9nhdexsuqvn6kfhk7g/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>

<!-- Place the following <script> and <textarea> tags your HTML's <body> -->
<script>
  tinymce.init({
    selector: 'textarea',
    plugins: [
      // Core editing features
      'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
      // Your account includes a free trial of TinyMCE premium features
      // Try the most popular premium features until Sep 20, 2024:
      'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
    ],
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
  });
</script>

</head>
<Style>
  /* Thay đổi màu hover của nút */
  .input:hover {
    background-color: #f5f5f5;
    /* Màu xám */

  }

  /* Container chứa form */
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Đảm bảo form có kích thước phù hợp */
  .form-container form {
    width: 100%;
    /* Hoặc giá trị phù hợp với form của bạn */
  }

  a {
    color: black;
  }
</Style>

<body>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
    <aside class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">

      <?php include 'aside.php' ?>

    </aside>
    <!-- Mobile sidebar -->
    <!-- Backdrop -->
    <div x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
      x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
      x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0"
      class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
    <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
      x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
      x-transition:enter-start="opacity-0 transform -translate-x-20" x-transition:enter-end="opacity-100"
      x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0 transform -translate-x-20" @click.away="closeSideMenu"
      @keydown.escape="closeSideMenu">
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
          Windmill
        </a>
        <ul class="mt-6">
          <li class="relative px-6 py-3">
            <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="index.html">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                </path>
              </svg>
              <span class="ml-4">Dashboard</span>
            </a>
          </li>
        </ul>
        <ul>
          <li class="relative px-6 py-3">
            <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="forms.html">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                </path>
              </svg>
              <span class="ml-4">Forms</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="cards.html">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                </path>
              </svg>
              <span class="ml-4">Cards</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="charts.html">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
              </svg>
              <span class="ml-4">Charts</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="buttons.html">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122">
                </path>
              </svg>
              <span class="ml-4">Buttons</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="modals.html">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                </path>
              </svg>
              <span class="ml-4">Modals</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"></span>
            <a class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
              href="tables.html">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
              <span class="ml-4">Tables</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <button
              class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              @click="togglePagesMenu" aria-haspopup="true">
              <span class="inline-flex items-center">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
                  </path>
                </svg>
                <span class="ml-4">Pages</span>
              </span>
              <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <template x-if="isPagesMenuOpen">
              <ul x-transition:enter="transition-all ease-in-out duration-300"
                x-transition:enter-start="opacity-25 max-h-0" x-transition:enter-end="opacity-100 max-h-xl"
                x-transition:leave="transition-all ease-in-out duration-300"
                x-transition:leave-start="opacity-100 max-h-xl" x-transition:leave-end="opacity-0 max-h-0"
                class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                aria-label="submenu">
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <a class="w-full" href="pages/login.html">Login</a>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <a class="w-full" href="pages/create-account.html">
                    Create account
                  </a>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <a class="w-full" href="pages/forgot-password.html">
                    Forgot password
                  </a>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <a class="w-full" href="pages/404.html">404</a>
                </li>
                <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <a class="w-full" href="pages/blank.html">Blank</a>
                </li>
              </ul>
            </template>
          </li>
        </ul>
        <div class="px-6 my-6">
          <button
            class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Create account
            <span class="ml-2" aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </aside>
    <div class="flex flex-col flex-1 w-full">

      <?php include 'Profile_Header.php'; ?>

      <main class="h-full pb-16 overflow-y-auto">
        <div class="container grid px-6 mx-auto">
          <div class="flex items-center my-6">
            <h2 style="padding: 20px" class="stext-121 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              <a href="editProduct.php?p_id=<?php echo $p_id ?>"><u>Edit Product</u></a>
            </h2>
            <h2 style="padding: 20px" class="stext-121 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              <a href="editImages.php?p_id=<?php echo $p_id ?>">Edit Images</a>
            </h2>
            <h2 style="padding: 20px" class="stext-121 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              <a href="editInstruction.php?p_id=<?php echo $p_id ?>">Edit Instruction</a>
            </h2>
          </div>

          <div class="form-container container mt-5">
            <form action="updateProduct.php" method="POST" enctype="multipart/form-data">

              <div class="form-group">

                <label for="name">Number Product</label>
                <input class="form-control input" name="p_number" id="name" type="text" placeholder="Number Product"
                  value="<?php echo $p_number ?>">

                <input class="form-control input" name="p_id" id="name" type="hidden" placeholder="Number Product"
                  value="<?php echo $p_id ?>">
              </div>

              <div class="form-group">

                <label for="name">Name Product (English)</label>
                <input class="form-control input" name="p_name_en" id="name_en" type="text" placeholder="Name Product"
                  value="<?php echo $p_name_en ?>">
              </div>

              <div class="form-group">

                <label for="name">Name Product (Vietnamese)</label>
                <input class="form-control input" name="p_name_vn" id="name_vn" type="text" placeholder="Name Product"
                  value="<?php echo $p_name_vn ?>">
              </div>

              <div class="form-group">
                <label for="age">Age</label>
                <select id="age" class="form-control input" name="p_age">
                  <option>Select Age</option>
                  <option value="1-3" <?php echo ($p_age == '1-3') ? 'selected' : ''; ?>>1-3</option>
                  <option value="3-6" <?php echo ($p_age == '3-6') ? 'selected' : ''; ?>>3-6</option>
                  <option value="6-12" <?php echo ($p_age == '6-12') ? 'selected' : ''; ?>>6-12</option>
                  <option value="12+" <?php echo ($p_age == '12+') ? 'selected' : ''; ?>>12+</option>
                </select>
              </div>


              <div class="form-group">
                <label for="provider">Category</label>
                <select id="provider" class="form-control input" name="p_category">
                  <?php foreach ($categories as $category): ?>
                    <option value="<?php echo $category; ?>" <?php echo ($p_category == $category) ? 'selected' : ''; ?>>
                      <?php echo $category; ?>
                    </option>
                  <?php endforeach; ?>
                </select>
              </div>

              <div class="form-group flex center">
                <div style="width: 35%;">
                  <label for="price">Price (USD):</label>
                  <input style="max-width:300px" class="form-control input" id="price" name="p_price_en" type="text" placeholder="Price" value="<?php echo $p_price_en ?>">
                </div>
                <div style="width: 35%;">
                  <label for="price">Price (VND):</label>
                  <input style="max-width:300px" class="form-control input" id="price" name="p_price_vn" type="text" placeholder="Price" value="<?php echo $p_price_vn ?>">
                </div>
              </div>

              <div class="form-group">
                <label for="description">Description (English)</label>
                <textarea class="form-control input" id="description" name="p_description_en" rows="4" placeholder="Description"><?php echo $p_description_en ?></textarea>
              </div>

              <div class="form-group">
                <label for="description_vn">Description (Vietnamese)</label>
                <textarea class="form-control input" id="description_vn" name="p_description_vn" rows="4" placeholder="Description"><?php echo $p_description_vn ?></textarea>
              </div>


              <!-- Thuộc tính trạng thái hàng -->
              <div class="form-group">
                <label for="stock_status">Stock Status</label>
                <select class="form-control input" id="stock_status" name="p_stock_status">
                  <option value="in_stock" <?php echo ($stock_status == 'in_stock') ? 'selected' : ''; ?>>In Stock
                  </option>
                  <option value="out_of_stock" <?php echo ($stock_status == 'out_of_stock') ? 'selected' : ''; ?>>Out of
                    Stock</option>
                </select>
              </div>

              <!-- Thuộc tính phân loại sản phẩm -->
              <div class="form-group">
                <label for="product_status">Product Status</label>
                <select class="form-control input" id="product_status" name="p_product_status">
                  <option value="bestseller" <?php echo ($product_status == 'bestseller') ? 'selected' : ''; ?>>Best
                    Seller
                  </option>
                  <option value="top_revenue" <?php echo ($product_status == 'top_revenue') ? 'selected' : ''; ?>>Top
                    Revenue</option>
                  <option value="normal" <?php echo ($product_status == 'normal') ? 'selected' : ''; ?>>Normal</option>
                </select>
              </div>

              <div class="form-group">
                <button name="sbm" class="btn btn-primary" type="submit">Update Product</button>
                <a href="../../Fontend/product2.php" class="btn btn-secondary">User Interface</a>
              </div>
            </form>
          </div>


        </div>
      </main>
    </div>
  </div>
</body>
<script>
  function previewImage(event, previewId) {
    const file = event.target.files[0];
    const preview = document.getElementById(previewId);

    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
        preview.style.height = '300px';
      }

      reader.readAsDataURL(file);
    } else {
      preview.src = '#';
      preview.style.display = 'none';
    }
  }
</script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>