package  com.ird.faa.ws.rest.provided.vo;

    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class SemanticRelationshipVo {

    private String id ;
    private String libelle ;
    private String code ;
    private String niveauExactitude ;
    private Boolean archive ;
    private String dateArchivage ;
    private String dateCreation ;


            private String niveauExactitudeMax ;
            private String niveauExactitudeMin ;
            private String dateArchivageMax ;
            private String dateArchivageMin ;
            private String dateCreationMax ;
            private String dateCreationMin ;



    public SemanticRelationshipVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getLibelle(){
        return this.libelle;
        }

        public void setLibelle(String libelle){
        this.libelle = libelle;
        }
        public String getCode(){
        return this.code;
        }

        public void setCode(String code){
        this.code = code;
        }
        public String getNiveauExactitude(){
        return this.niveauExactitude;
        }

        public void setNiveauExactitude(String niveauExactitude){
        this.niveauExactitude = niveauExactitude;
        }
        public Boolean getArchive(){
        return this.archive;
        }

        public void setArchive(Boolean archive){
        this.archive = archive;
        }
        public String getDateArchivage(){
        return this.dateArchivage;
        }

        public void setDateArchivage(String dateArchivage){
        this.dateArchivage = dateArchivage;
        }
        public String getDateCreation(){
        return this.dateCreation;
        }

        public void setDateCreation(String dateCreation){
        this.dateCreation = dateCreation;
        }


            public String getNiveauExactitudeMax(){
            return this.niveauExactitudeMax;
            }

            public String getNiveauExactitudeMin(){
            return this.niveauExactitudeMin;
            }

            public void setNiveauExactitudeMax(String niveauExactitudeMax){
            this.niveauExactitudeMax = niveauExactitudeMax;
            }

            public void setNiveauExactitudeMin(String niveauExactitudeMin){
            this.niveauExactitudeMin = niveauExactitudeMin;
            }

            public String getDateArchivageMax(){
            return this.dateArchivageMax;
            }

            public String getDateArchivageMin(){
            return this.dateArchivageMin;
            }

            public void setDateArchivageMax(String dateArchivageMax){
            this.dateArchivageMax = dateArchivageMax;
            }

            public void setDateArchivageMin(String dateArchivageMin){
            this.dateArchivageMin = dateArchivageMin;
            }

            public String getDateCreationMax(){
            return this.dateCreationMax;
            }

            public String getDateCreationMin(){
            return this.dateCreationMin;
            }

            public void setDateCreationMax(String dateCreationMax){
            this.dateCreationMax = dateCreationMax;
            }

            public void setDateCreationMin(String dateCreationMin){
            this.dateCreationMin = dateCreationMin;
            }




            }
