docker build -t nginx-react-app .
docker kill nginx-react-app-container
docker rm nginx-react-app-container
docker run --name nginx-react-app-container -it -dp 80:80 nginx-react-app