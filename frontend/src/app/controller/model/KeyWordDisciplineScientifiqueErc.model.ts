import {KeyWordVo} from './KeyWord.model';
import {DisciplineScientifiqueVo} from './DisciplineScientifique.model';



export class KeyWordDisciplineScientifiqueErcVo {

    public id: number;

    public archive: null | boolean;
    public dateArchivage: Date;
    public dateCreation: Date;
                public dateArchivageMax: string ;
                public dateArchivageMin: string ;
                public dateCreationMax: string ;
                public dateCreationMin: string ;
      public keyWordVo: KeyWordVo ;
      public disciplineScientifiqueVo: DisciplineScientifiqueVo ;

}
