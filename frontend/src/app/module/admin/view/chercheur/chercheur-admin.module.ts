import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import {MultiSelectModule} from 'primeng/multiselect';

import {
    IdentifiantAuteurExpertCreateAdminComponent
} from './identifiant-auteur-expert-admin/create-admin/identifiant-auteur-expert-create-admin.component';
import {
    IdentifiantAuteurExpertEditAdminComponent
} from './identifiant-auteur-expert-admin/edit-admin/identifiant-auteur-expert-edit-admin.component';
import {
    IdentifiantAuteurExpertViewAdminComponent
} from './identifiant-auteur-expert-admin/view-admin/identifiant-auteur-expert-view-admin.component';
import {
    IdentifiantAuteurExpertListAdminComponent
} from './identifiant-auteur-expert-admin/list-admin/identifiant-auteur-expert-list-admin.component';
import {IdentifiantAuteurExpertAdminComponent} from './identifiant-auteur-expert-admin/identifiant-auteur-expert-admin.component';
import {ChercheurCreateAdminComponent} from './chercheur-admin/create-admin/chercheur-create-admin.component';
import {ChercheurEditAdminComponent} from './chercheur-admin/edit-admin/chercheur-edit-admin.component';
import {ChercheurViewAdminComponent} from './chercheur-admin/view-admin/chercheur-view-admin.component';
import {ChercheurListAdminComponent} from './chercheur-admin/list-admin/chercheur-list-admin.component';
import {ChercheurAdminComponent} from './chercheur-admin/chercheur-admin.component';
import {
    EnjeuxIrdChercheurCreateAdminComponent
} from './enjeux-ird-chercheur-admin/create-admin/enjeux-ird-chercheur-create-admin.component';
import {EnjeuxIrdChercheurEditAdminComponent} from './enjeux-ird-chercheur-admin/edit-admin/enjeux-ird-chercheur-edit-admin.component';
import {EnjeuxIrdChercheurViewAdminComponent} from './enjeux-ird-chercheur-admin/view-admin/enjeux-ird-chercheur-view-admin.component';
import {EnjeuxIrdChercheurListAdminComponent} from './enjeux-ird-chercheur-admin/list-admin/enjeux-ird-chercheur-list-admin.component';
import {EnjeuxIrdChercheurAdminComponent} from './enjeux-ird-chercheur-admin/enjeux-ird-chercheur-admin.component';
import {
    DisciplineScientifiqueChercheurCreateAdminComponent
} from './discipline-scientifique-chercheur-admin/create-admin/discipline-scientifique-chercheur-create-admin.component';
import {
    DisciplineScientifiqueChercheurEditAdminComponent
} from './discipline-scientifique-chercheur-admin/edit-admin/discipline-scientifique-chercheur-edit-admin.component';
import {
    DisciplineScientifiqueChercheurViewAdminComponent
} from './discipline-scientifique-chercheur-admin/view-admin/discipline-scientifique-chercheur-view-admin.component';
import {
    DisciplineScientifiqueChercheurListAdminComponent
} from './discipline-scientifique-chercheur-admin/list-admin/discipline-scientifique-chercheur-list-admin.component';
import {
    DisciplineScientifiqueChercheurAdminComponent
} from './discipline-scientifique-chercheur-admin/discipline-scientifique-chercheur-admin.component';

import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {EnjeuxIrdListAdminComponent} from '../referentiel/enjeux-ird-admin/list-admin/enjeux-ird-list-admin.component';
import {EnjeuxIrdCreateAdminComponent} from '../referentiel/enjeux-ird-admin/create-admin/enjeux-ird-create-admin.component';


@NgModule({
    declarations: [

        IdentifiantAuteurExpertCreateAdminComponent,
        IdentifiantAuteurExpertListAdminComponent,
        IdentifiantAuteurExpertViewAdminComponent,
        IdentifiantAuteurExpertEditAdminComponent,
        IdentifiantAuteurExpertAdminComponent,
        ChercheurCreateAdminComponent,
        ChercheurListAdminComponent,
        ChercheurViewAdminComponent,
        ChercheurEditAdminComponent,
        ChercheurAdminComponent,
        EnjeuxIrdChercheurCreateAdminComponent,
        EnjeuxIrdChercheurListAdminComponent,
        EnjeuxIrdChercheurViewAdminComponent,
        EnjeuxIrdChercheurEditAdminComponent,
        EnjeuxIrdChercheurAdminComponent,
        DisciplineScientifiqueChercheurCreateAdminComponent,
        DisciplineScientifiqueChercheurListAdminComponent,
        DisciplineScientifiqueChercheurViewAdminComponent,
        DisciplineScientifiqueChercheurEditAdminComponent,
        DisciplineScientifiqueChercheurAdminComponent,
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
        IdentifiantAuteurExpertCreateAdminComponent,
        IdentifiantAuteurExpertListAdminComponent,
        IdentifiantAuteurExpertViewAdminComponent,
        IdentifiantAuteurExpertEditAdminComponent,
        IdentifiantAuteurExpertAdminComponent,
        ChercheurCreateAdminComponent,
        ChercheurListAdminComponent,
        ChercheurViewAdminComponent,
        ChercheurEditAdminComponent,
        ChercheurAdminComponent,
        EnjeuxIrdChercheurCreateAdminComponent,
        EnjeuxIrdChercheurListAdminComponent,
        EnjeuxIrdChercheurViewAdminComponent,
        EnjeuxIrdChercheurEditAdminComponent,
        EnjeuxIrdChercheurAdminComponent,
        DisciplineScientifiqueChercheurCreateAdminComponent,
        DisciplineScientifiqueChercheurListAdminComponent,
        DisciplineScientifiqueChercheurViewAdminComponent,
        DisciplineScientifiqueChercheurEditAdminComponent,
        DisciplineScientifiqueChercheurAdminComponent,
    ],
    entryComponents: [],
})
export class ChercheurAdminModule {
}
