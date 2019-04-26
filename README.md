## test-docker

使用 kocker 部署 node 应用

[docker 基础入门](https://kuan1.top/2019/04/25/2019-04-25docker%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8/)

## 步骤

```bash
# 打包
docker build -t <tag> .
# 启动
docker run -p 主机端口:容器端口 -v 本地路径:容器路径 -d(后台运行) 【镜像名:tag】
# 删除
docker container stop <container id>
docker rm <container id>
docker rmi <image tag>
```
