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

import { ChercheurCreateChercheurComponent } from './chercheur-chercheur/create-chercheur/chercheur-create-chercheur.component';
import { ChercheurEditChercheurComponent } from './chercheur-chercheur/edit-chercheur/chercheur-edit-chercheur.component';
import { ChercheurViewChercheurComponent } from './chercheur-chercheur/view-chercheur/chercheur-view-chercheur.component';
import { ChercheurListChercheurComponent } from './chercheur-chercheur/list-chercheur/chercheur-list-chercheur.component';
import { ChercheurChercheurComponent } from './chercheur-chercheur/chercheur-chercheur.component';
import { CampagneCreateChercheurComponent } from './campagne-chercheur/create-chercheur/campagne-create-chercheur.component';
import { CampagneEditChercheurComponent } from './campagne-chercheur/edit-chercheur/campagne-edit-chercheur.component';
import { CampagneViewChercheurComponent } from './campagne-chercheur/view-chercheur/campagne-view-chercheur.component';
import { CampagneListChercheurComponent } from './campagne-chercheur/list-chercheur/campagne-list-chercheur.component';
import { CampagneChercheurComponent } from './campagne-chercheur/campagne-chercheur.component';
import { DistinctionCreateChercheurComponent } from './distinction-chercheur/create-chercheur/distinction-create-chercheur.component';
import { DistinctionEditChercheurComponent } from './distinction-chercheur/edit-chercheur/distinction-edit-chercheur.component';
import { DistinctionViewChercheurComponent } from './distinction-chercheur/view-chercheur/distinction-view-chercheur.component';
import { DistinctionListChercheurComponent } from './distinction-chercheur/list-chercheur/distinction-list-chercheur.component';
import { DistinctionChercheurComponent } from './distinction-chercheur/distinction-chercheur.component';
import { EtatEtapeCampagneCreateChercheurComponent } from './etat-etape-campagne-chercheur/create-chercheur/etat-etape-campagne-create-chercheur.component';
import { EtatEtapeCampagneEditChercheurComponent } from './etat-etape-campagne-chercheur/edit-chercheur/etat-etape-campagne-edit-chercheur.component';
import { EtatEtapeCampagneViewChercheurComponent } from './etat-etape-campagne-chercheur/view-chercheur/etat-etape-campagne-view-chercheur.component';
import { EtatEtapeCampagneListChercheurComponent } from './etat-etape-campagne-chercheur/list-chercheur/etat-etape-campagne-list-chercheur.component';
import { EtatEtapeCampagneChercheurComponent } from './etat-etape-campagne-chercheur/etat-etape-campagne-chercheur.component';
import { IdentifiantAuteurExpertCreateChercheurComponent } from './identifiant-auteur-expert-chercheur/create-chercheur/identifiant-auteur-expert-create-chercheur.component';
import { IdentifiantAuteurExpertEditChercheurComponent } from './identifiant-auteur-expert-chercheur/edit-chercheur/identifiant-auteur-expert-edit-chercheur.component';
import { IdentifiantAuteurExpertViewChercheurComponent } from './identifiant-auteur-expert-chercheur/view-chercheur/identifiant-auteur-expert-view-chercheur.component';
import { IdentifiantAuteurExpertListChercheurComponent } from './identifiant-auteur-expert-chercheur/list-chercheur/identifiant-auteur-expert-list-chercheur.component';
import { IdentifiantAuteurExpertChercheurComponent } from './identifiant-auteur-expert-chercheur/identifiant-auteur-expert-chercheur.component';
import { DistinctionDisciplineScientifiqueCreateChercheurComponent } from './distinction-discipline-scientifique-chercheur/create-chercheur/distinction-discipline-scientifique-create-chercheur.component';
import { DistinctionDisciplineScientifiqueEditChercheurComponent } from './distinction-discipline-scientifique-chercheur/edit-chercheur/distinction-discipline-scientifique-edit-chercheur.component';
import { DistinctionDisciplineScientifiqueViewChercheurComponent } from './distinction-discipline-scientifique-chercheur/view-chercheur/distinction-discipline-scientifique-view-chercheur.component';
import { DistinctionDisciplineScientifiqueListChercheurComponent } from './distinction-discipline-scientifique-chercheur/list-chercheur/distinction-discipline-scientifique-list-chercheur.component';
import { DistinctionDisciplineScientifiqueChercheurComponent } from './distinction-discipline-scientifique-chercheur/distinction-discipline-scientifique-chercheur.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {ChercheurModule} from '../../chercheur.module';


@NgModule({
  declarations: [

    ChercheurCreateChercheurComponent,
    ChercheurListChercheurComponent,
    ChercheurViewChercheurComponent,
    ChercheurEditChercheurComponent,
    ChercheurChercheurComponent,
    CampagneCreateChercheurComponent,
    CampagneListChercheurComponent,
    CampagneViewChercheurComponent,
    CampagneEditChercheurComponent,
    CampagneChercheurComponent,
    DistinctionCreateChercheurComponent,
    DistinctionListChercheurComponent,
    DistinctionViewChercheurComponent,
    DistinctionEditChercheurComponent,
    DistinctionChercheurComponent,
    EtatEtapeCampagneCreateChercheurComponent,
    EtatEtapeCampagneListChercheurComponent,
    EtatEtapeCampagneViewChercheurComponent,
    EtatEtapeCampagneEditChercheurComponent,
    EtatEtapeCampagneChercheurComponent,
    IdentifiantAuteurExpertCreateChercheurComponent,
    IdentifiantAuteurExpertListChercheurComponent,
    IdentifiantAuteurExpertViewChercheurComponent,
    IdentifiantAuteurExpertEditChercheurComponent,
    IdentifiantAuteurExpertChercheurComponent,
    DistinctionDisciplineScientifiqueCreateChercheurComponent,
    DistinctionDisciplineScientifiqueListChercheurComponent,
    DistinctionDisciplineScientifiqueViewChercheurComponent,
    DistinctionDisciplineScientifiqueEditChercheurComponent,
    DistinctionDisciplineScientifiqueChercheurComponent,
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
        // ChercheurModule,
    ],
  exports: [
  ChercheurCreateChercheurComponent,
  ChercheurListChercheurComponent,
  ChercheurViewChercheurComponent,
  ChercheurEditChercheurComponent,
  ChercheurChercheurComponent,
  CampagneCreateChercheurComponent,
  CampagneListChercheurComponent,
  CampagneViewChercheurComponent,
  CampagneEditChercheurComponent,
  CampagneChercheurComponent,
  DistinctionCreateChercheurComponent,
  DistinctionListChercheurComponent,
  DistinctionViewChercheurComponent,
  DistinctionEditChercheurComponent,
  DistinctionChercheurComponent,
  EtatEtapeCampagneCreateChercheurComponent,
  EtatEtapeCampagneListChercheurComponent,
  EtatEtapeCampagneViewChercheurComponent,
  EtatEtapeCampagneEditChercheurComponent,
  EtatEtapeCampagneChercheurComponent,
  IdentifiantAuteurExpertCreateChercheurComponent,
  IdentifiantAuteurExpertListChercheurComponent,
  IdentifiantAuteurExpertViewChercheurComponent,
  IdentifiantAuteurExpertEditChercheurComponent,
  IdentifiantAuteurExpertChercheurComponent,
  DistinctionDisciplineScientifiqueCreateChercheurComponent,
  DistinctionDisciplineScientifiqueListChercheurComponent,
  DistinctionDisciplineScientifiqueViewChercheurComponent,
  DistinctionDisciplineScientifiqueEditChercheurComponent,
  DistinctionDisciplineScientifiqueChercheurComponent,
  ],
  entryComponents: [],
})
export class FormulaireChercheurModule { }
