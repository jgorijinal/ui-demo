rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:jgorijinal/dna-ui-website.git &&
git push -f -u origin master &&
cd .. &&
echo https://jgorijinal.github.io/dna-ui-website/index.html