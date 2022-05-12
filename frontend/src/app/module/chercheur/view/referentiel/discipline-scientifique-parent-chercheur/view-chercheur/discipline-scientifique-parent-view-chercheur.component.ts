import {Component, OnInit} from '@angular/core';
// import {DisciplineScientifiqueParentService} from '../../../../../../controller/service/DisciplineScientifiqueParent.service';
// import {DisciplineScientifiqueParentVo} from '../../../../../../controller/model/DisciplineScientifiqueParent.model';
import {RoleService} from '../../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {DisciplineScientifiqueVo} from '../../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../../controller/service/DisciplineScientifique.service';


@Component({
  selector: 'app-discipline-scientifique-parent-view-chercheur',
  templateUrl: './discipline-scientifique-parent-view-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-parent-view-chercheur.component.css']
})
export class DisciplineScientifiqueParentViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueParentService: DisciplineScientifiqueService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewDisciplineScientifiqueParentDialog  = false;
}

// getters and setters

get disciplineScientifiqueParents(): Array<DisciplineScientifiqueVo> {
    return this.disciplineScientifiqueParentService.disciplineScientifiques;
       }
set disciplineScientifiqueParents(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueParentService.disciplineScientifiques = value;
       }

 get selectedDisciplineScientifiqueParent(): DisciplineScientifiqueVo {
           return this.disciplineScientifiqueParentService.selectedDisciplineScientifique;
       }
    set selectedDisciplineScientifiqueParent(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueParentService.selectedDisciplineScientifique = value;
       }

   get viewDisciplineScientifiqueParentDialog(): boolean {
           return this.disciplineScientifiqueParentService.viewDisciplineScientifiqueDialog;

       }
    set viewDisciplineScientifiqueParentDialog(value: boolean) {
        this.disciplineScientifiqueParentService.viewDisciplineScientifiqueDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
