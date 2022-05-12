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

import { DistinctionDisciplineScientifiqueCreateChercheurComponent } from './distinction-discipline-scientifique-chercheur/create-chercheur/distinction-discipline-scientifique-create-chercheur.component';
import { DistinctionDisciplineScientifiqueEditChercheurComponent } from './distinction-discipline-scientifique-chercheur/edit-chercheur/distinction-discipline-scientifique-edit-chercheur.component';
import { DistinctionDisciplineScientifiqueViewChercheurComponent } from './distinction-discipline-scientifique-chercheur/view-chercheur/distinction-discipline-scientifique-view-chercheur.component';
import { DistinctionDisciplineScientifiqueListChercheurComponent } from './distinction-discipline-scientifique-chercheur/list-chercheur/distinction-discipline-scientifique-list-chercheur.component';
import { DistinctionDisciplineScientifiqueChercheurComponent } from './distinction-discipline-scientifique-chercheur/distinction-discipline-scientifique-chercheur.component';
import { DistinctionCreateChercheurComponent } from './distinction-chercheur/create-chercheur/distinction-create-chercheur.component';
import { DistinctionEditChercheurComponent } from './distinction-chercheur/edit-chercheur/distinction-edit-chercheur.component';
import { DistinctionViewChercheurComponent } from './distinction-chercheur/view-chercheur/distinction-view-chercheur.component';
import { DistinctionListChercheurComponent } from './distinction-chercheur/list-chercheur/distinction-list-chercheur.component';
import { DistinctionChercheurComponent } from './distinction-chercheur/distinction-chercheur.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {FormulaireChercheurModule} from '../formulaire/formulaire-chercheur.module';
import {ChercheurModule} from '../../chercheur.module';


@NgModule({
  declarations: [

    DistinctionDisciplineScientifiqueCreateChercheurComponent,
    DistinctionDisciplineScientifiqueListChercheurComponent,
    DistinctionDisciplineScientifiqueViewChercheurComponent,
    DistinctionDisciplineScientifiqueEditChercheurComponent,
    DistinctionDisciplineScientifiqueChercheurComponent,
    DistinctionCreateChercheurComponent,
    DistinctionListChercheurComponent,
    DistinctionViewChercheurComponent,
    DistinctionEditChercheurComponent,
    DistinctionChercheurComponent,
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
        FormulaireChercheurModule,
        ChercheurModule
    ],
  exports: [
  DistinctionDisciplineScientifiqueCreateChercheurComponent,
  DistinctionDisciplineScientifiqueListChercheurComponent,
  DistinctionDisciplineScientifiqueViewChercheurComponent,
  DistinctionDisciplineScientifiqueEditChercheurComponent,
  DistinctionDisciplineScientifiqueChercheurComponent,
  DistinctionCreateChercheurComponent,
  DistinctionListChercheurComponent,
  DistinctionViewChercheurComponent,
  DistinctionEditChercheurComponent,
  DistinctionChercheurComponent,
  ],
  entryComponents: [],
})
export class DistinctionChercheurModule { }
