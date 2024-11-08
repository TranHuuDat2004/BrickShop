<!DOCTYPE html>
<html lang="vi">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Đăng Ký</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

  <!-- Thêm favicon vào đây -->
  <link rel="icon" href="../images/keeppley_logo.webp" type="image/x-icon">

  <style>
    .bg-background {
      background-color: #f0f4f8;
    }

    .bg-card {
      background-color: #ffffff;
    }

    .text-foreground {
      color: #333333;
    }

    .text-muted-foreground {
      color: #888888;
    }

    .border-border {
      border-color: #dddddd;
    }

    .bg-primary {
      background-color: #3490dc;
    }

    .text-primary-foreground {
      color: #ffffff;
    }

    .hover\:bg-primary\/80:hover {
      background-color: #2779bd;
    }

    .text-primary {
      color: #3490dc;
    }
  </style>
</head>

<body class="flex items-center justify-center min-h-screen bg-background p-4">
  <div class="bg-card rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col items-center">
    <img id="image" src="../images/20221010151814746.png" class="mb-4">
    <h2 class="text-2xl font-bold text-foreground mb-6">Đăng Ký</h2>
    <form action="Registration_vn.php" method="POST" class="w-full">
      <div class="mb-4">
        <label class="block text-muted-foreground mb-1" for="name">Tên đăng nhập</label>
        <input class="border border-border rounded-lg p-2 w-full" type="text" id="name" name="name" required
          placeholder="Tên đăng nhập" />
      </div>
      <div class="mb-4">
        <label class="block text-muted-foreground mb-1" for="email">Email của bạn</label>
        <input class="border border-border rounded-lg p-2 w-full" type="email" id="email" name="email" required
          placeholder="Email của bạn" />
      </div>
      <div class="mb-4">
        <label class="block text-muted-foreground mb-1" for="password">Mật khẩu</label>
        <input class="border border-border rounded-lg p-2 w-full" type="password" id="password" name="password" required
          placeholder="Mật khẩu" />
        <input class="border border-border rounded-lg p-2" type="checkbox" onclick="togglePasswordVisibility('password')"> Hiện mật khẩu
      </div>
      <div class="mb-4">
        <label class="block text-muted-foreground mb-1" for="confirm-password">Nhập lại mật khẩu</label>
        <input class="border border-border rounded-lg p-2 w-full" type="password" id="confirm-password" name="confirm-password" required placeholder="Nhập lại mật khẩu" />
        <input class="border border-border rounded-lg p-2" type="checkbox" onclick="togglePasswordVisibility('confirm-password')"> Hiện mật khẩu
      </div>
      <div class="flex items-center mb-4">
        <input type="checkbox" id="terms" class="mr-2" required />
        <label for="terms" class="text-muted-foreground">Tôi đồng ý với tất cả các điều khoản trong <a href="#" class="text-primary">Điều khoản dịch vụ</a></label>
      </div>
      <button type="submit" class="bg-primary text-primary-foreground hover:bg-primary/80 rounded-lg p-2 w-full">Đăng Ký</button>
    </form>
    <p class="text-muted-foreground mt-4 text-center">Tôi đã có tài khoản <a href="form_login_vn.php" class="text-primary"> Nhấn tại đây</a></p>
  </div>
</body>
<script>
  function togglePasswordVisibility(inputId) {
    var input = document.getElementById(inputId);
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
</script>

</html>
