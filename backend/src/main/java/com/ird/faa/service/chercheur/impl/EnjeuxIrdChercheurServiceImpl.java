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
import com.ird.faa.bean.EnjeuxIrd;
import com.ird.faa.dao.EnjeuxIrdDao;
import com.ird.faa.service.chercheur.facade.EnjeuxIrdChercheurService;

import com.ird.faa.ws.rest.provided.vo.EnjeuxIrdVo;
import com.ird.faa.service.util.*;

    import com.ird.faa.service.core.facade.ArchivableService;
import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class EnjeuxIrdChercheurServiceImpl extends AbstractServiceImpl<EnjeuxIrd> implements EnjeuxIrdChercheurService {

@Autowired
private EnjeuxIrdDao enjeuxIrdDao;

    @Autowired
    private ArchivableService<EnjeuxIrd> archivableService;


@Autowired
private EntityManager entityManager;


@Override
public List<EnjeuxIrd> findAll(){
    List<EnjeuxIrd> result= new ArrayList();
    result.addAll(findAllNonArchive());
    result.addAll(findAllByOwner());
    return result;
}
    @Override
    public EnjeuxIrd findByCode(String code){
    if( code==null) return null;
    return enjeuxIrdDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return enjeuxIrdDao.deleteByCode(code);
    }
    @Override
    public EnjeuxIrd findByIdOrCode(EnjeuxIrd enjeuxIrd){
    EnjeuxIrd resultat=null;
    if(enjeuxIrd != null){
    if(StringUtil.isNotEmpty(enjeuxIrd.getId())){
    resultat= enjeuxIrdDao.getOne(enjeuxIrd.getId());
    }else if(StringUtil.isNotEmpty(enjeuxIrd.getCode())) {
    resultat= enjeuxIrdDao.findByCode(enjeuxIrd.getCode());
    }
    }
    return resultat;
    }

@Override
public EnjeuxIrd findById(Long id){
if(id==null) return null;
return enjeuxIrdDao.getOne(id);
}

@Override
public EnjeuxIrd findByIdWithAssociatedList(Long id){
    return findById(id);
}

    public List<EnjeuxIrd> findByUsername(String username){
     return enjeuxIrdDao.findByUsername(username);
    }


@Transactional
public int deleteById(Long id){
int res=0;
if(enjeuxIrdDao.findById(id).isPresent())  {
enjeuxIrdDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public EnjeuxIrd update(EnjeuxIrd enjeuxIrd){
EnjeuxIrd foundedEnjeuxIrd = findById(enjeuxIrd.getId());
if(foundedEnjeuxIrd==null) return null;
else{
    archivableService.prepare(enjeuxIrd);
return  enjeuxIrdDao.save(enjeuxIrd);
}
}
    private void prepareSave(EnjeuxIrd enjeuxIrd){
        enjeuxIrd.setDateCreation(new Date());
                    if(enjeuxIrd.getArchive() == null)
                enjeuxIrd.setArchive(false);
                    if(enjeuxIrd.getAdmin() == null)
                enjeuxIrd.setAdmin(false);
                    if(enjeuxIrd.getVisible() == null)
                enjeuxIrd.setVisible(false);


            enjeuxIrd.setAdmin(false);
            enjeuxIrd.setVisible(false);
            User currentUser = SecurityUtil.getCurrentUser();
            if (currentUser != null && StringUtil.isNotEmpty(currentUser.getUsername())){
            enjeuxIrd.setUsername(currentUser.getUsername());
            }


    }

@Override
public EnjeuxIrd save (EnjeuxIrd enjeuxIrd){
    prepareSave(enjeuxIrd);

    EnjeuxIrd result =null;
    EnjeuxIrd foundedEnjeuxIrd = findByCode(enjeuxIrd.getCode());
    if(foundedEnjeuxIrd == null){




    EnjeuxIrd savedEnjeuxIrd = enjeuxIrdDao.save(enjeuxIrd);

    result = savedEnjeuxIrd;
    }

    return result;
}

@Override
public List<EnjeuxIrd> save(List<EnjeuxIrd> enjeuxIrds){
List<EnjeuxIrd> list = new ArrayList<>();
for(EnjeuxIrd enjeuxIrd: enjeuxIrds){
list.add(save(enjeuxIrd));
}
return list;
}



@Override
@Transactional
public int delete(EnjeuxIrd enjeuxIrd){
    if(enjeuxIrd.getCode()==null) return -1;

    EnjeuxIrd foundedEnjeuxIrd = findByCode(enjeuxIrd.getCode());
    if(foundedEnjeuxIrd==null) return -1;
enjeuxIrdDao.delete(foundedEnjeuxIrd);
return 1;
}


public List<EnjeuxIrd> findByCriteria(EnjeuxIrdVo enjeuxIrdVo){

String query = "SELECT o FROM EnjeuxIrd o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",enjeuxIrdVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",enjeuxIrdVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "code","LIKE",enjeuxIrdVo.getCode());
            query += SearchUtil.addConstraint( "o", "description","LIKE",enjeuxIrdVo.getDescription());
            query += SearchUtil.addConstraint( "o", "archive","=",enjeuxIrdVo.getArchive());
        query += SearchUtil.addConstraintDate( "o", "dateArchivage","=",enjeuxIrdVo.getDateArchivage());
        query += SearchUtil.addConstraintDate( "o", "dateCreation","=",enjeuxIrdVo.getDateCreation());
            query += SearchUtil.addConstraint( "o", "admin","=",enjeuxIrdVo.getAdmin());
            query += SearchUtil.addConstraint( "o", "username","LIKE",enjeuxIrdVo.getUsername());
            query += SearchUtil.addConstraint( "o", "visible","=",enjeuxIrdVo.getVisible());
            query += SearchUtil.addConstraintMinMaxDate("o","dateArchivage",enjeuxIrdVo.getDateArchivageMin(),enjeuxIrdVo.getDateArchivageMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateCreation",enjeuxIrdVo.getDateCreationMin(),enjeuxIrdVo.getDateCreationMax());
    query+= " ORDER BY o.code";
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<EnjeuxIrd> enjeuxIrds){
if(ListUtil.isNotEmpty(enjeuxIrds)){
enjeuxIrds.forEach(e->enjeuxIrdDao.delete(e));
}
}
@Override
public void update(List<EnjeuxIrd> enjeuxIrds){
if(ListUtil.isNotEmpty(enjeuxIrds)){
enjeuxIrds.forEach(e->enjeuxIrdDao.save(e));
}
}




        public List<EnjeuxIrd> findAllNonArchive(){
        String query = "SELECT o FROM EnjeuxIrd o  WHERE o.archive != true AND o.visible = true";
            query+= " ORDER BY o.code";
        return entityManager.createQuery(query).getResultList();
        }

        public List<EnjeuxIrd> findAllByOwner(){
        List<EnjeuxIrd> result= new ArrayList();
        User currentUser = SecurityUtil.getCurrentUser();
        if (currentUser != null && StringUtil.isNotEmpty(currentUser.getUsername())){
        String query = "SELECT o FROM EnjeuxIrd o  WHERE o.archive != true AND o.visible = false AND o.username = '"+ currentUser.getUsername()+"'";
            query+= " ORDER BY o.code";
        result = entityManager.createQuery(query).getResultList();
        }
        return result;
        }



    }
