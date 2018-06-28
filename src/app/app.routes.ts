import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  {path: '', loadChildren: './routes/home/home.module#HomeModule'},
  {path: 'leaderboard', loadChildren: './routes/leaderboard/leaderboard.module#LeaderboardModule'},
  {path: 'stats', loadChildren: './routes/stats/stats.module#StatsModule'},
  {path: '**', redirectTo: '/'}
];
