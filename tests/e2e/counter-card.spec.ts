import { expect, test } from "@playwright/test";

test.describe("CounterCard", () => {
  test("Default story renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?id=components-countercard--default");
    await expect(page.getByText("Total de Vagas")).toBeVisible();
    await expect(page.getByText("78")).toBeVisible();
    await expect(page.getByText("/100")).toBeVisible();
    await expect(
      page.getByText("Acompanhe o número de vagas disponíveis"),
    ).toBeVisible();
  });

  test("Percentage story renders correctly with green background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-countercard--percentage");
    await expect(page.getByText("Vagas Preenchidas")).toBeVisible();
    await expect(page.getByText("78")).toBeVisible();
    await expect(page.getByText("/100")).toBeVisible();
    await expect(page.getByText("22 slots disponíveis")).toBeVisible();
    const card = page.locator(".flex.flex-col.p-4");
    await expect(card).toHaveClass(/bg-green-100/);
  });

  test("HighUsage story renders correctly with red background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-countercard--high-usage");
    await expect(page.getByText("Vagas Preenchidas")).toBeVisible();
    await expect(page.getByText("95")).toBeVisible();
    await expect(page.getByText("/100")).toBeVisible();
    await expect(page.getByText("5 slots disponíveis")).toBeVisible();
    const card = page.locator(".flex.flex-col.p-4");
    await expect(card).toHaveClass(/bg-red-100/);
  });

  test("WithoutMaxCount story renders correctly without max count", async ({
    page,
  }) => {
    await page.goto(
      "/iframe.html?id=components-countercard--without-max-count",
    );
    await expect(page.getByText("Visitantes Online")).toBeVisible();
    await expect(page.getByText("1,250")).toBeVisible();
    await expect(page.getByText("/100")).not.toBeVisible(); // Ensure max count is not visible
  });
});
