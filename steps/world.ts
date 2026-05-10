import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import type { Page } from '@playwright/test';

class CustomWorld extends World {
  page?: Page;
  allureGroup: any;
  allureTest: any;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
