import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdService} from '../../../../../../controller/service/EnjeuxIrd.service';
import {EnjeuxIrdVo} from '../../../../../../controller/model/EnjeuxIrd.model';
import {RoleService} from '../../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-enjeux-ird-edit-chercheur',
  templateUrl: './enjeux-ird-edit-chercheur.component.html',
  styleUrls: ['./enjeux-ird-edit-chercheur.component.css']
})
export class EnjeuxIrdEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private enjeuxIrdService: EnjeuxIrdService
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
            this.selectedEnjeuxIrd.dateArchivage = DateUtils.toDate(this.selectedEnjeuxIrd.dateArchivage);
            this.selectedEnjeuxIrd.dateCreation = DateUtils.toDate(this.selectedEnjeuxIrd.dateCreation);
    this.enjeuxIrdService.edit().subscribe(enjeuxIrd=>{
    const myIndex = this.enjeuxIrds.findIndex(e => e.id === this.selectedEnjeuxIrd.id);
    this.enjeuxIrds[myIndex] = this.selectedEnjeuxIrd;
    this.editEnjeuxIrdDialog = false;
    this.selectedEnjeuxIrd = new EnjeuxIrdVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editEnjeuxIrdDialog  = false;
}

// getters and setters

get enjeuxIrds(): Array<EnjeuxIrdVo> {
    return this.enjeuxIrdService.enjeuxIrds;
       }
set enjeuxIrds(value: Array<EnjeuxIrdVo>) {
        this.enjeuxIrdService.enjeuxIrds = value;
       }

 get selectedEnjeuxIrd(): EnjeuxIrdVo {
           return this.enjeuxIrdService.selectedEnjeuxIrd;
       }
    set selectedEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.selectedEnjeuxIrd = value;
       }

   get editEnjeuxIrdDialog(): boolean {
           return this.enjeuxIrdService.editEnjeuxIrdDialog;

       }
    set editEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.editEnjeuxIrdDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
