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

import { ChercheurCreateAdminComponent } from './chercheur-admin/create-admin/chercheur-create-admin.component';
import { ChercheurEditAdminComponent } from './chercheur-admin/edit-admin/chercheur-edit-admin.component';
import { ChercheurViewAdminComponent } from './chercheur-admin/view-admin/chercheur-view-admin.component';
import { ChercheurListAdminComponent } from './chercheur-admin/list-admin/chercheur-list-admin.component';
import { ChercheurAdminComponent } from './chercheur-admin/chercheur-admin.component';
import { CampagneCreateAdminComponent } from './campagne-admin/create-admin/campagne-create-admin.component';
import { CampagneEditAdminComponent } from './campagne-admin/edit-admin/campagne-edit-admin.component';
import { CampagneViewAdminComponent } from './campagne-admin/view-admin/campagne-view-admin.component';
import { CampagneListAdminComponent } from './campagne-admin/list-admin/campagne-list-admin.component';
import { CampagneAdminComponent } from './campagne-admin/campagne-admin.component';
import { DistinctionCreateAdminComponent } from './distinction-admin/create-admin/distinction-create-admin.component';
import { DistinctionEditAdminComponent } from './distinction-admin/edit-admin/distinction-edit-admin.component';
import { DistinctionViewAdminComponent } from './distinction-admin/view-admin/distinction-view-admin.component';
import { DistinctionListAdminComponent } from './distinction-admin/list-admin/distinction-list-admin.component';
import { DistinctionAdminComponent } from './distinction-admin/distinction-admin.component';
import { EtatEtapeCampagneCreateAdminComponent } from './etat-etape-campagne-admin/create-admin/etat-etape-campagne-create-admin.component';
import { EtatEtapeCampagneEditAdminComponent } from './etat-etape-campagne-admin/edit-admin/etat-etape-campagne-edit-admin.component';
import { EtatEtapeCampagneViewAdminComponent } from './etat-etape-campagne-admin/view-admin/etat-etape-campagne-view-admin.component';
import { EtatEtapeCampagneListAdminComponent } from './etat-etape-campagne-admin/list-admin/etat-etape-campagne-list-admin.component';
import { EtatEtapeCampagneAdminComponent } from './etat-etape-campagne-admin/etat-etape-campagne-admin.component';
import { IdentifiantAuteurExpertCreateAdminComponent } from './identifiant-auteur-expert-admin/create-admin/identifiant-auteur-expert-create-admin.component';
import { IdentifiantAuteurExpertEditAdminComponent } from './identifiant-auteur-expert-admin/edit-admin/identifiant-auteur-expert-edit-admin.component';
import { IdentifiantAuteurExpertViewAdminComponent } from './identifiant-auteur-expert-admin/view-admin/identifiant-auteur-expert-view-admin.component';
import { IdentifiantAuteurExpertListAdminComponent } from './identifiant-auteur-expert-admin/list-admin/identifiant-auteur-expert-list-admin.component';
import { IdentifiantAuteurExpertAdminComponent } from './identifiant-auteur-expert-admin/identifiant-auteur-expert-admin.component';
import { DistinctionDisciplineScientifiqueCreateAdminComponent } from './distinction-discipline-scientifique-admin/create-admin/distinction-discipline-scientifique-create-admin.component';
import { DistinctionDisciplineScientifiqueEditAdminComponent } from './distinction-discipline-scientifique-admin/edit-admin/distinction-discipline-scientifique-edit-admin.component';
import { DistinctionDisciplineScientifiqueViewAdminComponent } from './distinction-discipline-scientifique-admin/view-admin/distinction-discipline-scientifique-view-admin.component';
import { DistinctionDisciplineScientifiqueListAdminComponent } from './distinction-discipline-scientifique-admin/list-admin/distinction-discipline-scientifique-list-admin.component';
import { DistinctionDisciplineScientifiqueAdminComponent } from './distinction-discipline-scientifique-admin/distinction-discipline-scientifique-admin.component';

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

    ChercheurCreateAdminComponent,
    ChercheurListAdminComponent,
    ChercheurViewAdminComponent,
    ChercheurEditAdminComponent,
    ChercheurAdminComponent,
    CampagneCreateAdminComponent,
    CampagneListAdminComponent,
    CampagneViewAdminComponent,
    CampagneEditAdminComponent,
    CampagneAdminComponent,
    DistinctionCreateAdminComponent,
    DistinctionListAdminComponent,
    DistinctionViewAdminComponent,
    DistinctionEditAdminComponent,
    DistinctionAdminComponent,
    EtatEtapeCampagneCreateAdminComponent,
    EtatEtapeCampagneListAdminComponent,
    EtatEtapeCampagneViewAdminComponent,
    EtatEtapeCampagneEditAdminComponent,
    EtatEtapeCampagneAdminComponent,
    IdentifiantAuteurExpertCreateAdminComponent,
    IdentifiantAuteurExpertListAdminComponent,
    IdentifiantAuteurExpertViewAdminComponent,
    IdentifiantAuteurExpertEditAdminComponent,
    IdentifiantAuteurExpertAdminComponent,
    DistinctionDisciplineScientifiqueCreateAdminComponent,
    DistinctionDisciplineScientifiqueListAdminComponent,
    DistinctionDisciplineScientifiqueViewAdminComponent,
    DistinctionDisciplineScientifiqueEditAdminComponent,
    DistinctionDisciplineScientifiqueAdminComponent,
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
    MultiSelectModule,
  ],
  exports: [
  ChercheurCreateAdminComponent,
  ChercheurListAdminComponent,
  ChercheurViewAdminComponent,
  ChercheurEditAdminComponent,
  ChercheurAdminComponent,
  CampagneCreateAdminComponent,
  CampagneListAdminComponent,
  CampagneViewAdminComponent,
  CampagneEditAdminComponent,
  CampagneAdminComponent,
  DistinctionCreateAdminComponent,
  DistinctionListAdminComponent,
  DistinctionViewAdminComponent,
  DistinctionEditAdminComponent,
  DistinctionAdminComponent,
  EtatEtapeCampagneCreateAdminComponent,
  EtatEtapeCampagneListAdminComponent,
  EtatEtapeCampagneViewAdminComponent,
  EtatEtapeCampagneEditAdminComponent,
  EtatEtapeCampagneAdminComponent,
  IdentifiantAuteurExpertCreateAdminComponent,
  IdentifiantAuteurExpertListAdminComponent,
  IdentifiantAuteurExpertViewAdminComponent,
  IdentifiantAuteurExpertEditAdminComponent,
  IdentifiantAuteurExpertAdminComponent,
  DistinctionDisciplineScientifiqueCreateAdminComponent,
  DistinctionDisciplineScientifiqueListAdminComponent,
  DistinctionDisciplineScientifiqueViewAdminComponent,
  DistinctionDisciplineScientifiqueEditAdminComponent,
  DistinctionDisciplineScientifiqueAdminComponent,
  ],
  entryComponents: [],
})
export class FormulaireAdminModule { }
