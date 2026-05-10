const { test, expect, request } = require('@playwright/test');

test('OpenWeather API Test', async () => {

  const apiContext = await request.newContext();

  const response = await apiContext.get(
    'https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=025123c3d3d29bd97b9b7f9cab84a7cf&units=metric'
  );

  console.log(await response.text());

  expect(response.status()).toBe(200);

});