import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueService} from '../../../../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueVo} from '../../../../../../controller/model/DisciplineScientifique.model';
import {RoleService} from '../../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

// import {DisciplineScientifiqueParentVo} from '../../../../../../controller/model/DisciplineScientifiqueParent.model';
// import {DisciplineScientifiqueParentService} from '../../../../../../controller/service/DisciplineScientifiqueParent.service';
import {DisciplineScientifiqueErcVo} from '../../../../../../controller/model/DisciplineScientifiqueErc.model';
import {DisciplineScientifiqueErcService} from '../../../../../../controller/service/DisciplineScientifiqueErc.service';
import {DisciplineScientifiqueErcAssociationVo} from '../../../../../../controller/model/DisciplineScientifiqueErcAssociation.model';
import {DisciplineScientifiqueErcAssociationService} from '../../../../../../controller/service/DisciplineScientifiqueErcAssociation.service';
import {SemanticRelationshipVo} from '../../../../../../controller/model/SemanticRelationship.model';
import {SemanticRelationshipService} from '../../../../../../controller/service/SemanticRelationship.service';

@Component({
  selector: 'app-discipline-scientifique-edit-chercheur',
  templateUrl: './discipline-scientifique-edit-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-edit-chercheur.component.css']
})
export class DisciplineScientifiqueEditChercheurComponent implements OnInit {

        selectedDisciplineScientifiqueErcAssociations: DisciplineScientifiqueErcAssociationVo = new DisciplineScientifiqueErcAssociationVo();
        disciplineScientifiqueErcAssociationsListe: Array<DisciplineScientifiqueErcAssociationVo> = [];

        myDisciplineScientifiqueErcs: Array<DisciplineScientifiqueErcVo> = [];
        mySemanticRelationships: Array<SemanticRelationshipVo> = [];


constructor(private datePipe: DatePipe, private disciplineScientifiqueService: DisciplineScientifiqueService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private disciplineScientifiqueParentService: DisciplineScientifiqueService
 ,       private disciplineScientifiqueErcService: DisciplineScientifiqueErcService
 ,       private disciplineScientifiqueErcAssociationService: DisciplineScientifiqueErcAssociationService
 ,       private semanticRelationshipService: SemanticRelationshipService
) {
}

// methods
ngOnInit(): void {
                this.selectedDisciplineScientifiqueErcAssociations.disciplineScientifiqueErcVo = new DisciplineScientifiqueErcVo();
                this.disciplineScientifiqueErcService.findAll().subscribe((data) => this.disciplineScientifiqueErcs = data);
                this.selectedDisciplineScientifiqueErcAssociations.semanticRelationshipVo = new SemanticRelationshipVo();
                this.semanticRelationshipService.findAll().subscribe((data) => this.semanticRelationships = data);
    this.selectedDisciplineScientifiqueParent = new DisciplineScientifiqueVo();
    this.disciplineScientifiqueParentService.findAll().subscribe((data) => this.disciplineScientifiqueParents = data);
}
        addDisciplineScientifiqueErcAssociations() {
        if( this.selectedDisciplineScientifique.disciplineScientifiqueErcAssociationsVo == null ){
            this.selectedDisciplineScientifique.disciplineScientifiqueErcAssociationsVo = new Array<DisciplineScientifiqueErcAssociationVo>();
        }
        this.selectedDisciplineScientifique.disciplineScientifiqueErcAssociationsVo.push(this.selectedDisciplineScientifiqueErcAssociations);
        this.selectedDisciplineScientifiqueErcAssociations = new DisciplineScientifiqueErcAssociationVo();
        }

       deleteDisciplineScientifiqueErcAssociations(p: DisciplineScientifiqueErcAssociationVo) {
        this.selectedDisciplineScientifique.disciplineScientifiqueErcAssociationsVo.forEach((element, index) => {
            if (element === p) { this.selectedDisciplineScientifique.disciplineScientifiqueErcAssociationsVo.splice(index, 1); }
        });
    }

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedDisciplineScientifique.dateArchivage = DateUtils.toDate(this.selectedDisciplineScientifique.dateArchivage);
            this.selectedDisciplineScientifique.dateCreation = DateUtils.toDate(this.selectedDisciplineScientifique.dateCreation);
    this.disciplineScientifiqueService.edit().subscribe(disciplineScientifique=>{
    const myIndex = this.disciplineScientifiques.findIndex(e => e.id === this.selectedDisciplineScientifique.id);
    this.disciplineScientifiques[myIndex] = this.selectedDisciplineScientifique;
    this.editDisciplineScientifiqueDialog = false;
    this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreatedisciplineScientifiqueParent(disciplineScientifiqueParent: string) {
                      const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueParent', 'add');
                       if(isPermistted){
         this.selectedDisciplineScientifiqueParent = new DisciplineScientifiqueVo();
        this.createDisciplineScientifiqueParentDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatedisciplineScientifiqueErc(disciplineScientifiqueErc: string) {
                      const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErc', 'add');
                       if(isPermistted){
         this.selectedDisciplineScientifiqueErc = new DisciplineScientifiqueErcVo();
        this.createDisciplineScientifiqueErcDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatesemanticRelationship(semanticRelationship: string) {
                      const isPermistted = await this.roleService.isPermitted('SemanticRelationship', 'add');
                       if(isPermistted){
         this.selectedSemanticRelationship = new SemanticRelationshipVo();
        this.createSemanticRelationshipDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editDisciplineScientifiqueDialog  = false;
}

// getters and setters

get disciplineScientifiques(): Array<DisciplineScientifiqueVo> {
    return this.disciplineScientifiqueService.disciplineScientifiques;
       }
set disciplineScientifiques(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiques = value;
       }

 get selectedDisciplineScientifique(): DisciplineScientifiqueVo {
           return this.disciplineScientifiqueService.selectedDisciplineScientifique;
       }
    set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.selectedDisciplineScientifique = value;
       }

   get editDisciplineScientifiqueDialog(): boolean {
           return this.disciplineScientifiqueService.editDisciplineScientifiqueDialog;

       }
    set editDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.editDisciplineScientifiqueDialog = value;
       }

       get selectedDisciplineScientifiqueParent(): DisciplineScientifiqueVo {
           return this.disciplineScientifiqueParentService.selectedDisciplineScientifique;
       }
      set selectedDisciplineScientifiqueParent(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueParentService.selectedDisciplineScientifique = value;
       }
       get disciplineScientifiqueParents(): Array<DisciplineScientifiqueVo> {
           return this.disciplineScientifiqueParentService.disciplineScientifiques;
       }
       set disciplineScientifiqueParents(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueParentService.disciplineScientifiques = value;
       }
       get createDisciplineScientifiqueParentDialog(): boolean {
           return this.disciplineScientifiqueParentService.createDisciplineScientifiqueDialog;
       }
      set createDisciplineScientifiqueParentDialog(value: boolean) {
        this.disciplineScientifiqueParentService.createDisciplineScientifiqueDialog= value;
       }
       get selectedDisciplineScientifiqueErc(): DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc;
       }
      set selectedDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc = value;
       }
       get disciplineScientifiqueErcs(): Array<DisciplineScientifiqueErcVo> {
           return this.disciplineScientifiqueErcService.disciplineScientifiqueErcs;
       }
       set disciplineScientifiqueErcs(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcService.disciplineScientifiqueErcs = value;
       }
       get createDisciplineScientifiqueErcDialog(): boolean {
           return this.disciplineScientifiqueErcService.createDisciplineScientifiqueErcDialog;
       }
      set createDisciplineScientifiqueErcDialog(value: boolean) {
        this.disciplineScientifiqueErcService.createDisciplineScientifiqueErcDialog= value;
       }
       get selectedSemanticRelationship(): SemanticRelationshipVo {
           return this.semanticRelationshipService.selectedSemanticRelationship;
       }
      set selectedSemanticRelationship(value: SemanticRelationshipVo) {
        this.semanticRelationshipService.selectedSemanticRelationship = value;
       }
       get semanticRelationships(): Array<SemanticRelationshipVo> {
           return this.semanticRelationshipService.semanticRelationships;
       }
       set semanticRelationships(value: Array<SemanticRelationshipVo>) {
        this.semanticRelationshipService.semanticRelationships = value;
       }
       get createSemanticRelationshipDialog(): boolean {
           return this.semanticRelationshipService.createSemanticRelationshipDialog;
       }
      set createSemanticRelationshipDialog(value: boolean) {
        this.semanticRelationshipService.createSemanticRelationshipDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
