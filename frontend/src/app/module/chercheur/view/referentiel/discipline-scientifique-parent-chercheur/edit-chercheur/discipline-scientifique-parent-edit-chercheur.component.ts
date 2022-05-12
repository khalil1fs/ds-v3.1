import {Component, OnInit} from '@angular/core';
// import {DisciplineScientifiqueParentService} from '../../../../../../controller/service/DisciplineScientifiqueParent.service';
// import {DisciplineScientifiqueParentVo} from '../../../../../../controller/model/DisciplineScientifiqueParent.model';
import {RoleService} from '../../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';
import {DisciplineScientifiqueVo} from '../../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../../controller/service/DisciplineScientifique.service';


@Component({
  selector: 'app-discipline-scientifique-parent-edit-chercheur',
  templateUrl: './discipline-scientifique-parent-edit-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-parent-edit-chercheur.component.css']
})
export class DisciplineScientifiqueParentEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueParentService: DisciplineScientifiqueService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
) {
}

// methods
ngOnInit(): void {
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedDisciplineScientifiqueParent.dateArchivage = DateUtils.toDate(this.selectedDisciplineScientifiqueParent.dateArchivage);
            this.selectedDisciplineScientifiqueParent.dateCreation = DateUtils.toDate(this.selectedDisciplineScientifiqueParent.dateCreation);
    this.disciplineScientifiqueParentService.edit().subscribe(disciplineScientifiqueParent=>{
    const myIndex = this.disciplineScientifiqueParents.findIndex(e => e.id === this.selectedDisciplineScientifiqueParent.id);
    this.disciplineScientifiqueParents[myIndex] = this.selectedDisciplineScientifiqueParent;
    this.editDisciplineScientifiqueParentDialog = false;
    this.selectedDisciplineScientifiqueParent = new DisciplineScientifiqueVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editDisciplineScientifiqueParentDialog  = false;
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

   get editDisciplineScientifiqueParentDialog(): boolean {
           return this.disciplineScientifiqueParentService.editDisciplineScientifiqueDialog;

       }
    set editDisciplineScientifiqueParentDialog(value: boolean) {
        this.disciplineScientifiqueParentService.editDisciplineScientifiqueDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
