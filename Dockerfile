FROM node:18-alpine

# Thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các thư viện cần thiết
RUN npm install --production

# Sao chép toàn bộ source code vào container
COPY . .

# Mở cổng 3001 (như được cấu hình trong index.js)
EXPOSE 3001

# Lệnh chạy ứng dụng
CMD ["node", "index.js"]
