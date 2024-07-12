docker pull node:alpine
docker run  -n react-container -it -d node:alpine

npx create-react-app my-app
cd my-app
npm start

docker commit react-container my-react-dev-image