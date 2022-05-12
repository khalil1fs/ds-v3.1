import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdService} from '../../../../../../controller/service/EnjeuxIrd.service';
import {EnjeuxIrdVo} from '../../../../../../controller/model/EnjeuxIrd.model';
import {RoleService} from '../../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-enjeux-ird-view-admin',
  templateUrl: './enjeux-ird-view-admin.component.html',
  styleUrls: ['./enjeux-ird-view-admin.component.css']
})
export class EnjeuxIrdViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private enjeuxIrdService: EnjeuxIrdService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewEnjeuxIrdDialog  = false;
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

   get viewEnjeuxIrdDialog(): boolean {
           return this.enjeuxIrdService.viewEnjeuxIrdDialog;

       }
    set viewEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.viewEnjeuxIrdDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
