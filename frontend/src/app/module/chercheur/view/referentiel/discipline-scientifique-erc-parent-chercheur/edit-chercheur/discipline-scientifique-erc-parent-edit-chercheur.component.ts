import {Component, OnInit} from '@angular/core';
// import {DisciplineScientifiqueErcParentService} from '../../../../../../controller/service/DisciplineScientifiqueErcParent.service';
// import {DisciplineScientifiqueErcParentVo} from '../../../../../../controller/model/DisciplineScientifiqueErcParent.model';
import {RoleService} from '../../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';
import {DisciplineScientifiqueErcService} from '../../../../../../controller/service/DisciplineScientifiqueErc.service';
import {DisciplineScientifiqueErcVo} from '../../../../../../controller/model/DisciplineScientifiqueErc.model';


@Component({
  selector: 'app-discipline-scientifique-erc-parent-edit-chercheur',
  templateUrl: './discipline-scientifique-erc-parent-edit-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-erc-parent-edit-chercheur.component.css']
})
export class DisciplineScientifiqueErcParentEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueErcParentService: DisciplineScientifiqueErcService
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
            this.selectedDisciplineScientifiqueErcParent.dateArchivage = DateUtils.toDate(this.selectedDisciplineScientifiqueErcParent.dateArchivage);
            this.selectedDisciplineScientifiqueErcParent.dateCreation = DateUtils.toDate(this.selectedDisciplineScientifiqueErcParent.dateCreation);
    this.disciplineScientifiqueErcParentService.edit().subscribe(disciplineScientifiqueErcParent=>{
    const myIndex = this.disciplineScientifiqueErcParents.findIndex(e => e.id === this.selectedDisciplineScientifiqueErcParent.id);
    this.disciplineScientifiqueErcParents[myIndex] = this.selectedDisciplineScientifiqueErcParent;
    this.editDisciplineScientifiqueErcParentDialog = false;
    this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editDisciplineScientifiqueErcParentDialog  = false;
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

   get editDisciplineScientifiqueErcParentDialog(): boolean {
           return this.disciplineScientifiqueErcParentService.editDisciplineScientifiqueErcDialog;

       }
    set editDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.editDisciplineScientifiqueErcDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
