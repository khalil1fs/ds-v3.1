package com.ird.faa.service.admin.impl;

import java.util.List;
    import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.SemanticRelationship;
import com.ird.faa.dao.SemanticRelationshipDao;
import com.ird.faa.service.admin.facade.SemanticRelationshipAdminService;

import com.ird.faa.ws.rest.provided.vo.SemanticRelationshipVo;
import com.ird.faa.service.util.*;

    import com.ird.faa.service.core.facade.ArchivableService;
import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class SemanticRelationshipAdminServiceImpl extends AbstractServiceImpl<SemanticRelationship> implements SemanticRelationshipAdminService {

@Autowired
private SemanticRelationshipDao semanticRelationshipDao;

    @Autowired
    private ArchivableService<SemanticRelationship> archivableService;


@Autowired
private EntityManager entityManager;


@Override
public List<SemanticRelationship> findAll(){
        String query = "SELECT o FROM SemanticRelationship o where 1=1 ";
        query+= " ORDER BY o.niveauExactitude";
        return entityManager.createQuery(query).getResultList();
}
    @Override
    public SemanticRelationship findByCode(String code){
    if( code==null) return null;
    return semanticRelationshipDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return semanticRelationshipDao.deleteByCode(code);
    }
    @Override
    public SemanticRelationship findByIdOrCode(SemanticRelationship semanticRelationship){
    SemanticRelationship resultat=null;
    if(semanticRelationship != null){
    if(StringUtil.isNotEmpty(semanticRelationship.getId())){
    resultat= semanticRelationshipDao.getOne(semanticRelationship.getId());
    }else if(StringUtil.isNotEmpty(semanticRelationship.getCode())) {
    resultat= semanticRelationshipDao.findByCode(semanticRelationship.getCode());
    }
    }
    return resultat;
    }

@Override
public SemanticRelationship findById(Long id){
if(id==null) return null;
return semanticRelationshipDao.getOne(id);
}

@Override
public SemanticRelationship findByIdWithAssociatedList(Long id){
    return findById(id);
}
    @Override
    public SemanticRelationship archiver(SemanticRelationship semanticRelationship) {
    if (semanticRelationship.getArchive() == null) {
    semanticRelationship.setArchive(false);
    }
    semanticRelationship.setArchive(true);
    semanticRelationship.setDateArchivage(new Date());
    semanticRelationshipDao.save(semanticRelationship);
    return semanticRelationship;

    }

    @Override
    public SemanticRelationship desarchiver(SemanticRelationship semanticRelationship) {
    if (semanticRelationship.getArchive() == null) {
    semanticRelationship.setArchive(false);
    }
    semanticRelationship.setArchive(false);
    semanticRelationship.setDateArchivage(null);
    semanticRelationshipDao.save(semanticRelationship);
    return semanticRelationship;
    }




@Transactional
public int deleteById(Long id){
int res=0;
if(semanticRelationshipDao.findById(id).isPresent())  {
semanticRelationshipDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public SemanticRelationship update(SemanticRelationship semanticRelationship){
SemanticRelationship foundedSemanticRelationship = findById(semanticRelationship.getId());
if(foundedSemanticRelationship==null) return null;
else{
    archivableService.prepare(semanticRelationship);
return  semanticRelationshipDao.save(semanticRelationship);
}
}
    private void prepareSave(SemanticRelationship semanticRelationship){
        semanticRelationship.setDateCreation(new Date());
                    if(semanticRelationship.getArchive() == null)
                semanticRelationship.setArchive(false);




    }

@Override
public SemanticRelationship save (SemanticRelationship semanticRelationship){
    prepareSave(semanticRelationship);

    SemanticRelationship result =null;
    SemanticRelationship foundedSemanticRelationship = findByCode(semanticRelationship.getCode());
    if(foundedSemanticRelationship == null){




    SemanticRelationship savedSemanticRelationship = semanticRelationshipDao.save(semanticRelationship);

    result = savedSemanticRelationship;
    }

    return result;
}

@Override
public List<SemanticRelationship> save(List<SemanticRelationship> semanticRelationships){
List<SemanticRelationship> list = new ArrayList<>();
for(SemanticRelationship semanticRelationship: semanticRelationships){
list.add(save(semanticRelationship));
}
return list;
}



@Override
@Transactional
public int delete(SemanticRelationship semanticRelationship){
    if(semanticRelationship.getCode()==null) return -1;

    SemanticRelationship foundedSemanticRelationship = findByCode(semanticRelationship.getCode());
    if(foundedSemanticRelationship==null) return -1;
semanticRelationshipDao.delete(foundedSemanticRelationship);
return 1;
}


public List<SemanticRelationship> findByCriteria(SemanticRelationshipVo semanticRelationshipVo){

String query = "SELECT o FROM SemanticRelationship o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",semanticRelationshipVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",semanticRelationshipVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "code","LIKE",semanticRelationshipVo.getCode());
            query += SearchUtil.addConstraint( "o", "niveauExactitude","=",semanticRelationshipVo.getNiveauExactitude());
            query += SearchUtil.addConstraint( "o", "archive","=",semanticRelationshipVo.getArchive());
        query += SearchUtil.addConstraintDate( "o", "dateArchivage","=",semanticRelationshipVo.getDateArchivage());
        query += SearchUtil.addConstraintDate( "o", "dateCreation","=",semanticRelationshipVo.getDateCreation());
            query += SearchUtil.addConstraintMinMax("o","niveauExactitude",semanticRelationshipVo.getNiveauExactitudeMin(),semanticRelationshipVo.getNiveauExactitudeMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateArchivage",semanticRelationshipVo.getDateArchivageMin(),semanticRelationshipVo.getDateArchivageMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateCreation",semanticRelationshipVo.getDateCreationMin(),semanticRelationshipVo.getDateCreationMax());
    query+= " ORDER BY o.niveauExactitude";
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<SemanticRelationship> semanticRelationships){
if(ListUtil.isNotEmpty(semanticRelationships)){
semanticRelationships.forEach(e->semanticRelationshipDao.delete(e));
}
}
@Override
public void update(List<SemanticRelationship> semanticRelationships){
if(ListUtil.isNotEmpty(semanticRelationships)){
semanticRelationships.forEach(e->semanticRelationshipDao.save(e));
}
}





    }
