import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { IntroVideosComponent } from './components/intro-videos/intro-videos.component';

const routes: Routes = [
  { path:'videos/:id', component: VideosComponent },
  { path: '', component: IntroVideosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
