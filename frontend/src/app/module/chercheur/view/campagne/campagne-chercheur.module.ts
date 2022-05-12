import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { CampagneCreateChercheurComponent } from './campagne-chercheur/create-chercheur/campagne-create-chercheur.component';
import { CampagneEditChercheurComponent } from './campagne-chercheur/edit-chercheur/campagne-edit-chercheur.component';
import { CampagneViewChercheurComponent } from './campagne-chercheur/view-chercheur/campagne-view-chercheur.component';
import { CampagneListChercheurComponent } from './campagne-chercheur/list-chercheur/campagne-list-chercheur.component';
import { CampagneChercheurComponent } from './campagne-chercheur/campagne-chercheur.component';
import { EtatEtapeCampagneCreateChercheurComponent } from './etat-etape-campagne-chercheur/create-chercheur/etat-etape-campagne-create-chercheur.component';
import { EtatEtapeCampagneEditChercheurComponent } from './etat-etape-campagne-chercheur/edit-chercheur/etat-etape-campagne-edit-chercheur.component';
import { EtatEtapeCampagneViewChercheurComponent } from './etat-etape-campagne-chercheur/view-chercheur/etat-etape-campagne-view-chercheur.component';
import { EtatEtapeCampagneListChercheurComponent } from './etat-etape-campagne-chercheur/list-chercheur/etat-etape-campagne-list-chercheur.component';
import { EtatEtapeCampagneChercheurComponent } from './etat-etape-campagne-chercheur/etat-etape-campagne-chercheur.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';


@NgModule({
  declarations: [

    CampagneCreateChercheurComponent,
    CampagneListChercheurComponent,
    CampagneViewChercheurComponent,
    CampagneEditChercheurComponent,
    CampagneChercheurComponent,
    EtatEtapeCampagneCreateChercheurComponent,
    EtatEtapeCampagneListChercheurComponent,
    EtatEtapeCampagneViewChercheurComponent,
    EtatEtapeCampagneEditChercheurComponent,
    EtatEtapeCampagneChercheurComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule
  ],
  exports: [
  CampagneCreateChercheurComponent,
  CampagneListChercheurComponent,
  CampagneViewChercheurComponent,
  CampagneEditChercheurComponent,
  CampagneChercheurComponent,
  EtatEtapeCampagneCreateChercheurComponent,
  EtatEtapeCampagneListChercheurComponent,
  EtatEtapeCampagneViewChercheurComponent,
  EtatEtapeCampagneEditChercheurComponent,
  EtatEtapeCampagneChercheurComponent,
  ],
  entryComponents: [],
})
export class CampagneChercheurModule { }
