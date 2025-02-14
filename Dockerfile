FROM node:20.14.0 as builder

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN ls
RUN pnpm install

# 清理 pnpm 缓存
RUN pnpm store prune

COPY . ./

# 增加日志输出
RUN pnpm run build:ele

RUN ls

RUN cd apps

RUN ls

FROM nginx:1.23.3-alpine as production-stage

COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/apps/web-ele/dist /usr/share/nginx/html/dist

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
