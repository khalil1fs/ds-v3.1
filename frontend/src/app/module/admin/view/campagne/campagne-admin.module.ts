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

import { CampagneCreateAdminComponent } from './campagne-admin/create-admin/campagne-create-admin.component';
import { CampagneEditAdminComponent } from './campagne-admin/edit-admin/campagne-edit-admin.component';
import { CampagneViewAdminComponent } from './campagne-admin/view-admin/campagne-view-admin.component';
import { CampagneListAdminComponent } from './campagne-admin/list-admin/campagne-list-admin.component';
import { CampagneAdminComponent } from './campagne-admin/campagne-admin.component';
import { EtatEtapeCampagneCreateAdminComponent } from './etat-etape-campagne-admin/create-admin/etat-etape-campagne-create-admin.component';
import { EtatEtapeCampagneEditAdminComponent } from './etat-etape-campagne-admin/edit-admin/etat-etape-campagne-edit-admin.component';
import { EtatEtapeCampagneViewAdminComponent } from './etat-etape-campagne-admin/view-admin/etat-etape-campagne-view-admin.component';
import { EtatEtapeCampagneListAdminComponent } from './etat-etape-campagne-admin/list-admin/etat-etape-campagne-list-admin.component';
import { EtatEtapeCampagneAdminComponent } from './etat-etape-campagne-admin/etat-etape-campagne-admin.component';

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

    CampagneCreateAdminComponent,
    CampagneListAdminComponent,
    CampagneViewAdminComponent,
    CampagneEditAdminComponent,
    CampagneAdminComponent,
    EtatEtapeCampagneCreateAdminComponent,
    EtatEtapeCampagneListAdminComponent,
    EtatEtapeCampagneViewAdminComponent,
    EtatEtapeCampagneEditAdminComponent,
    EtatEtapeCampagneAdminComponent,
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
  CampagneCreateAdminComponent,
  CampagneListAdminComponent,
  CampagneViewAdminComponent,
  CampagneEditAdminComponent,
  CampagneAdminComponent,
  EtatEtapeCampagneCreateAdminComponent,
  EtatEtapeCampagneListAdminComponent,
  EtatEtapeCampagneViewAdminComponent,
  EtatEtapeCampagneEditAdminComponent,
  EtatEtapeCampagneAdminComponent,
  ],
  entryComponents: [],
})
export class CampagneAdminModule { }
