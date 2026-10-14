import assert from 'node:assert/strict';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
(async () => {
 const browser = await chromium.launch({headless:true, executablePath:process.env.CHROME_PATH || undefined, args:['--no-sandbox']});
 const routes=['/','/task1','/task2','/task3','/thank-you','/presentation','/support','/validator-analysis'];
 let checks=0;
 try {
  for(const width of [1440,390]) {
   const context=await browser.newContext({viewport:{width,height:900}});
   const page=await context.newPage(); const errors=[];page.on('pageerror',e=>errors.push(e.message));
   for(const route of routes) {
    const response=await page.goto((process.env.BASE_URL || 'http://127.0.0.1:3214')+route,{waitUntil:'networkidle'});
    assert.equal(response.status(),200,route);assert.equal(await page.locator('main').count(),1);
    assert(await page.locator('h1').first().isVisible(),route);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow ${width} ${route}`);checks++;
   }
   if(width===390) {
    await page.goto((process.env.BASE_URL || 'http://127.0.0.1:3214')+'/');
    const button=page.locator('button[aria-controls="mobile-navigation"]');
    assert.equal(await button.getAttribute('aria-expanded'),'false');
    await button.click();assert.equal(await button.getAttribute('aria-expanded'),'true');
    await page.keyboard.press('Escape');assert.equal(await button.getAttribute('aria-expanded'),'false');assert(await button.evaluate(e=>e===document.activeElement));
    await button.click();await page.locator('#mobile-navigation').getByRole('link',{name:'Task 2: Support'}).click();await page.waitForURL('**/task2');
    assert.equal(await page.getByRole('button',{name:'Open navigation'}).getAttribute('aria-expanded'),'false');checks+=3;
   }
   assert.deepEqual(errors,[]);await context.close();
  }
  console.log(JSON.stringify({passed:true,routeChecks:16,navigationChecks:3,checks}));
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
