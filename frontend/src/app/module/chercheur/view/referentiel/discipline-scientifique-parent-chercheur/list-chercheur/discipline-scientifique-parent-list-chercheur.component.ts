import {Component, OnInit} from '@angular/core';
// import {DisciplineScientifiqueParentService} from '../../../../../../controller/service/DisciplineScientifiqueParent.service';
// import {DisciplineScientifiqueParentVo} from '../../../../../../controller/model/DisciplineScientifiqueParent.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../../controller/service/Export.service';
import {DisciplineScientifiqueService} from '../../../../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueVo} from '../../../../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-discipline-scientifique-parent-list-chercheur',
  templateUrl: './discipline-scientifique-parent-list-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-parent-list-chercheur.component.css']
})
export class DisciplineScientifiqueParentListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'DisciplineScientifiqueParent';
     yesOrNoArchive :any[] =[];


    constructor(private datePipe: DatePipe, private disciplineScientifiqueParentService: DisciplineScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadDisciplineScientifiqueParents();
      this.initExport();
      this.initCol();
    this.yesOrNoArchive =  [{label: 'Archive', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadDisciplineScientifiqueParents(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueParent', 'list');
        isPermistted ? this.disciplineScientifiqueParentService.findAll().subscribe(disciplineScientifiqueParents => this.disciplineScientifiqueParents = disciplineScientifiqueParents,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.disciplineScientifiqueParentService.findByCriteria(this.searchDisciplineScientifiqueParent).subscribe(disciplineScientifiqueParents=>{
            
            this.disciplineScientifiqueParents = disciplineScientifiqueParents;
           // this.searchDisciplineScientifiqueParent = new DisciplineScientifiqueParentVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelleFr', header: 'Libelle fr'},
                            {field: 'libelleEng', header: 'Libelle eng'},
                            {field: 'code', header: 'Code'},
                            {field: 'niveau', header: 'Niveau'},
                            {field: 'archive', header: 'Archive'},
                            {field: 'dateArchivage', header: 'Date archivage'},
                            {field: 'dateCreation', header: 'Date creation'},
        ];
    }
    
    public async editDisciplineScientifiqueParent(disciplineScientifiqueParent: DisciplineScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueParent', 'edit');
         if(isPermistted){
          this.disciplineScientifiqueParentService.findByIdWithAssociatedList(disciplineScientifiqueParent).subscribe(res => {
           this.selectedDisciplineScientifiqueParent = res;
            this.selectedDisciplineScientifiqueParent.dateArchivage = new Date(disciplineScientifiqueParent.dateArchivage);
            this.selectedDisciplineScientifiqueParent.dateCreation = new Date(disciplineScientifiqueParent.dateCreation);
            this.editDisciplineScientifiqueParentDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewDisciplineScientifiqueParent(disciplineScientifiqueParent: DisciplineScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueParent', 'view');
        if(isPermistted){
           this.disciplineScientifiqueParentService.findByIdWithAssociatedList(disciplineScientifiqueParent).subscribe(res => {
           this.selectedDisciplineScientifiqueParent = res;
            this.selectedDisciplineScientifiqueParent.dateArchivage = new Date(disciplineScientifiqueParent.dateArchivage);
            this.selectedDisciplineScientifiqueParent.dateCreation = new Date(disciplineScientifiqueParent.dateCreation);
            this.viewDisciplineScientifiqueParentDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateDisciplineScientifiqueParent(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedDisciplineScientifiqueParent = new DisciplineScientifiqueVo();
            this.createDisciplineScientifiqueParentDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteDisciplineScientifiqueParent(disciplineScientifiqueParent: DisciplineScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueParent', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Discipline scientifique parent) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueParentService.delete(disciplineScientifiqueParent).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiqueParents.indexOf(disciplineScientifiqueParent);
                          position > -1 ? this.disciplineScientifiqueParents.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Discipline scientifique parent Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }


public async duplicateDisciplineScientifiqueParent(disciplineScientifiqueParent: DisciplineScientifiqueVo) {

     this.disciplineScientifiqueParentService.findByIdWithAssociatedList(disciplineScientifiqueParent).subscribe(
	 res => {
	       this.initDuplicateDisciplineScientifiqueParent(res);
	       this.selectedDisciplineScientifiqueParent = res;
	       this.selectedDisciplineScientifiqueParent.id = null;
            this.createDisciplineScientifiqueParentDialog = true;

});

	}

	initDuplicateDisciplineScientifiqueParent(res: DisciplineScientifiqueVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.disciplineScientifiqueParents.map(e => {
    return {
                    'Libelle fr': e.libelleFr ,
                    'Libelle eng': e.libelleEng ,
                    'Code': e.code ,
                    'Niveau': e.niveau ,
                    'Archive': e.archive? 'Vrai' : 'Faux' ,
                    'Date archivage': this.datePipe.transform(e.dateArchivage , 'dd-MM-yyyy'),
                    'Date creation': this.datePipe.transform(e.dateCreation , 'dd-MM-yyyy'),
     }
      });

      this.criteriaData = [{
            'Libelle fr': this.searchDisciplineScientifiqueParent.libelleFr ? this.searchDisciplineScientifiqueParent.libelleFr : environment.emptyForExport ,
            'Libelle eng': this.searchDisciplineScientifiqueParent.libelleEng ? this.searchDisciplineScientifiqueParent.libelleEng : environment.emptyForExport ,
            'Code': this.searchDisciplineScientifiqueParent.code ? this.searchDisciplineScientifiqueParent.code : environment.emptyForExport ,
            'Niveau Min': this.searchDisciplineScientifiqueParent.niveauMin ? this.searchDisciplineScientifiqueParent.niveauMin : environment.emptyForExport ,
            'Niveau Max': this.searchDisciplineScientifiqueParent.niveauMax ? this.searchDisciplineScientifiqueParent.niveauMax : environment.emptyForExport ,
            'Archive': this.searchDisciplineScientifiqueParent.archive ? (this.searchDisciplineScientifiqueParent.archive ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date archivage Min': this.searchDisciplineScientifiqueParent.dateArchivageMin ? this.datePipe.transform(this.searchDisciplineScientifiqueParent.dateArchivageMin , this.dateFormat) : environment.emptyForExport ,
            'Date archivage Max': this.searchDisciplineScientifiqueParent.dateArchivageMax ? this.datePipe.transform(this.searchDisciplineScientifiqueParent.dateArchivageMax , this.dateFormat) : environment.emptyForExport ,
            'Date creation Min': this.searchDisciplineScientifiqueParent.dateCreationMin ? this.datePipe.transform(this.searchDisciplineScientifiqueParent.dateCreationMin , this.dateFormat) : environment.emptyForExport ,
            'Date creation Max': this.searchDisciplineScientifiqueParent.dateCreationMax ? this.datePipe.transform(this.searchDisciplineScientifiqueParent.dateCreationMax , this.dateFormat) : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get disciplineScientifiqueParents() : Array<DisciplineScientifiqueVo> {
           return this.disciplineScientifiqueParentService.disciplineScientifiques;
       }
    set disciplineScientifiqueParents(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueParentService.disciplineScientifiques = value;
       }

    get disciplineScientifiqueParentSelections() : Array<DisciplineScientifiqueVo> {
           return this.disciplineScientifiqueParentService.disciplineScientifiqueSelections;
       }
    set disciplineScientifiqueParentSelections(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueParentService.disciplineScientifiqueSelections = value;
       }
   
     


    get selectedDisciplineScientifiqueParent() : DisciplineScientifiqueVo {
           return this.disciplineScientifiqueParentService.selectedDisciplineScientifique;
       }
    set selectedDisciplineScientifiqueParent(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueParentService.selectedDisciplineScientifique = value;
       }
    
    get createDisciplineScientifiqueParentDialog() :boolean {
           return this.disciplineScientifiqueParentService.createDisciplineScientifiqueDialog;
       }
    set createDisciplineScientifiqueParentDialog(value: boolean) {
        this.disciplineScientifiqueParentService.createDisciplineScientifiqueDialog= value;
       }
    
    get editDisciplineScientifiqueParentDialog() :boolean {
           return this.disciplineScientifiqueParentService.editDisciplineScientifiqueDialog;
       }
    set editDisciplineScientifiqueParentDialog(value: boolean) {
        this.disciplineScientifiqueParentService.editDisciplineScientifiqueDialog= value;
       }
    get viewDisciplineScientifiqueParentDialog() :boolean {
           return this.disciplineScientifiqueParentService.viewDisciplineScientifiqueDialog;
       }
    set viewDisciplineScientifiqueParentDialog(value: boolean) {
        this.disciplineScientifiqueParentService.viewDisciplineScientifiqueDialog = value;
       }
       
     get searchDisciplineScientifiqueParent() : DisciplineScientifiqueVo {
        return this.disciplineScientifiqueParentService.searchDisciplineScientifique;
       }
    set searchDisciplineScientifiqueParent(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueParentService.searchDisciplineScientifique = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
