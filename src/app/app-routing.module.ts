import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'place',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'places',
    children: [{
      path: '',
      loadChildren: () => import('./places/places.module').then(m => m.PlacesPageModule)
    },
    {
      path: ':placeId',
      loadChildren: () => import('./places/place-detail/place-detail-routing.module').then(m => m.PlaceDetailPageRoutingModule)
    }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
