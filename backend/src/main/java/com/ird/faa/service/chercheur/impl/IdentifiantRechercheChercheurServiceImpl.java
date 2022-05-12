package com.ird.faa.service.chercheur.impl;

import java.util.List;
    import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
    import com.ird.faa.service.util.StringUtil;
    import com.ird.faa.security.common.SecurityUtil;
    import com.ird.faa.security.bean.User;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.IdentifiantRecherche;
import com.ird.faa.dao.IdentifiantRechercheDao;
import com.ird.faa.service.chercheur.facade.IdentifiantRechercheChercheurService;

import com.ird.faa.ws.rest.provided.vo.IdentifiantRechercheVo;
import com.ird.faa.service.util.*;

    import com.ird.faa.service.core.facade.ArchivableService;
import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class IdentifiantRechercheChercheurServiceImpl extends AbstractServiceImpl<IdentifiantRecherche> implements IdentifiantRechercheChercheurService {

@Autowired
private IdentifiantRechercheDao identifiantRechercheDao;

    @Autowired
    private ArchivableService<IdentifiantRecherche> archivableService;


@Autowired
private EntityManager entityManager;


@Override
public List<IdentifiantRecherche> findAll(){
    List<IdentifiantRecherche> result= new ArrayList();
    result.addAll(findAllNonArchive());
    result.addAll(findAllByOwner());
    return result;
}
    @Override
    public IdentifiantRecherche findByCode(String code){
    if( code==null) return null;
    return identifiantRechercheDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return identifiantRechercheDao.deleteByCode(code);
    }
    @Override
    public IdentifiantRecherche findByIdOrCode(IdentifiantRecherche identifiantRecherche){
    IdentifiantRecherche resultat=null;
    if(identifiantRecherche != null){
    if(StringUtil.isNotEmpty(identifiantRecherche.getId())){
    resultat= identifiantRechercheDao.getOne(identifiantRecherche.getId());
    }else if(StringUtil.isNotEmpty(identifiantRecherche.getCode())) {
    resultat= identifiantRechercheDao.findByCode(identifiantRecherche.getCode());
    }
    }
    return resultat;
    }

@Override
public IdentifiantRecherche findById(Long id){
if(id==null) return null;
return identifiantRechercheDao.getOne(id);
}

@Override
public IdentifiantRecherche findByIdWithAssociatedList(Long id){
    return findById(id);
}



@Transactional
public int deleteById(Long id){
int res=0;
if(identifiantRechercheDao.findById(id).isPresent())  {
identifiantRechercheDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public IdentifiantRecherche update(IdentifiantRecherche identifiantRecherche){
IdentifiantRecherche foundedIdentifiantRecherche = findById(identifiantRecherche.getId());
if(foundedIdentifiantRecherche==null) return null;
else{
    archivableService.prepare(identifiantRecherche);
return  identifiantRechercheDao.save(identifiantRecherche);
}
}
    private void prepareSave(IdentifiantRecherche identifiantRecherche){
        identifiantRecherche.setDateCreation(new Date());
                    if(identifiantRecherche.getArchive() == null)
                identifiantRecherche.setArchive(false);




    }

@Override
public IdentifiantRecherche save (IdentifiantRecherche identifiantRecherche){
    prepareSave(identifiantRecherche);

    IdentifiantRecherche result =null;
    IdentifiantRecherche foundedIdentifiantRecherche = findByCode(identifiantRecherche.getCode());
    if(foundedIdentifiantRecherche == null){




    IdentifiantRecherche savedIdentifiantRecherche = identifiantRechercheDao.save(identifiantRecherche);

    result = savedIdentifiantRecherche;
    }

    return result;
}

@Override
public List<IdentifiantRecherche> save(List<IdentifiantRecherche> identifiantRecherches){
List<IdentifiantRecherche> list = new ArrayList<>();
for(IdentifiantRecherche identifiantRecherche: identifiantRecherches){
list.add(save(identifiantRecherche));
}
return list;
}



@Override
@Transactional
public int delete(IdentifiantRecherche identifiantRecherche){
    if(identifiantRecherche.getCode()==null) return -1;

    IdentifiantRecherche foundedIdentifiantRecherche = findByCode(identifiantRecherche.getCode());
    if(foundedIdentifiantRecherche==null) return -1;
identifiantRechercheDao.delete(foundedIdentifiantRecherche);
return 1;
}


public List<IdentifiantRecherche> findByCriteria(IdentifiantRechercheVo identifiantRechercheVo){

String query = "SELECT o FROM IdentifiantRecherche o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",identifiantRechercheVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",identifiantRechercheVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "code","LIKE",identifiantRechercheVo.getCode());
            query += SearchUtil.addConstraint( "o", "description","LIKE",identifiantRechercheVo.getDescription());
            query += SearchUtil.addConstraint( "o", "archive","=",identifiantRechercheVo.getArchive());
        query += SearchUtil.addConstraintDate( "o", "dateArchivage","=",identifiantRechercheVo.getDateArchivage());
        query += SearchUtil.addConstraintDate( "o", "dateCreation","=",identifiantRechercheVo.getDateCreation());
            query += SearchUtil.addConstraintMinMaxDate("o","dateArchivage",identifiantRechercheVo.getDateArchivageMin(),identifiantRechercheVo.getDateArchivageMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateCreation",identifiantRechercheVo.getDateCreationMin(),identifiantRechercheVo.getDateCreationMax());
    query+= " ORDER BY o.code";
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<IdentifiantRecherche> identifiantRecherches){
if(ListUtil.isNotEmpty(identifiantRecherches)){
identifiantRecherches.forEach(e->identifiantRechercheDao.delete(e));
}
}
@Override
public void update(List<IdentifiantRecherche> identifiantRecherches){
if(ListUtil.isNotEmpty(identifiantRecherches)){
identifiantRecherches.forEach(e->identifiantRechercheDao.save(e));
}
}




        public List<IdentifiantRecherche> findAllNonArchive(){
        String query = "SELECT o FROM IdentifiantRecherche o  WHERE o.archive != true AND o.visible = true";
            query+= " ORDER BY o.code";
        return entityManager.createQuery(query).getResultList();
        }

        public List<IdentifiantRecherche> findAllByOwner(){
        List<IdentifiantRecherche> result= new ArrayList();
        User currentUser = SecurityUtil.getCurrentUser();
        if (currentUser != null && StringUtil.isNotEmpty(currentUser.getUsername())){
        String query = "SELECT o FROM IdentifiantRecherche o  WHERE o.archive != true AND o.visible = false AND o.username = '"+ currentUser.getUsername()+"'";
            query+= " ORDER BY o.code";
        result = entityManager.createQuery(query).getResultList();
        }
        return result;
        }



    }
