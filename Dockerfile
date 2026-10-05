# Debian base: sharp (used by Next 10 image optimization) segfaults on Alpine.
# Shared build for the portfolio's Next.js apps. NODE picks a runtime the app's Next version supports.
ARG NODE=16
FROM node:${NODE}-bullseye-slim AS build
WORKDIR /app
COPY package*.json yarn.lock* ./
RUN if [ -f package-lock.json ]; then npm ci --legacy-peer-deps; else yarn install --frozen-lockfile; fi
COPY . .
ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET=production
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET NEXT_TELEMETRY_DISABLED=1
RUN npx next build

FROM node:${NODE}-bullseye-slim
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
COPY --from=build /app ./
EXPOSE 3000
CMD ["npx", "next", "start", "-p", "3000"]
