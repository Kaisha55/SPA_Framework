import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FwModule} from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserApi } from 'src/fw/users/user-api';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from '../app/services/app-data.service';
import { CountryPanelComponent } from './panels/country-panel/country-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountriesComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent,
    CountryPanelComponent,
    ImagePanelComponent
  ],
  imports: [
    BrowserModule,
    FwModule, 
    // HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserService, 
    { provide: UserApi, useExisting: UserService }, 
    AuthGuard, 
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
