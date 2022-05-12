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

import { IdentifiantAuteurExpertCreateChercheurComponent } from './identifiant-auteur-expert-chercheur/create-chercheur/identifiant-auteur-expert-create-chercheur.component';
import { IdentifiantAuteurExpertEditChercheurComponent } from './identifiant-auteur-expert-chercheur/edit-chercheur/identifiant-auteur-expert-edit-chercheur.component';
import { IdentifiantAuteurExpertViewChercheurComponent } from './identifiant-auteur-expert-chercheur/view-chercheur/identifiant-auteur-expert-view-chercheur.component';
import { IdentifiantAuteurExpertListChercheurComponent } from './identifiant-auteur-expert-chercheur/list-chercheur/identifiant-auteur-expert-list-chercheur.component';
import { IdentifiantAuteurExpertChercheurComponent } from './identifiant-auteur-expert-chercheur/identifiant-auteur-expert-chercheur.component';
import { ChercheurCreateChercheurComponent } from './chercheur-chercheur/create-chercheur/chercheur-create-chercheur.component';
import { ChercheurEditChercheurComponent } from './chercheur-chercheur/edit-chercheur/chercheur-edit-chercheur.component';
import { ChercheurViewChercheurComponent } from './chercheur-chercheur/view-chercheur/chercheur-view-chercheur.component';
import { ChercheurListChercheurComponent } from './chercheur-chercheur/list-chercheur/chercheur-list-chercheur.component';
import { ChercheurChercheurComponent } from './chercheur-chercheur/chercheur-chercheur.component';
import { EnjeuxIrdChercheurCreateChercheurComponent } from './enjeux-ird-chercheur-chercheur/create-chercheur/enjeux-ird-chercheur-create-chercheur.component';
import { EnjeuxIrdChercheurEditChercheurComponent } from './enjeux-ird-chercheur-chercheur/edit-chercheur/enjeux-ird-chercheur-edit-chercheur.component';
import { EnjeuxIrdChercheurViewChercheurComponent } from './enjeux-ird-chercheur-chercheur/view-chercheur/enjeux-ird-chercheur-view-chercheur.component';
import { EnjeuxIrdChercheurListChercheurComponent } from './enjeux-ird-chercheur-chercheur/list-chercheur/enjeux-ird-chercheur-list-chercheur.component';
import { EnjeuxIrdChercheurChercheurComponent } from './enjeux-ird-chercheur-chercheur/enjeux-ird-chercheur-chercheur.component';
import { DisciplineScientifiqueChercheurCreateChercheurComponent } from './discipline-scientifique-chercheur-chercheur/create-chercheur/discipline-scientifique-chercheur-create-chercheur.component';
import { DisciplineScientifiqueChercheurEditChercheurComponent } from './discipline-scientifique-chercheur-chercheur/edit-chercheur/discipline-scientifique-chercheur-edit-chercheur.component';
import { DisciplineScientifiqueChercheurViewChercheurComponent } from './discipline-scientifique-chercheur-chercheur/view-chercheur/discipline-scientifique-chercheur-view-chercheur.component';
import { DisciplineScientifiqueChercheurListChercheurComponent } from './discipline-scientifique-chercheur-chercheur/list-chercheur/discipline-scientifique-chercheur-list-chercheur.component';
import { DisciplineScientifiqueChercheurChercheurComponent } from './discipline-scientifique-chercheur-chercheur/discipline-scientifique-chercheur-chercheur.component';

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

    IdentifiantAuteurExpertCreateChercheurComponent,
    IdentifiantAuteurExpertListChercheurComponent,
    IdentifiantAuteurExpertViewChercheurComponent,
    IdentifiantAuteurExpertEditChercheurComponent,
    IdentifiantAuteurExpertChercheurComponent,
    ChercheurCreateChercheurComponent,
    ChercheurListChercheurComponent,
    ChercheurViewChercheurComponent,
    ChercheurEditChercheurComponent,
    ChercheurChercheurComponent,
    EnjeuxIrdChercheurCreateChercheurComponent,
    EnjeuxIrdChercheurListChercheurComponent,
    EnjeuxIrdChercheurViewChercheurComponent,
    EnjeuxIrdChercheurEditChercheurComponent,
    EnjeuxIrdChercheurChercheurComponent,
    DisciplineScientifiqueChercheurCreateChercheurComponent,
    DisciplineScientifiqueChercheurListChercheurComponent,
    DisciplineScientifiqueChercheurViewChercheurComponent,
    DisciplineScientifiqueChercheurEditChercheurComponent,
    DisciplineScientifiqueChercheurChercheurComponent,
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
  IdentifiantAuteurExpertCreateChercheurComponent,
  IdentifiantAuteurExpertListChercheurComponent,
  IdentifiantAuteurExpertViewChercheurComponent,
  IdentifiantAuteurExpertEditChercheurComponent,
  IdentifiantAuteurExpertChercheurComponent,
  ChercheurCreateChercheurComponent,
  ChercheurListChercheurComponent,
  ChercheurViewChercheurComponent,
  ChercheurEditChercheurComponent,
  ChercheurChercheurComponent,
  EnjeuxIrdChercheurCreateChercheurComponent,
  EnjeuxIrdChercheurListChercheurComponent,
  EnjeuxIrdChercheurViewChercheurComponent,
  EnjeuxIrdChercheurEditChercheurComponent,
  EnjeuxIrdChercheurChercheurComponent,
  DisciplineScientifiqueChercheurCreateChercheurComponent,
  DisciplineScientifiqueChercheurListChercheurComponent,
  DisciplineScientifiqueChercheurViewChercheurComponent,
  DisciplineScientifiqueChercheurEditChercheurComponent,
  DisciplineScientifiqueChercheurChercheurComponent,
  ],
  entryComponents: [],
})
export class ChercheurChercheurModule { }
