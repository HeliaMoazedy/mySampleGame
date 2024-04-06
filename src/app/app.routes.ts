import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'number-guesseing',
    loadComponent: () =>
      import('./pages/number-guessing/number-guessing.component').then(
        (m) => m.NumbergGuessing
      ),
  },
];
