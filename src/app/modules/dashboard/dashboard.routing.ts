import { Route } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardResolver } from '../../resolver/dashboard/dashboard.resolver';

export const DashboardRoutes: Route[] = [
	{
		path: '',
		component: DashboardComponent,
		resolve: {
			data: DashboardResolver,
		},
	},
];
