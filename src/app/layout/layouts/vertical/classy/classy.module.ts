import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MessagesModule } from 'app/layout/common/messages/messages.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';
import { ClassyLayoutComponent } from 'app/layout/layouts/vertical/classy/classy.component';

@NgModule({
	declarations: [ClassyLayoutComponent],
	imports: [
		HttpClientModule,
		RouterModule,

		MessagesModule,
		NotificationsModule,
		SearchModule,
		UserModule,
		SharedModule,
	],
	exports: [ClassyLayoutComponent],
})
export class ClassyLayoutModule {}
