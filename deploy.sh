yarn bulid &&
git checkout gh-pages &&
rm -rf src *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m "update" &&
git push