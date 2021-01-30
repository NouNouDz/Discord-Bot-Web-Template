browserify ./public/javascripts/html/invite.js -o ./public/javascripts/html/bundled/invite.js

browserify ./public/javascripts/html/replacement.js -o ./public/javascripts/html/bundled/rpl.js
echo Bundled replacement.js

echo Bundled invite.js
wait