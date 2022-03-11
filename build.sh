rm -r articles image notes sass
rm index.html

cd pages
hugo
cp -pR public/* ./.. 
rm -r public
cd ..
rm -r 