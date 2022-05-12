import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueErcService} from '../../../../../../controller/service/DisciplineScientifiqueErc.service';
import {DisciplineScientifiqueErcVo} from '../../../../../../controller/model/DisciplineScientifiqueErc.model';
import {RoleService} from '../../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

// import {DisciplineScientifiqueErcParentVo} from '../../../../../../controller/model/DisciplineScientifiqueErcParent.model';
// import {DisciplineScientifiqueErcParentService} from '../../../../../../controller/service/DisciplineScientifiqueErcParent.service';

@Component({
  selector: 'app-discipline-scientifique-erc-edit-admin',
  templateUrl: './discipline-scientifique-erc-edit-admin.component.html',
  styleUrls: ['./discipline-scientifique-erc-edit-admin.component.css']
})
export class DisciplineScientifiqueErcEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueErcService: DisciplineScientifiqueErcService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private disciplineScientifiqueErcParentService: DisciplineScientifiqueErcService
) {
}

// methods
ngOnInit(): void {
    this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcVo();
    this.disciplineScientifiqueErcParentService.findAll().subscribe((data) => this.disciplineScientifiqueErcParents = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedDisciplineScientifiqueErc.dateArchivage = DateUtils.toDate(this.selectedDisciplineScientifiqueErc.dateArchivage);
            this.selectedDisciplineScientifiqueErc.dateCreation = DateUtils.toDate(this.selectedDisciplineScientifiqueErc.dateCreation);
    this.disciplineScientifiqueErcService.edit().subscribe(disciplineScientifiqueErc=>{
    const myIndex = this.disciplineScientifiqueErcs.findIndex(e => e.id === this.selectedDisciplineScientifiqueErc.id);
    this.disciplineScientifiqueErcs[myIndex] = this.selectedDisciplineScientifiqueErc;
    this.editDisciplineScientifiqueErcDialog = false;
    this.selectedDisciplineScientifiqueErc = new DisciplineScientifiqueErcVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreatedisciplineScientifiqueErcParent(disciplineScientifiqueErcParent: string) {
                      const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcParent', 'add');
                       if(isPermistted){
         this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcVo();
        this.createDisciplineScientifiqueErcParentDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editDisciplineScientifiqueErcDialog  = false;
}

// getters and setters

get disciplineScientifiqueErcs(): Array<DisciplineScientifiqueErcVo> {
    return this.disciplineScientifiqueErcService.disciplineScientifiqueErcs;
       }
set disciplineScientifiqueErcs(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcService.disciplineScientifiqueErcs = value;
       }

 get selectedDisciplineScientifiqueErc(): DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc;
       }
    set selectedDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc = value;
       }

   get editDisciplineScientifiqueErcDialog(): boolean {
           return this.disciplineScientifiqueErcService.editDisciplineScientifiqueErcDialog;

       }
    set editDisciplineScientifiqueErcDialog(value: boolean) {
        this.disciplineScientifiqueErcService.editDisciplineScientifiqueErcDialog = value;
       }

       get selectedDisciplineScientifiqueErcParent(): DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErc;
       }
      set selectedDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErc = value;
       }
       get disciplineScientifiqueErcParents(): Array<DisciplineScientifiqueErcVo> {
           return this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcs;
       }
       set disciplineScientifiqueErcParents(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcs = value;
       }
       get createDisciplineScientifiqueErcParentDialog(): boolean {
           return this.disciplineScientifiqueErcParentService.createDisciplineScientifiqueErcDialog;
       }
      set createDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.createDisciplineScientifiqueErcDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
