<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

</head>
<style>
    .search-container {
    position: relative;
    width: 300px;
}

#search {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

#search-results {
    margin-top: 5px;
    list-style: none;
    padding: 0;
    border: 1px solid #ddd;
    max-height: 200px;
    overflow-y: auto;
    display: none; /* Ban đầu ẩn đi */
}

#search-results li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
}

#search-results li i {
    margin-right: 10px;
}

/* Thêm các biểu tượng tùy chỉnh */
.icon-class1::before {
    content: "\f2b9"; /* Thay đổi mã ký tự của biểu tượng */
    font-family: FontAwesome;
}

.icon-class2::before {
    content: "\f015"; /* Thay đổi mã ký tự của biểu tượng */
    font-family: FontAwesome;
}

/* Tương tự, định nghĩa các lớp cho các biểu tượng khác */

</style>
<body>
<div class="search-container">
    <input type="text" id="search" placeholder="Tìm kiếm...">
    <ul id="search-results">
        <li><i class="icon-class1"></i> Cổng thông tin sinh viên</li>
        <li><i class="icon-class2"></i> Trang chủ</li>
        <li><i class="icon-class3"></i> Sơ đồ đào tạo - tích lũy</li>
        <li><i class="icon-class4"></i> Kế hoạch năm học</li>
        <li><i class="icon-class5"></i> Đăng ký môn học</li>
        <li><i class="icon-class6"></i> Kết quả ĐKMH</li>
        <li><i class="icon-class7"></i> Điểm danh chuyên cần CLC</li>
    </ul>
</div>
<script>
    $(document).ready(function() {
    $('#search').on('input', function() {
        var value = $(this).val().toLowerCase();
        $('#search-results li').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        $('#search-results').show(); // Hiển thị kết quả khi có nhập liệu
    });
});

</script>
</body>
</html>