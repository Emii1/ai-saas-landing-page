import { test, expect } from "@playwright/test";

test("all images on the landing page should have an alt-text", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");

  const images = await page.locator("img").all();

  for (const img of images) {
    const alt = await img.getAttribute("alt");
    expect(alt).not.toBeNull();
    expect(alt?.trim()).not.toBe("");
  }
});
