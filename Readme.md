## Start

1) npm i

To run React app:
2) npm start

## Deploy

1) npm run build
1.5) rm build.zip
2) zip -r build.zip build/
2) scp build.zip user@ip_address:/absolute/path
3) ssh inventory@ip_address
4) cd ./relative_path
5) rm -rf build
6) unzip build.zip
7) rm build.zip

