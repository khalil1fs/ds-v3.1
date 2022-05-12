import {Component, OnInit} from '@angular/core';
// import {DisciplineScientifiqueErcParentService} from '../../../../../../controller/service/DisciplineScientifiqueErcParent.service';
// import {DisciplineScientifiqueErcParentVo} from '../../../../../../controller/model/DisciplineScientifiqueErcParent.model';
import {RoleService} from '../../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {DisciplineScientifiqueErcService} from '../../../../../../controller/service/DisciplineScientifiqueErc.service';
import {DisciplineScientifiqueErcVo} from '../../../../../../controller/model/DisciplineScientifiqueErc.model';


@Component({
  selector: 'app-discipline-scientifique-erc-parent-view-chercheur',
  templateUrl: './discipline-scientifique-erc-parent-view-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-erc-parent-view-chercheur.component.css']
})
export class DisciplineScientifiqueErcParentViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueErcParentService: DisciplineScientifiqueErcService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewDisciplineScientifiqueErcParentDialog  = false;
}

// getters and setters

get disciplineScientifiqueErcParents(): Array<DisciplineScientifiqueErcVo> {
    return this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcs;
       }
set disciplineScientifiqueErcParents(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcs = value;
       }

 get selectedDisciplineScientifiqueErcParent(): DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErc;
       }
    set selectedDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErc = value;
       }

   get viewDisciplineScientifiqueErcParentDialog(): boolean {
           return this.disciplineScientifiqueErcParentService.viewDisciplineScientifiqueErcDialog;

       }
    set viewDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.viewDisciplineScientifiqueErcDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
