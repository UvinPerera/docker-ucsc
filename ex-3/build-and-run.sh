docker build -t my-node-app-test .
docker run --name my-node-container -it -d -p 8080:3000 my-node-app-test