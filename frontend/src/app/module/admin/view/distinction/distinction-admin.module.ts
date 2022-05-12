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

import { DistinctionDisciplineScientifiqueCreateAdminComponent } from './distinction-discipline-scientifique-admin/create-admin/distinction-discipline-scientifique-create-admin.component';
import { DistinctionDisciplineScientifiqueEditAdminComponent } from './distinction-discipline-scientifique-admin/edit-admin/distinction-discipline-scientifique-edit-admin.component';
import { DistinctionDisciplineScientifiqueViewAdminComponent } from './distinction-discipline-scientifique-admin/view-admin/distinction-discipline-scientifique-view-admin.component';
import { DistinctionDisciplineScientifiqueListAdminComponent } from './distinction-discipline-scientifique-admin/list-admin/distinction-discipline-scientifique-list-admin.component';
import { DistinctionDisciplineScientifiqueAdminComponent } from './distinction-discipline-scientifique-admin/distinction-discipline-scientifique-admin.component';
import { DistinctionCreateAdminComponent } from './distinction-admin/create-admin/distinction-create-admin.component';
import { DistinctionEditAdminComponent } from './distinction-admin/edit-admin/distinction-edit-admin.component';
import { DistinctionViewAdminComponent } from './distinction-admin/view-admin/distinction-view-admin.component';
import { DistinctionListAdminComponent } from './distinction-admin/list-admin/distinction-list-admin.component';
import { DistinctionAdminComponent } from './distinction-admin/distinction-admin.component';

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

    DistinctionDisciplineScientifiqueCreateAdminComponent,
    DistinctionDisciplineScientifiqueListAdminComponent,
    DistinctionDisciplineScientifiqueViewAdminComponent,
    DistinctionDisciplineScientifiqueEditAdminComponent,
    DistinctionDisciplineScientifiqueAdminComponent,
    DistinctionCreateAdminComponent,
    DistinctionListAdminComponent,
    DistinctionViewAdminComponent,
    DistinctionEditAdminComponent,
    DistinctionAdminComponent,
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
  DistinctionDisciplineScientifiqueCreateAdminComponent,
  DistinctionDisciplineScientifiqueListAdminComponent,
  DistinctionDisciplineScientifiqueViewAdminComponent,
  DistinctionDisciplineScientifiqueEditAdminComponent,
  DistinctionDisciplineScientifiqueAdminComponent,
  DistinctionCreateAdminComponent,
  DistinctionListAdminComponent,
  DistinctionViewAdminComponent,
  DistinctionEditAdminComponent,
  DistinctionAdminComponent,
  ],
  entryComponents: [],
})
export class DistinctionAdminModule { }
