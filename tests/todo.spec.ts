import { test, expect } from '@playwright/test';

/**
 *
 * Test grupal para pagina de INICIO
 *
 */

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Home page', () => {
  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Jose Puerta - Homepage/);
  });

  test('home', async ({ page }) => {
    await page.getByRole('link', { name: 'Inicio' }).click();

    await page
      .getByRole('link', {
        name: 'El poder de los Custom Hooks 09/09/2023 En alguna oportunidad necesite realizar muchas peticiones a un servidor de forma sencilla, lo que me llevo a construir un hook para eso.',
      })
      .hover();

    await expect(
      page.getByRole('heading', { name: 'Hola, Soy José Puerta 👋' })
    ).toBeVisible();

    await expect(
      page.getByRole('heading', { name: 'Ultimas publicaciones' })
    ).toBeVisible();
  });

  test('should go to the page /posts', async ({ page }) => {
    await page
      .getByRole('link', {
        name: 'Posts',
        exact: true,
      })
      .click();

    await expect(page.getByRole('heading', { name: 'Posts' })).toBeVisible();

    await expect(page.url()).toBe('http://localhost:4321/posts');
  });

  test('should go to the page /work', async ({ page }) => {
    await page
      .getByRole('link', {
        name: 'Trabajo',
      })
      .click();

    await expect(page.url()).toBe('http://localhost:4321/work');
  });
});
