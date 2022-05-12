//package com.ird.faa.service.chercheur.impl;
//
//import java.util.List;
//    import java.util.Date;
//
//import java.util.ArrayList;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.transaction.annotation.Transactional;
//    import com.ird.faa.service.util.StringUtil;
//    import com.ird.faa.security.common.SecurityUtil;
//    import com.ird.faa.security.bean.User;
//import org.springframework.stereotype.Service;
//import javax.persistence.EntityManager;
//import com.ird.faa.bean.DisciplineScientifiqueParent;
//import com.ird.faa.dao.DisciplineScientifiqueParentDao;
//import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueParentChercheurService;
//
//import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueParentVo;
//import com.ird.faa.service.util.*;
//
//    import com.ird.faa.service.core.facade.ArchivableService;
//import com.ird.faa.service.core.impl.AbstractServiceImpl;
//
//@Service
//public class DisciplineScientifiqueParentChercheurServiceImpl extends AbstractServiceImpl<DisciplineScientifiqueParent> implements DisciplineScientifiqueParentChercheurService {
//
//@Autowired
//private DisciplineScientifiqueParentDao disciplineScientifiqueParentDao;
//
//    @Autowired
//    private ArchivableService<DisciplineScientifiqueParent> archivableService;
//
//
//@Autowired
//private EntityManager entityManager;
//
//
//@Override
//public List<DisciplineScientifiqueParent> findAll(){
//    List<DisciplineScientifiqueParent> result= new ArrayList();
//    result.addAll(findAllNonArchive());
//    result.addAll(findAllByOwner());
//    return result;
//}
//    @Override
//    public DisciplineScientifiqueParent findByCode(String code){
//    if( code==null) return null;
//    return disciplineScientifiqueParentDao.findByCode(code);
//    }
//
//    @Override
//    @Transactional
//    public int deleteByCode(String  code) {
//    return disciplineScientifiqueParentDao.deleteByCode(code);
//    }
//    @Override
//    public DisciplineScientifiqueParent findByIdOrCode(DisciplineScientifiqueParent disciplineScientifiqueParent){
//    DisciplineScientifiqueParent resultat=null;
//    if(disciplineScientifiqueParent != null){
//    if(StringUtil.isNotEmpty(disciplineScientifiqueParent.getId())){
//    resultat= disciplineScientifiqueParentDao.getOne(disciplineScientifiqueParent.getId());
//    }else if(StringUtil.isNotEmpty(disciplineScientifiqueParent.getCode())) {
//    resultat= disciplineScientifiqueParentDao.findByCode(disciplineScientifiqueParent.getCode());
//    }
//    }
//    return resultat;
//    }
//
//@Override
//public DisciplineScientifiqueParent findById(Long id){
//if(id==null) return null;
//return disciplineScientifiqueParentDao.getOne(id);
//}
//
//@Override
//public DisciplineScientifiqueParent findByIdWithAssociatedList(Long id){
//    return findById(id);
//}
//
//
//
//@Transactional
//public int deleteById(Long id){
//int res=0;
//if(disciplineScientifiqueParentDao.findById(id).isPresent())  {
//disciplineScientifiqueParentDao.deleteById(id);
//res = 1;
//}
//return res;
//}
//
//
//@Override
//public DisciplineScientifiqueParent update(DisciplineScientifiqueParent disciplineScientifiqueParent){
//DisciplineScientifiqueParent foundedDisciplineScientifiqueParent = findById(disciplineScientifiqueParent.getId());
//if(foundedDisciplineScientifiqueParent==null) return null;
//else{
//    archivableService.prepare(disciplineScientifiqueParent);
//return  disciplineScientifiqueParentDao.save(disciplineScientifiqueParent);
//}
//}
//    private void prepareSave(DisciplineScientifiqueParent disciplineScientifiqueParent){
//        disciplineScientifiqueParent.setDateCreation(new Date());
//                    if(disciplineScientifiqueParent.getArchive() == null)
//                disciplineScientifiqueParent.setArchive(false);
//
//
//
//
//    }
//
//@Override
//public DisciplineScientifiqueParent save (DisciplineScientifiqueParent disciplineScientifiqueParent){
//    prepareSave(disciplineScientifiqueParent);
//
//    DisciplineScientifiqueParent result =null;
//    DisciplineScientifiqueParent foundedDisciplineScientifiqueParent = findByCode(disciplineScientifiqueParent.getCode());
//    if(foundedDisciplineScientifiqueParent == null){
//
//
//
//
//    DisciplineScientifiqueParent savedDisciplineScientifiqueParent = disciplineScientifiqueParentDao.save(disciplineScientifiqueParent);
//
//    result = savedDisciplineScientifiqueParent;
//    }
//
//    return result;
//}
//
//@Override
//public List<DisciplineScientifiqueParent> save(List<DisciplineScientifiqueParent> disciplineScientifiqueParents){
//List<DisciplineScientifiqueParent> list = new ArrayList<>();
//for(DisciplineScientifiqueParent disciplineScientifiqueParent: disciplineScientifiqueParents){
//list.add(save(disciplineScientifiqueParent));
//}
//return list;
//}
//
//
//
//@Override
//@Transactional
//public int delete(DisciplineScientifiqueParent disciplineScientifiqueParent){
//    if(disciplineScientifiqueParent.getCode()==null) return -1;
//
//    DisciplineScientifiqueParent foundedDisciplineScientifiqueParent = findByCode(disciplineScientifiqueParent.getCode());
//    if(foundedDisciplineScientifiqueParent==null) return -1;
//disciplineScientifiqueParentDao.delete(foundedDisciplineScientifiqueParent);
//return 1;
//}
//
//
//public List<DisciplineScientifiqueParent> findByCriteria(DisciplineScientifiqueParentVo disciplineScientifiqueParentVo){
//
//String query = "SELECT o FROM DisciplineScientifiqueParent o where 1=1 ";
//
//            query += SearchUtil.addConstraint( "o", "id","=",disciplineScientifiqueParentVo.getId());
//            query += SearchUtil.addConstraint( "o", "libelleFr","LIKE",disciplineScientifiqueParentVo.getLibelleFr());
//            query += SearchUtil.addConstraint( "o", "libelleEng","LIKE",disciplineScientifiqueParentVo.getLibelleEng());
//            query += SearchUtil.addConstraint( "o", "code","LIKE",disciplineScientifiqueParentVo.getCode());
//            query += SearchUtil.addConstraint( "o", "niveau","=",disciplineScientifiqueParentVo.getNiveau());
//            query += SearchUtil.addConstraint( "o", "archive","=",disciplineScientifiqueParentVo.getArchive());
//        query += SearchUtil.addConstraintDate( "o", "dateArchivage","=",disciplineScientifiqueParentVo.getDateArchivage());
//        query += SearchUtil.addConstraintDate( "o", "dateCreation","=",disciplineScientifiqueParentVo.getDateCreation());
//            query += SearchUtil.addConstraintMinMax("o","niveau",disciplineScientifiqueParentVo.getNiveauMin(),disciplineScientifiqueParentVo.getNiveauMax());
//            query += SearchUtil.addConstraintMinMaxDate("o","dateArchivage",disciplineScientifiqueParentVo.getDateArchivageMin(),disciplineScientifiqueParentVo.getDateArchivageMax());
//            query += SearchUtil.addConstraintMinMaxDate("o","dateCreation",disciplineScientifiqueParentVo.getDateCreationMin(),disciplineScientifiqueParentVo.getDateCreationMax());
//    query+= " ORDER BY o.code";
//return entityManager.createQuery(query).getResultList();
//}
//
//
//@Override
//@Transactional
//public void delete(List<DisciplineScientifiqueParent> disciplineScientifiqueParents){
//if(ListUtil.isNotEmpty(disciplineScientifiqueParents)){
//disciplineScientifiqueParents.forEach(e->disciplineScientifiqueParentDao.delete(e));
//}
//}
//@Override
//public void update(List<DisciplineScientifiqueParent> disciplineScientifiqueParents){
//if(ListUtil.isNotEmpty(disciplineScientifiqueParents)){
//disciplineScientifiqueParents.forEach(e->disciplineScientifiqueParentDao.save(e));
//}
//}
//
//
//
//
//        public List<DisciplineScientifiqueParent> findAllNonArchive(){
//        String query = "SELECT o FROM DisciplineScientifiqueParent o  WHERE o.archive != true AND o.visible = true";
//            query+= " ORDER BY o.code";
//        return entityManager.createQuery(query).getResultList();
//        }
//
//        public List<DisciplineScientifiqueParent> findAllByOwner(){
//        List<DisciplineScientifiqueParent> result= new ArrayList();
//        User currentUser = SecurityUtil.getCurrentUser();
//        if (currentUser != null && StringUtil.isNotEmpty(currentUser.getUsername())){
//        String query = "SELECT o FROM DisciplineScientifiqueParent o  WHERE o.archive != true AND o.visible = false AND o.username = '"+ currentUser.getUsername()+"'";
//            query+= " ORDER BY o.code";
//        result = entityManager.createQuery(query).getResultList();
//        }
//        return result;
//        }
//
//
//
//    }
