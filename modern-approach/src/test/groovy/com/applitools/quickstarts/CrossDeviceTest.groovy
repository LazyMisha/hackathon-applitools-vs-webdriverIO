package com.applitools.quickstarts

import com.applitools.eyes.BatchInfo
import com.applitools.eyes.RectangleSize
import com.applitools.eyes.TestResultsSummary
import com.applitools.eyes.fluent.Target
import com.applitools.eyes.selenium.BrowserType
import com.applitools.eyes.selenium.Configuration
import com.applitools.eyes.selenium.Eyes
import com.applitools.eyes.visualgrid.model.ChromeEmulationInfo
import com.applitools.eyes.visualgrid.model.DeviceName
import com.applitools.eyes.visualgrid.model.RenderBrowserInfo
import com.applitools.eyes.visualgrid.model.ScreenOrientation
import com.applitools.eyes.visualgrid.services.VisualGridRunner
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver

class CrossDeviceTest {

    private static BatchInfo batch = new BatchInfo('UFG Hackathon')
    private WebDriver driver
    private Eyes eyes
    private Configuration suiteConfig
    VisualGridRunner runner
    private final int viewPortWidth = 800
    private final int viewPortHeight = 600
    private RectangleSize rectangleSize = new RectangleSize(viewPortWidth, viewPortHeight)
    RenderBrowserInfo[] browserList = [
            new RenderBrowserInfo(1200, 700, BrowserType.CHROME),
            new RenderBrowserInfo(1200, 700, BrowserType.FIREFOX),
            new RenderBrowserInfo(1200, 700, BrowserType.EDGE_CHROMIUM) ,
            new RenderBrowserInfo(768, 700, BrowserType.CHROME) ,
            new RenderBrowserInfo(768, 700, BrowserType.FIREFOX) ,
            new RenderBrowserInfo(768, 700, BrowserType.EDGE_CHROMIUM) ,
            new RenderBrowserInfo(new ChromeEmulationInfo(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT))
    ]

    @Before
    void init() {
        batch = new BatchInfo('UFG Hackathon')
        runner = new VisualGridRunner(10)
        suiteConfig = new Configuration()
        suiteConfig.addBrowsers(browserList)
                   .setApiKey('I6IHp96nah6OiHzMae4FqDveWhY4CrPLcLqJjcBCl54110')
                   .setServerUrl('https://demo.applitools.com/gridHackathonV1.html')
                   .setAppName('Hackathon')
                   .setBatch(batch)

        eyes = new Eyes(runner)
        eyes.setConfiguration(suiteConfig)
        driver = new ChromeDriver()
    }

    @Test
    void 'Task 1'() {
        driver.get 'https://demo.applitools.com/gridHackathonV1.html'
        eyes.open driver, 'Hackathon', 'Cross Browser check', rectangleSize
        eyes.check(Target.window().fully().withName("Applitools Ultrafast gird"))
        eyes.closeAsync()
    }

    @After
    void tearDown() {
        eyes.abortAsync()
        driver.quit()

        TestResultsSummary allTestResults = runner.getAllTestResults(false)
        System.out.println(allTestResults)
    }


}
