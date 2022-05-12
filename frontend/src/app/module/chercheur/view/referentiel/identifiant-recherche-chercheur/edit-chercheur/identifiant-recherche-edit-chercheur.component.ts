import {Component, OnInit} from '@angular/core';
import {IdentifiantRechercheService} from '../../../../../../controller/service/IdentifiantRecherche.service';
import {IdentifiantRechercheVo} from '../../../../../../controller/model/IdentifiantRecherche.model';
import {RoleService} from '../../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-identifiant-recherche-edit-chercheur',
  templateUrl: './identifiant-recherche-edit-chercheur.component.html',
  styleUrls: ['./identifiant-recherche-edit-chercheur.component.css']
})
export class IdentifiantRechercheEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private identifiantRechercheService: IdentifiantRechercheService
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
            this.selectedIdentifiantRecherche.dateArchivage = DateUtils.toDate(this.selectedIdentifiantRecherche.dateArchivage);
            this.selectedIdentifiantRecherche.dateCreation = DateUtils.toDate(this.selectedIdentifiantRecherche.dateCreation);
    this.identifiantRechercheService.edit().subscribe(identifiantRecherche=>{
    const myIndex = this.identifiantRecherches.findIndex(e => e.id === this.selectedIdentifiantRecherche.id);
    this.identifiantRecherches[myIndex] = this.selectedIdentifiantRecherche;
    this.editIdentifiantRechercheDialog = false;
    this.selectedIdentifiantRecherche = new IdentifiantRechercheVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editIdentifiantRechercheDialog  = false;
}

// getters and setters

get identifiantRecherches(): Array<IdentifiantRechercheVo> {
    return this.identifiantRechercheService.identifiantRecherches;
       }
set identifiantRecherches(value: Array<IdentifiantRechercheVo>) {
        this.identifiantRechercheService.identifiantRecherches = value;
       }

 get selectedIdentifiantRecherche(): IdentifiantRechercheVo {
           return this.identifiantRechercheService.selectedIdentifiantRecherche;
       }
    set selectedIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.selectedIdentifiantRecherche = value;
       }

   get editIdentifiantRechercheDialog(): boolean {
           return this.identifiantRechercheService.editIdentifiantRechercheDialog;

       }
    set editIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.editIdentifiantRechercheDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
