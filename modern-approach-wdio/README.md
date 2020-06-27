### Pre-requisites:

1. Download Selenium Standalone server [here](https://www.seleniumhq.org/download/)
    * Note that this is a `jar` file. So you should also have Java installed on your machine.
2. Chrome Webdriver is on your machine and is in the PATH. Here are some resources from the internet that'll help you.
   * https://splinter.readthedocs.io/en/0.1/setup-chrome.html
   * https://stackoverflow.com/questions/38081021/using-selenium-on-mac-chrome
   * https://www.youtube.com/watch?time_continue=182&v=dz59GsdvUF8  
3. Run the standalone server jar file - it should look something like below:
    * `java -jar selenium-server-standalone-3.141.59.jar` (Replace the jar file name with your jar file name) 
    * This will run Selenium on localhost and on port 4444
4. Install Node.js from [here](https://nodejs.org/en/)


### Running the example:

1. run `npm i`
2. run `env VERSION='gridHackathonV1.html' npm run test`
3. run `env VERSION='gridHackathonV2.html' npm run test`