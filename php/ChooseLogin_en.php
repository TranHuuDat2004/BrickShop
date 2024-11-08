<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Select Login Role</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

  <!-- Offline -->
  <link href="../style/tailwindcss_2.2.19.css" rel="stylesheet">

  <!-- Add favicon here -->
  <link rel="icon" href="../images/favicon.png" type="image/x-icon">

  <style>
    p {
      font-size: 20px;
    }

    .bg-background {
      background-color: #ffffff;
    }

    .text-foreground {
      color: #333333;
    }

    .text-muted-foreground {
      color: #888888;
    }

    .hover\:bg-gray-100:hover {
      background-color: #f0f0f0;
    }

    .border-border {
      border-color: #dddddd;
    }

    .hover\:bg-gray-200:hover {
      background-color: #e2e2e2;
    }

    .text-center img {
      width: 100%;
      /* Điều chỉnh width của logo */
    }

    .text-center .logo {
      width: 75%;
      /* Điều chỉnh width của logo */
    }

    /* Language switcher container */
    .language-switcher {
      position: relative;
      display: inline-block;
      margin-right: 20px;
    }

    /* Current language flag icon */
    .current-lang img {
      padding-top: 20px;
      width: 48px;
      cursor: pointer;
    }

    /* Dropdown styling */
    .dropdown-content {
      display: none;
      position: absolute;
      right: 0;
      background-color: white;
      width: 150px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
      z-index: 1;
      border-radius: 5px;
      overflow: hidden;
    }

    .dropdown-content a {
      display: flex;
      align-items: center;
      padding: 10px;
      text-decoration: none;
      color: black;
      font-size: 14px;
    }

    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }

    /* Language option flag icons */
    .lang-option img {
      width: 18px;
      margin-right: 8px;
    }

    /* Show dropdown when hovering */
    .language-switcher:hover .dropdown-content {
      display: block;
    }

    /* Các phần tử size 75% cho màn hình dưới 1400px */
    @media (max-width: 1500px) {
      .text-center img {
        width: 60%;
      }

      .text-center .logo {
        width: 50%;
        /* Điều chỉnh width của logo */
      }

      .p-6 {
        padding: 20px;
        /* Điều chỉnh padding */
      }

      .mx-auto {
        width: 75%;
      }

      .max-w-4xl {
        max-width: 75%;
      }

      a {
        width: 75%;
      }


    }
  </style>
</head>

<body class="bg-background flex flex-col items-center justify-center min-h-screen p-4">
  <div class="text-center mb-8">
    <a href="../en/index.php"><img src="../images/logo.png" alt="Logo" class="mx-auto mb-4 logo"></a>
    <p class="text-blue-500">Please <span class="font-bold">CHOOSE A ROLE</span> to <span class="font-bold">LOG IN</span> to the system</p>
  </div>

  <div class="flex justify-around w-full max-w-4xl">
    <a href="../Admin/public/login_admin_en.php" class="text-center hover:bg-gray-100 p-6 rounded-lg border border-border cursor-pointer">
      <img src="../user/admin.png" alt="Admin" class="mx-auto mb-4">
      <h2 class="text-xl font-bold text-foreground">Admin</h2>
      <p class="text-muted-foreground">If you are an Admin, click here to log in.</p>
    </a>

    <a href="form_login_en.php" class="text-center hover:bg-gray-100 p-6 rounded-lg border border-border cursor-pointer">
      <img src="../user/male.png" alt="User" class="mx-auto mb-4">
      <h2 class="text-xl font-bold text-foreground">User</h2>
      <p class="text-muted-foreground">If you are a User, click here to log in.</p>
    </a>

  </div>
</body>

</html>