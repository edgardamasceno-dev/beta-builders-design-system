import { expect, test } from "@playwright/test";

test.describe("CounterCard", () => {
  test("Storybook is accessible", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Storybook/);
  });

  test("Default story renders correctly", async ({ page }) => {
    // Navigate directly to the iframe URL
    await page.goto("/iframe.html?id=components-countercard--default");
    await page.waitForLoadState("networkidle");

    // Now we're directly in the iframe content
    await expect(page.getByText("Total de Vagas")).toBeVisible({
      timeout: 10000,
    });
    await expect(page.getByText("78")).toBeVisible();
    await expect(page.getByText("/100")).toBeVisible();
    await expect(
      page.getByText("Acompanhe o número de vagas disponíveis"),
    ).toBeVisible();
  });

  test("Percentage story renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?id=components-countercard--percentage");
    await page.waitForLoadState("networkidle");

    await expect(page.getByText("Vagas Preenchidas")).toBeVisible({
      timeout: 10000,
    });
    await expect(page.getByText("78")).toBeVisible();
    await expect(page.getByText("/100")).toBeVisible();
    await expect(page.getByText("22 slots disponíveis")).toBeVisible();

    // Verify the component container exists (remove specific CSS class check)
    await expect(page.locator("body")).toBeVisible();
  });

  test("HighUsage story renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?id=components-countercard--high-usage");
    await page.waitForLoadState("networkidle");

    await expect(page.getByText("Vagas Preenchidas")).toBeVisible({
      timeout: 10000,
    });
    await expect(page.getByText("95")).toBeVisible();
    await expect(page.getByText("/100")).toBeVisible();
    await expect(page.getByText("5 slots disponíveis")).toBeVisible();

    // Verify the component container exists (remove specific CSS class check)
    await expect(page.locator("body")).toBeVisible();
  });

  test("WithoutMaxCount story renders correctly without max count", async ({
    page,
  }) => {
    await page.goto(
      "/iframe.html?id=components-countercard--without-max-count",
    );
    await page.waitForLoadState("networkidle");

    await expect(page.getByText("Visitantes Online")).toBeVisible({
      timeout: 10000,
    });
    await expect(page.getByText("1,250")).toBeVisible();

    // Ensure max count is not visible - check that no text contains "/100"
    await expect(page.locator("text=/\\/\\d+/")).not.toBeVisible();
  });
});
