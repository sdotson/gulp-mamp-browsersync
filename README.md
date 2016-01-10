# gulp-mamp-browsersync

<p>I created this repository because I couldn't find a good example of how to use Mamp, Browsersync, and Gulp together anywhere on the internet. If you have tips or other suggestions for improvements, feel free to let me know!</p>

<h2>Instructions</h2>
<ol>
  <li>Install and configure MAMP. Make sure to check Preferences > Web Server to make sure your preferred server route is selected.
Create a backup of MAMP's apache conf file. We're doing this because the config function of a critical gulp plugin, gulp-mamp, is broken and we'll need to do it by hand. You can find this file in /Applications/MAMP/conf/apache.</li>
  <li>Clone these starter files into your MAMP dev directory and edit the proxy setting for browser-sync if necessary.</li>
  <li>Once downloaded, type "npm install" in the terminal to install all dependencies.</li>
  <li>Edit MAMP's apache config. Open up MAMP's apache config one more time and look arund line 194. You should see a statement defining the document root. Make sure this is pointing to the directory of your project. In the future, I would like to fix gulp-mamp's config method so that we can do this on the the fly and not touch the apache config file directory.</li>
  <li>Navigate to the directory of your project and type "Gulp". A browser window will open with a view of your files. Try making changes to index.html and see those changes take place instantaneously!</li>
  <li>Now you can install Drupal or Wordpress, and with a few small gulpfile changes to make sure BrowserSync is continuing to look in the right directories, you can code and see your changes take place instantaneously!</li>
</ol>











