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

import { EnjeuxIrdChercheurCreateChercheurComponent } from './enjeux-ird-chercheur-chercheur/create-chercheur/enjeux-ird-chercheur-create-chercheur.component';
import { EnjeuxIrdChercheurEditChercheurComponent } from './enjeux-ird-chercheur-chercheur/edit-chercheur/enjeux-ird-chercheur-edit-chercheur.component';
import { EnjeuxIrdChercheurViewChercheurComponent } from './enjeux-ird-chercheur-chercheur/view-chercheur/enjeux-ird-chercheur-view-chercheur.component';
import { EnjeuxIrdChercheurListChercheurComponent } from './enjeux-ird-chercheur-chercheur/list-chercheur/enjeux-ird-chercheur-list-chercheur.component';
import { EnjeuxIrdChercheurChercheurComponent } from './enjeux-ird-chercheur-chercheur/enjeux-ird-chercheur-chercheur.component';
import { SemanticRelationshipCreateChercheurComponent } from './semantic-relationship-chercheur/create-chercheur/semantic-relationship-create-chercheur.component';
import { SemanticRelationshipEditChercheurComponent } from './semantic-relationship-chercheur/edit-chercheur/semantic-relationship-edit-chercheur.component';
import { SemanticRelationshipViewChercheurComponent } from './semantic-relationship-chercheur/view-chercheur/semantic-relationship-view-chercheur.component';
import { SemanticRelationshipListChercheurComponent } from './semantic-relationship-chercheur/list-chercheur/semantic-relationship-list-chercheur.component';
import { SemanticRelationshipChercheurComponent } from './semantic-relationship-chercheur/semantic-relationship-chercheur.component';
import { KeyWordCreateChercheurComponent } from './key-word-chercheur/create-chercheur/key-word-create-chercheur.component';
import { KeyWordEditChercheurComponent } from './key-word-chercheur/edit-chercheur/key-word-edit-chercheur.component';
import { KeyWordViewChercheurComponent } from './key-word-chercheur/view-chercheur/key-word-view-chercheur.component';
import { KeyWordListChercheurComponent } from './key-word-chercheur/list-chercheur/key-word-list-chercheur.component';
import { KeyWordChercheurComponent } from './key-word-chercheur/key-word-chercheur.component';
import { EnjeuxIrdCreateChercheurComponent } from './enjeux-ird-chercheur/create-chercheur/enjeux-ird-create-chercheur.component';
import { EnjeuxIrdEditChercheurComponent } from './enjeux-ird-chercheur/edit-chercheur/enjeux-ird-edit-chercheur.component';
import { EnjeuxIrdViewChercheurComponent } from './enjeux-ird-chercheur/view-chercheur/enjeux-ird-view-chercheur.component';
import { EnjeuxIrdListChercheurComponent } from './enjeux-ird-chercheur/list-chercheur/enjeux-ird-list-chercheur.component';
import { EnjeuxIrdChercheurComponent } from './enjeux-ird-chercheur/enjeux-ird-chercheur.component';
import { DisciplineScientifiqueChercheurCreateChercheurComponent } from './discipline-scientifique-chercheur-chercheur/create-chercheur/discipline-scientifique-chercheur-create-chercheur.component';
import { DisciplineScientifiqueChercheurEditChercheurComponent } from './discipline-scientifique-chercheur-chercheur/edit-chercheur/discipline-scientifique-chercheur-edit-chercheur.component';
import { DisciplineScientifiqueChercheurViewChercheurComponent } from './discipline-scientifique-chercheur-chercheur/view-chercheur/discipline-scientifique-chercheur-view-chercheur.component';
import { DisciplineScientifiqueChercheurListChercheurComponent } from './discipline-scientifique-chercheur-chercheur/list-chercheur/discipline-scientifique-chercheur-list-chercheur.component';
import { DisciplineScientifiqueChercheurChercheurComponent } from './discipline-scientifique-chercheur-chercheur/discipline-scientifique-chercheur-chercheur.component';
// import { DisciplineScientifiqueParentCreateChercheurComponent } from './discipline-scientifique-parent-chercheur/create-chercheur/discipline-scientifique-parent-create-chercheur.component';
// import { DisciplineScientifiqueParentEditChercheurComponent } from './discipline-scientifique-parent-chercheur/edit-chercheur/discipline-scientifique-parent-edit-chercheur.component';
// import { DisciplineScientifiqueParentViewChercheurComponent } from './discipline-scientifique-parent-chercheur/view-chercheur/discipline-scientifique-parent-view-chercheur.component';
// import { DisciplineScientifiqueParentListChercheurComponent } from './discipline-scientifique-parent-chercheur/list-chercheur/discipline-scientifique-parent-list-chercheur.component';
// import { DisciplineScientifiqueParentChercheurComponent } from './discipline-scientifique-parent-chercheur/discipline-scientifique-parent-chercheur.component';
import { DisciplineScientifiqueCreateChercheurComponent } from './discipline-scientifique-chercheur/create-chercheur/discipline-scientifique-create-chercheur.component';
import { DisciplineScientifiqueEditChercheurComponent } from './discipline-scientifique-chercheur/edit-chercheur/discipline-scientifique-edit-chercheur.component';
import { DisciplineScientifiqueViewChercheurComponent } from './discipline-scientifique-chercheur/view-chercheur/discipline-scientifique-view-chercheur.component';
import { DisciplineScientifiqueListChercheurComponent } from './discipline-scientifique-chercheur/list-chercheur/discipline-scientifique-list-chercheur.component';
import { DisciplineScientifiqueChercheurComponent } from './discipline-scientifique-chercheur/discipline-scientifique-chercheur.component';
import { KeyWordDisciplineScientifiqueErcCreateChercheurComponent } from './key-word-discipline-scientifique-erc-chercheur/create-chercheur/key-word-discipline-scientifique-erc-create-chercheur.component';
import { KeyWordDisciplineScientifiqueErcEditChercheurComponent } from './key-word-discipline-scientifique-erc-chercheur/edit-chercheur/key-word-discipline-scientifique-erc-edit-chercheur.component';
import { KeyWordDisciplineScientifiqueErcViewChercheurComponent } from './key-word-discipline-scientifique-erc-chercheur/view-chercheur/key-word-discipline-scientifique-erc-view-chercheur.component';
import { KeyWordDisciplineScientifiqueErcListChercheurComponent } from './key-word-discipline-scientifique-erc-chercheur/list-chercheur/key-word-discipline-scientifique-erc-list-chercheur.component';
import { KeyWordDisciplineScientifiqueErcChercheurComponent } from './key-word-discipline-scientifique-erc-chercheur/key-word-discipline-scientifique-erc-chercheur.component';
import { DisciplineScientifiqueErcAssociationCreateChercheurComponent } from './discipline-scientifique-erc-association-chercheur/create-chercheur/discipline-scientifique-erc-association-create-chercheur.component';
import { DisciplineScientifiqueErcAssociationEditChercheurComponent } from './discipline-scientifique-erc-association-chercheur/edit-chercheur/discipline-scientifique-erc-association-edit-chercheur.component';
import { DisciplineScientifiqueErcAssociationViewChercheurComponent } from './discipline-scientifique-erc-association-chercheur/view-chercheur/discipline-scientifique-erc-association-view-chercheur.component';
import { DisciplineScientifiqueErcAssociationListChercheurComponent } from './discipline-scientifique-erc-association-chercheur/list-chercheur/discipline-scientifique-erc-association-list-chercheur.component';
import { DisciplineScientifiqueErcAssociationChercheurComponent } from './discipline-scientifique-erc-association-chercheur/discipline-scientifique-erc-association-chercheur.component';
import { DisciplineScientifiqueErcCreateChercheurComponent } from './discipline-scientifique-erc-chercheur/create-chercheur/discipline-scientifique-erc-create-chercheur.component';
import { DisciplineScientifiqueErcEditChercheurComponent } from './discipline-scientifique-erc-chercheur/edit-chercheur/discipline-scientifique-erc-edit-chercheur.component';
import { DisciplineScientifiqueErcViewChercheurComponent } from './discipline-scientifique-erc-chercheur/view-chercheur/discipline-scientifique-erc-view-chercheur.component';
import { DisciplineScientifiqueErcListChercheurComponent } from './discipline-scientifique-erc-chercheur/list-chercheur/discipline-scientifique-erc-list-chercheur.component';
import { DisciplineScientifiqueErcChercheurComponent } from './discipline-scientifique-erc-chercheur/discipline-scientifique-erc-chercheur.component';
// import { DisciplineScientifiqueErcParentCreateChercheurComponent } from './discipline-scientifique-erc-parent-chercheur/create-chercheur/discipline-scientifique-erc-parent-create-chercheur.component';
// import { DisciplineScientifiqueErcParentEditChercheurComponent } from './discipline-scientifique-erc-parent-chercheur/edit-chercheur/discipline-scientifique-erc-parent-edit-chercheur.component';
// import { DisciplineScientifiqueErcParentViewChercheurComponent } from './discipline-scientifique-erc-parent-chercheur/view-chercheur/discipline-scientifique-erc-parent-view-chercheur.component';
// import { DisciplineScientifiqueErcParentListChercheurComponent } from './discipline-scientifique-erc-parent-chercheur/list-chercheur/discipline-scientifique-erc-parent-list-chercheur.component';
// import { DisciplineScientifiqueErcParentChercheurComponent } from './discipline-scientifique-erc-parent-chercheur/discipline-scientifique-erc-parent-chercheur.component';
import { IdentifiantRechercheCreateChercheurComponent } from './identifiant-recherche-chercheur/create-chercheur/identifiant-recherche-create-chercheur.component';
import { IdentifiantRechercheEditChercheurComponent } from './identifiant-recherche-chercheur/edit-chercheur/identifiant-recherche-edit-chercheur.component';
import { IdentifiantRechercheViewChercheurComponent } from './identifiant-recherche-chercheur/view-chercheur/identifiant-recherche-view-chercheur.component';
import { IdentifiantRechercheListChercheurComponent } from './identifiant-recherche-chercheur/list-chercheur/identifiant-recherche-list-chercheur.component';
import { IdentifiantRechercheChercheurComponent } from './identifiant-recherche-chercheur/identifiant-recherche-chercheur.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {
  DisciplineScientifiqueParentCreateChercheurComponent
} from './discipline-scientifique-parent-chercheur/create-chercheur/discipline-scientifique-parent-create-chercheur.component';
import {
  DisciplineScientifiqueErcParentCreateChercheurComponent
} from './discipline-scientifique-erc-parent-chercheur/create-chercheur/discipline-scientifique-erc-parent-create-chercheur.component';


@NgModule({
  declarations: [
    DisciplineScientifiqueErcParentCreateChercheurComponent,
    DisciplineScientifiqueParentCreateChercheurComponent,
    EnjeuxIrdChercheurCreateChercheurComponent,
    EnjeuxIrdChercheurListChercheurComponent,
    EnjeuxIrdChercheurViewChercheurComponent,
    EnjeuxIrdChercheurEditChercheurComponent,
    EnjeuxIrdChercheurChercheurComponent,
    SemanticRelationshipCreateChercheurComponent,
    SemanticRelationshipListChercheurComponent,
    SemanticRelationshipViewChercheurComponent,
    SemanticRelationshipEditChercheurComponent,
    SemanticRelationshipChercheurComponent,
    KeyWordCreateChercheurComponent,
    KeyWordListChercheurComponent,
    KeyWordViewChercheurComponent,
    KeyWordEditChercheurComponent,
    KeyWordChercheurComponent,
    EnjeuxIrdCreateChercheurComponent,
    EnjeuxIrdListChercheurComponent,
    EnjeuxIrdViewChercheurComponent,
    EnjeuxIrdEditChercheurComponent,
    EnjeuxIrdChercheurComponent,
    DisciplineScientifiqueChercheurCreateChercheurComponent,
    DisciplineScientifiqueChercheurListChercheurComponent,
    DisciplineScientifiqueChercheurViewChercheurComponent,
    DisciplineScientifiqueChercheurEditChercheurComponent,
    DisciplineScientifiqueChercheurChercheurComponent,
    // DisciplineScientifiqueParentCreateChercheurComponent,
    // DisciplineScientifiqueParentListChercheurComponent,
    // DisciplineScientifiqueParentViewChercheurComponent,
    // DisciplineScientifiqueParentEditChercheurComponent,
    // DisciplineScientifiqueParentChercheurComponent,
    DisciplineScientifiqueCreateChercheurComponent,
    DisciplineScientifiqueListChercheurComponent,
    DisciplineScientifiqueViewChercheurComponent,
    DisciplineScientifiqueEditChercheurComponent,
    DisciplineScientifiqueChercheurComponent,
    KeyWordDisciplineScientifiqueErcCreateChercheurComponent,
    KeyWordDisciplineScientifiqueErcListChercheurComponent,
    KeyWordDisciplineScientifiqueErcViewChercheurComponent,
    KeyWordDisciplineScientifiqueErcEditChercheurComponent,
    KeyWordDisciplineScientifiqueErcChercheurComponent,
    DisciplineScientifiqueErcAssociationCreateChercheurComponent,
    DisciplineScientifiqueErcAssociationListChercheurComponent,
    DisciplineScientifiqueErcAssociationViewChercheurComponent,
    DisciplineScientifiqueErcAssociationEditChercheurComponent,
    DisciplineScientifiqueErcAssociationChercheurComponent,
    DisciplineScientifiqueErcCreateChercheurComponent,
    DisciplineScientifiqueErcListChercheurComponent,
    DisciplineScientifiqueErcViewChercheurComponent,
    DisciplineScientifiqueErcEditChercheurComponent,
    DisciplineScientifiqueErcChercheurComponent,
    // DisciplineScientifiqueErcParentCreateChercheurComponent,
    // DisciplineScientifiqueErcParentListChercheurComponent,
    // DisciplineScientifiqueErcParentViewChercheurComponent,
    // DisciplineScientifiqueErcParentEditChercheurComponent,
    // DisciplineScientifiqueErcParentChercheurComponent,
    IdentifiantRechercheCreateChercheurComponent,
    IdentifiantRechercheListChercheurComponent,
    IdentifiantRechercheViewChercheurComponent,
    IdentifiantRechercheEditChercheurComponent,
    IdentifiantRechercheChercheurComponent,
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
  EnjeuxIrdChercheurCreateChercheurComponent,
  EnjeuxIrdChercheurListChercheurComponent,
  EnjeuxIrdChercheurViewChercheurComponent,
  EnjeuxIrdChercheurEditChercheurComponent,
  EnjeuxIrdChercheurChercheurComponent,
  SemanticRelationshipCreateChercheurComponent,
  SemanticRelationshipListChercheurComponent,
  SemanticRelationshipViewChercheurComponent,
  SemanticRelationshipEditChercheurComponent,
  SemanticRelationshipChercheurComponent,
  KeyWordCreateChercheurComponent,
  KeyWordListChercheurComponent,
  KeyWordViewChercheurComponent,
  KeyWordEditChercheurComponent,
  KeyWordChercheurComponent,
  EnjeuxIrdCreateChercheurComponent,
  EnjeuxIrdListChercheurComponent,
  EnjeuxIrdViewChercheurComponent,
  EnjeuxIrdEditChercheurComponent,
  EnjeuxIrdChercheurComponent,
  DisciplineScientifiqueChercheurCreateChercheurComponent,
  DisciplineScientifiqueChercheurListChercheurComponent,
  DisciplineScientifiqueChercheurViewChercheurComponent,
  DisciplineScientifiqueChercheurEditChercheurComponent,
  DisciplineScientifiqueChercheurChercheurComponent,
  // DisciplineScientifiqueParentCreateChercheurComponent,
  // DisciplineScientifiqueParentListChercheurComponent,
  // DisciplineScientifiqueParentViewChercheurComponent,
  // DisciplineScientifiqueParentEditChercheurComponent,
  // DisciplineScientifiqueParentChercheurComponent,
  DisciplineScientifiqueCreateChercheurComponent,
  DisciplineScientifiqueListChercheurComponent,
  DisciplineScientifiqueViewChercheurComponent,
  DisciplineScientifiqueEditChercheurComponent,
  DisciplineScientifiqueChercheurComponent,
  KeyWordDisciplineScientifiqueErcCreateChercheurComponent,
  KeyWordDisciplineScientifiqueErcListChercheurComponent,
  KeyWordDisciplineScientifiqueErcViewChercheurComponent,
  KeyWordDisciplineScientifiqueErcEditChercheurComponent,
  KeyWordDisciplineScientifiqueErcChercheurComponent,
  DisciplineScientifiqueErcAssociationCreateChercheurComponent,
  DisciplineScientifiqueErcAssociationListChercheurComponent,
  DisciplineScientifiqueErcAssociationViewChercheurComponent,
  DisciplineScientifiqueErcAssociationEditChercheurComponent,
  DisciplineScientifiqueErcAssociationChercheurComponent,
  DisciplineScientifiqueErcCreateChercheurComponent,
  DisciplineScientifiqueErcListChercheurComponent,
  DisciplineScientifiqueErcViewChercheurComponent,
  DisciplineScientifiqueErcEditChercheurComponent,
  DisciplineScientifiqueErcChercheurComponent,
  // DisciplineScientifiqueErcParentCreateChercheurComponent,
  // DisciplineScientifiqueErcParentListChercheurComponent,
  // DisciplineScientifiqueErcParentViewChercheurComponent,
  // DisciplineScientifiqueErcParentEditChercheurComponent,
  // DisciplineScientifiqueErcParentChercheurComponent,
  IdentifiantRechercheCreateChercheurComponent,
  IdentifiantRechercheListChercheurComponent,
  IdentifiantRechercheViewChercheurComponent,
  IdentifiantRechercheEditChercheurComponent,
  IdentifiantRechercheChercheurComponent,
  ],
  entryComponents: [],
})
export class ReferentielChercheurModule { }
