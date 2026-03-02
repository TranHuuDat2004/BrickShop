# Hướng dẫn cơ bản sử dụng Docker cho Dự án

Tài liệu này tổng hợp các câu lệnh thường dùng khi làm việc với Docker, bao gồm việc xây dựng image, chạy container, và xuất/lưu image tĩnh.

---

## 1. Sử dụng Docker cơ bản (Chạy từng container)

### 1.1. Xây dựng (Build) Image từ Dockerfile
Lệnh này sẽ đọc file `Dockerfile` trong thư mục hiện tại (`.`) và đóng gói mã nguồn thành một image đóng gói sẵn.
```bash
# Cú pháp: docker build -t <tên-image>:<tag> .
docker build -t keeppley_nodejs_app:latest .
```
*(Lưu ý: Dấu chấm `.` ở cuối cùng đại diện cho thư mục hiện tại chứa Dockerfile).*

### 1.2. Chạy (Run) Container từ Image vừa tạo
Sau khi lấy được image, bạn có thể khởi chạy nó dưới dạng container. Lệnh dưới đây chạy ảnh `keeppley_nodejs_app`, map cổng 3001 trên máy thật với cổng 3001 trong container.
```bash
# Cú pháp: docker run -p <cổng-máy-host>:<cổng-container> -d --name <tên_container> <tên-image>:<tag>
docker run -p 3001:3001 -d --name my_app_container keeppley_nodejs_app:latest
```
- `-d`: Chạy ngầm (detached mode).
- `-p`: Map port nội bộ ra port bên ngoài localhost.
- `--name`: Đặt tên dễ nhớ cho container này.

### 1.3. Xem danh sách Container và Image đang có
```bash
# Xem các container đang chạy
docker ps

# Xem TẤT CẢ các container (cả những cái đã tắt)
docker ps -a

# Xem các image hiện có trên máy
docker images
```

### 1.4. Dừng (Stop) và Xoá (Rm) Container
```bash
# Dừng container đang chạy
docker stop my_app_container

# Xóa hoàn toàn container (cần stop trước)
docker rm my_app_container
```

---

## 2. Lưu trữ và chia sẻ Image thủ công (Lưu thành file `.tar`)

Nếu bạn muốn copy image sang một máy tính khác chưa có mạng hoặc không muốn đưa lên mạng (Docker Hub), bạn có thể xuất image ra file nén `.tar`.

### 2.1. Lưu (Save) Image thành file
```bash
# Lưu image thành file tar
docker save -o keeppley_app_image.tar keeppley_nodejs_app:latest
```

### 2.2. Nạp (Load) Image từ file
Khi copy file `keeppley_app_image.tar` sang máy khác, bạn chạy lệnh sau để bung nó vào Docker của máy đó:
```bash
# Nạp image từ file tar
docker load -i keeppley_app_image.tar
```

---

## 3. Đẩy Image lên Docker Hub (Push / Pull)

Nếu đưa lên Docker Hub (như trong GitHub Actions), bạn làm theo các bước sau:

### 3.1. Đăng nhập Docker Hub trên Terminal
```bash
docker login
# Nhập username và password của Docker Hub
```

### 3.2. Đổi tên Image (Tag) cho đúng chuẩn Docker Hub
Định dạng tên image bắt buộc phải có `username` Docker Hub đứng trước.
```bash
docker tag keeppley_nodejs_app:latest <username_của_bạn>/keeppley_nodejs_app:latest
```

### 3.3. Đẩy lên (Push) và Tải về (Pull)
```bash
# Đẩy lên Docker Hub
docker push <username_của_bạn>/keeppley_nodejs_app:latest

# Máy người khác tải về
docker pull <username_của_bạn>/keeppley_nodejs_app:latest
```

---

## 4. Dùng Docker Compose (Khuyên Dùng cho Dự án này)

Vì dự án của bạn có file `docker-compose.yml` định nghĩa sẵn cả giao diện (`app`) lẫn database MySQL (`db`), việc khởi chạy toàn bộ hệ thống đơn giản hơn rất nhiều:

### 4.1. Khởi chạy toàn bộ hệ thống
```bash
docker-compose up --build -d
```
- `up`: Dựng các container.
- `--build`: Bắt Docker build lại image mới nếu code có thay đổi.
- `-d`: Chạy ngầm.

*Dự án sẽ tự động chạy Node.js ở `http://localhost:3001` và Database ở port `3306`.*

### 4.2. Dừng toàn bộ hệ thống
Lệnh này dừng và loại bỏ các container nhưng DỮ LIỆU MySQL VẪN ĐƯỢC GIỮ LẠI (vì đã cài volume `db_data` trong file docker-compose).
```bash
docker-compose down
```

### 4.3. Dừng và xóa DATA Database
Nếu bạn muốn đặt lại (reset) cơ sở dữ liệu làm mới hoàn toàn:
```bash
docker-compose down -v
```
*(Flag `-v` sẽ xoá cả database storage local volume).*
