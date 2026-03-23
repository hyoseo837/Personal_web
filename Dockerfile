# 1단계: 빌드 스테이지
FROM node:lts-alpine AS build
WORKDIR /app

# 의존성 설치 (캐싱 활용을 위해 파일 먼저 복사)
COPY package*.json ./
RUN npm install

# 소스 코드 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: 실행 스테이지 (Nginx 사용)
FROM nginx:alpine
# 빌드 스테이지에서 생성된 정적 파일(dist)만 Nginx로 복사
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]