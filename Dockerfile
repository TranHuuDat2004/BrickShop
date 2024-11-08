# 1. Chọn hình ảnh nền cho Docker
FROM node:16-alpine

# 2. Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# 3. Sao chép file `package.json` và `package-lock.json`
COPY package*.json ./

# 4. Cài đặt các phụ thuộc của dự án
RUN npm install

# 5. Sao chép toàn bộ mã nguồn vào container
COPY . .

# 6. Mở cổng (ví dụ: 3000)
EXPOSE 3000

# 7. Chạy ứng dụng
CMD ["npm", "start"]
