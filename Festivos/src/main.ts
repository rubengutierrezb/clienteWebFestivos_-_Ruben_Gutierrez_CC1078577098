import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const enhancedAppConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers || [],
    provideHttpClient(withFetch())
  ]
};

bootstrapApplication(AppComponent, enhancedAppConfig)
  .catch((err) => console.error(err));
