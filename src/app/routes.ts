import { Routes } from '@angular/router'
import { HymnListComponent } from './rccg/hymn/hymn-list.component'
import { HomeComponent } from './rccg/home.component'
import { ContactUsComponent } from './rccg/contact-us.component'
import { AboutHymnComponent } from './rccg/about-hymn.component'
import { RccgComponent } from './rccg/rccg.component'
import { HymnComponent } from './rccg/hymn/hymn.component'



export const appRoutes:Routes = [
    {path : '', component : HomeComponent, pathMatch : 'full'},
    {path : 'hymns', component : HymnListComponent },
    {path : 'about-rccg', component : RccgComponent },
    {path : 'rccg-hymns', component : AboutHymnComponent },
    {path : 'contact-us', component : ContactUsComponent },
    {path : 'hymns/:hymn', component : HymnComponent }
]