# Performance Testing

Pre-requisites: npm, brew, docker

# k6 Install
brew tap loadimpact/k6
brew install k6

# K6 Container Install
docker pull loadimpact/k6

# Grafana Install
docker-compose up -d influxdb grafana

# Node Package Install
npm install
  
# Start Mock Server
npm run mock

# Start Service B Server
npm run start_micro
  
# Run Performance Test
npm test

# Run Performance Test and export data to Influxdb
npm test_report
