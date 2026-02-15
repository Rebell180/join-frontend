import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Registration } from './pages/registration/registration';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { Join } from './pages/join/join';

export const routes: Routes = [
    {path: 'join', component: Join},

    {path: 'privacy-policy', component: PrivacyPolicy},
    {path: 'legal-notice', component: LegalNotice},
    
    {path: 'register', component: Registration},
    {path: 'login', component: Login},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: 'login'},
];
