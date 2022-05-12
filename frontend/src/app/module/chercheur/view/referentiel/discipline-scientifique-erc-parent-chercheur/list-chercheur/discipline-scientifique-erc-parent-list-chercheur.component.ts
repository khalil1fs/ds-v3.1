import {Component, OnInit} from '@angular/core';
// import {DisciplineScientifiqueErcParentService} from '../../../../../../controller/service/DisciplineScientifiqueErcParent.service';
// import {DisciplineScientifiqueErcParentVo} from '../../../../../../controller/model/DisciplineScientifiqueErcParent.model';
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
import {DisciplineScientifiqueErcVo} from '../../../../../../controller/model/DisciplineScientifiqueErc.model';
import {DisciplineScientifiqueErcService} from '../../../../../../controller/service/DisciplineScientifiqueErc.service';

@Component({
  selector: 'app-discipline-scientifique-erc-parent-list-chercheur',
  templateUrl: './discipline-scientifique-erc-parent-list-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-erc-parent-list-chercheur.component.css']
})
export class DisciplineScientifiqueErcParentListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'DisciplineScientifiqueErcParent';
     yesOrNoArchive :any[] =[];


    constructor(private datePipe: DatePipe, private disciplineScientifiqueErcParentService: DisciplineScientifiqueErcService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadDisciplineScientifiqueErcParents();
      this.initExport();
      this.initCol();
    this.yesOrNoArchive =  [{label: 'Archive', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadDisciplineScientifiqueErcParents(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcParent', 'list');
        isPermistted ? this.disciplineScientifiqueErcParentService.findAll().subscribe(disciplineScientifiqueErcParents => this.disciplineScientifiqueErcParents = disciplineScientifiqueErcParents,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.disciplineScientifiqueErcParentService.findByCriteria(this.searchDisciplineScientifiqueErcParent).subscribe(disciplineScientifiqueErcParents=>{
            
            this.disciplineScientifiqueErcParents = disciplineScientifiqueErcParents;
           // this.searchDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcParentVo();
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
    
    public async editDisciplineScientifiqueErcParent(disciplineScientifiqueErcParent: DisciplineScientifiqueErcVo){
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcParent', 'edit');
         if(isPermistted){
          this.disciplineScientifiqueErcParentService.findByIdWithAssociatedList(disciplineScientifiqueErcParent).subscribe(res => {
           this.selectedDisciplineScientifiqueErcParent = res;
            this.selectedDisciplineScientifiqueErcParent.dateArchivage = new Date(disciplineScientifiqueErcParent.dateArchivage);
            this.selectedDisciplineScientifiqueErcParent.dateCreation = new Date(disciplineScientifiqueErcParent.dateCreation);
            this.editDisciplineScientifiqueErcParentDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewDisciplineScientifiqueErcParent(disciplineScientifiqueErcParent: DisciplineScientifiqueErcVo){
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcParent', 'view');
        if(isPermistted){
           this.disciplineScientifiqueErcParentService.findByIdWithAssociatedList(disciplineScientifiqueErcParent).subscribe(res => {
           this.selectedDisciplineScientifiqueErcParent = res;
            this.selectedDisciplineScientifiqueErcParent.dateArchivage = new Date(disciplineScientifiqueErcParent.dateArchivage);
            this.selectedDisciplineScientifiqueErcParent.dateCreation = new Date(disciplineScientifiqueErcParent.dateCreation);
            this.viewDisciplineScientifiqueErcParentDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateDisciplineScientifiqueErcParent(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcVo();
            this.createDisciplineScientifiqueErcParentDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteDisciplineScientifiqueErcParent(disciplineScientifiqueErcParent: DisciplineScientifiqueErcVo){
       const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcParent', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Discipline scientifique erc parent) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueErcParentService.delete(disciplineScientifiqueErcParent).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiqueErcParents.indexOf(disciplineScientifiqueErcParent);
                          position > -1 ? this.disciplineScientifiqueErcParents.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Discipline scientifique erc parent Supprimé',
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


public async duplicateDisciplineScientifiqueErcParent(disciplineScientifiqueErcParent: DisciplineScientifiqueErcVo) {

     this.disciplineScientifiqueErcParentService.findByIdWithAssociatedList(disciplineScientifiqueErcParent).subscribe(
	 res => {
	       this.initDuplicateDisciplineScientifiqueErcParent(res);
	       this.selectedDisciplineScientifiqueErcParent = res;
	       this.selectedDisciplineScientifiqueErcParent.id = null;
            this.createDisciplineScientifiqueErcParentDialog = true;

});

	}

	initDuplicateDisciplineScientifiqueErcParent(res: DisciplineScientifiqueErcVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.disciplineScientifiqueErcParents.map(e => {
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
            'Libelle fr': this.searchDisciplineScientifiqueErcParent.libelleFr ? this.searchDisciplineScientifiqueErcParent.libelleFr : environment.emptyForExport ,
            'Libelle eng': this.searchDisciplineScientifiqueErcParent.libelleEng ? this.searchDisciplineScientifiqueErcParent.libelleEng : environment.emptyForExport ,
            'Code': this.searchDisciplineScientifiqueErcParent.code ? this.searchDisciplineScientifiqueErcParent.code : environment.emptyForExport ,
            'Niveau Min': this.searchDisciplineScientifiqueErcParent.niveauMin ? this.searchDisciplineScientifiqueErcParent.niveauMin : environment.emptyForExport ,
            'Niveau Max': this.searchDisciplineScientifiqueErcParent.niveauMax ? this.searchDisciplineScientifiqueErcParent.niveauMax : environment.emptyForExport ,
            'Archive': this.searchDisciplineScientifiqueErcParent.archive ? (this.searchDisciplineScientifiqueErcParent.archive ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date archivage Min': this.searchDisciplineScientifiqueErcParent.dateArchivageMin ? this.datePipe.transform(this.searchDisciplineScientifiqueErcParent.dateArchivageMin , this.dateFormat) : environment.emptyForExport ,
            'Date archivage Max': this.searchDisciplineScientifiqueErcParent.dateArchivageMax ? this.datePipe.transform(this.searchDisciplineScientifiqueErcParent.dateArchivageMax , this.dateFormat) : environment.emptyForExport ,
            'Date creation Min': this.searchDisciplineScientifiqueErcParent.dateCreationMin ? this.datePipe.transform(this.searchDisciplineScientifiqueErcParent.dateCreationMin , this.dateFormat) : environment.emptyForExport ,
            'Date creation Max': this.searchDisciplineScientifiqueErcParent.dateCreationMax ? this.datePipe.transform(this.searchDisciplineScientifiqueErcParent.dateCreationMax , this.dateFormat) : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get disciplineScientifiqueErcParents() : Array<DisciplineScientifiqueErcVo> {
           return this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcs;
       }
    set disciplineScientifiqueErcParents(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcs = value;
       }

    get disciplineScientifiqueErcParentSelections() : Array<DisciplineScientifiqueErcVo> {
           return this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcSelections;
       }
    set disciplineScientifiqueErcParentSelections(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcSelections = value;
       }
   
     


    get selectedDisciplineScientifiqueErcParent() : DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErc;
       }
    set selectedDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErc = value;
       }
    
    get createDisciplineScientifiqueErcParentDialog() :boolean {
           return this.disciplineScientifiqueErcParentService.createDisciplineScientifiqueErcDialog;
       }
    set createDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.createDisciplineScientifiqueErcDialog= value;
       }
    
    get editDisciplineScientifiqueErcParentDialog() :boolean {
           return this.disciplineScientifiqueErcParentService.editDisciplineScientifiqueErcDialog;
       }
    set editDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.editDisciplineScientifiqueErcDialog= value;
       }
    get viewDisciplineScientifiqueErcParentDialog() :boolean {
           return this.disciplineScientifiqueErcParentService.viewDisciplineScientifiqueErcDialog;
       }
    set viewDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.viewDisciplineScientifiqueErcDialog = value;
       }
       
     get searchDisciplineScientifiqueErcParent() : DisciplineScientifiqueErcVo {
        return this.disciplineScientifiqueErcParentService.searchDisciplineScientifiqueErc;
       }
    set searchDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcParentService.searchDisciplineScientifiqueErc = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
