//package com.ird.faa.service.admin.impl;
//
//import java.util.List;
//    import java.util.Date;
//
//import java.util.ArrayList;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.stereotype.Service;
//import javax.persistence.EntityManager;
//import com.ird.faa.bean.DisciplineScientifiqueErcParent;
//import com.ird.faa.dao.DisciplineScientifiqueErcParentDao;
//import com.ird.faa.service.admin.facade.DisciplineScientifiqueErcParentAdminService;
//
//import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueErcParentVo;
//import com.ird.faa.service.util.*;
//
//    import com.ird.faa.service.core.facade.ArchivableService;
//import com.ird.faa.service.core.impl.AbstractServiceImpl;
//
//@Service
//public class DisciplineScientifiqueErcParentAdminServiceImpl extends AbstractServiceImpl<DisciplineScientifiqueErcParent> implements DisciplineScientifiqueErcParentAdminService {
//
//@Autowired
//private DisciplineScientifiqueErcParentDao disciplineScientifiqueErcParentDao;
//
//    @Autowired
//    private ArchivableService<DisciplineScientifiqueErcParent> archivableService;
//
//
//@Autowired
//private EntityManager entityManager;
//
//
//@Override
//public List<DisciplineScientifiqueErcParent> findAll(){
//        String query = "SELECT o FROM DisciplineScientifiqueErcParent o where 1=1 ";
//        query+= " ORDER BY o.code";
//        return entityManager.createQuery(query).getResultList();
//}
//    @Override
//    public DisciplineScientifiqueErcParent findByCode(String code){
//    if( code==null) return null;
//    return disciplineScientifiqueErcParentDao.findByCode(code);
//    }
//
//    @Override
//    @Transactional
//    public int deleteByCode(String  code) {
//    return disciplineScientifiqueErcParentDao.deleteByCode(code);
//    }
//    @Override
//    public DisciplineScientifiqueErcParent findByIdOrCode(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
//    DisciplineScientifiqueErcParent resultat=null;
//    if(disciplineScientifiqueErcParent != null){
//    if(StringUtil.isNotEmpty(disciplineScientifiqueErcParent.getId())){
//    resultat= disciplineScientifiqueErcParentDao.getOne(disciplineScientifiqueErcParent.getId());
//    }else if(StringUtil.isNotEmpty(disciplineScientifiqueErcParent.getCode())) {
//    resultat= disciplineScientifiqueErcParentDao.findByCode(disciplineScientifiqueErcParent.getCode());
//    }
//    }
//    return resultat;
//    }
//
//@Override
//public DisciplineScientifiqueErcParent findById(Long id){
//if(id==null) return null;
//return disciplineScientifiqueErcParentDao.getOne(id);
//}
//
//@Override
//public DisciplineScientifiqueErcParent findByIdWithAssociatedList(Long id){
//    return findById(id);
//}
//    @Override
//    public DisciplineScientifiqueErcParent archiver(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent) {
//    if (disciplineScientifiqueErcParent.getArchive() == null) {
//    disciplineScientifiqueErcParent.setArchive(false);
//    }
//    disciplineScientifiqueErcParent.setArchive(true);
//    disciplineScientifiqueErcParent.setDateArchivage(new Date());
//    disciplineScientifiqueErcParentDao.save(disciplineScientifiqueErcParent);
//    return disciplineScientifiqueErcParent;
//
//    }
//
//    @Override
//    public DisciplineScientifiqueErcParent desarchiver(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent) {
//    if (disciplineScientifiqueErcParent.getArchive() == null) {
//    disciplineScientifiqueErcParent.setArchive(false);
//    }
//    disciplineScientifiqueErcParent.setArchive(false);
//    disciplineScientifiqueErcParent.setDateArchivage(null);
//    disciplineScientifiqueErcParentDao.save(disciplineScientifiqueErcParent);
//    return disciplineScientifiqueErcParent;
//    }
//
//
//
//
//@Transactional
//public int deleteById(Long id){
//int res=0;
//if(disciplineScientifiqueErcParentDao.findById(id).isPresent())  {
//disciplineScientifiqueErcParentDao.deleteById(id);
//res = 1;
//}
//return res;
//}
//
//
//@Override
//public DisciplineScientifiqueErcParent update(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
//DisciplineScientifiqueErcParent foundedDisciplineScientifiqueErcParent = findById(disciplineScientifiqueErcParent.getId());
//if(foundedDisciplineScientifiqueErcParent==null) return null;
//else{
//    archivableService.prepare(disciplineScientifiqueErcParent);
//return  disciplineScientifiqueErcParentDao.save(disciplineScientifiqueErcParent);
//}
//}
//    private void prepareSave(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
//        disciplineScientifiqueErcParent.setDateCreation(new Date());
//                    if(disciplineScientifiqueErcParent.getArchive() == null)
//                disciplineScientifiqueErcParent.setArchive(false);
//
//
//
//
//    }
//
//@Override
//public DisciplineScientifiqueErcParent save (DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
//    prepareSave(disciplineScientifiqueErcParent);
//
//    DisciplineScientifiqueErcParent result =null;
//    DisciplineScientifiqueErcParent foundedDisciplineScientifiqueErcParent = findByCode(disciplineScientifiqueErcParent.getCode());
//    if(foundedDisciplineScientifiqueErcParent == null){
//
//
//
//
//    DisciplineScientifiqueErcParent savedDisciplineScientifiqueErcParent = disciplineScientifiqueErcParentDao.save(disciplineScientifiqueErcParent);
//
//    result = savedDisciplineScientifiqueErcParent;
//    }
//
//    return result;
//}
//
//@Override
//public List<DisciplineScientifiqueErcParent> save(List<DisciplineScientifiqueErcParent> disciplineScientifiqueErcParents){
//List<DisciplineScientifiqueErcParent> list = new ArrayList<>();
//for(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent: disciplineScientifiqueErcParents){
//list.add(save(disciplineScientifiqueErcParent));
//}
//return list;
//}
//
//
//
//@Override
//@Transactional
//public int delete(DisciplineScientifiqueErcParent disciplineScientifiqueErcParent){
//    if(disciplineScientifiqueErcParent.getCode()==null) return -1;
//
//    DisciplineScientifiqueErcParent foundedDisciplineScientifiqueErcParent = findByCode(disciplineScientifiqueErcParent.getCode());
//    if(foundedDisciplineScientifiqueErcParent==null) return -1;
//disciplineScientifiqueErcParentDao.delete(foundedDisciplineScientifiqueErcParent);
//return 1;
//}
//
//
//public List<DisciplineScientifiqueErcParent> findByCriteria(DisciplineScientifiqueErcParentVo disciplineScientifiqueErcParentVo){
//
//String query = "SELECT o FROM DisciplineScientifiqueErcParent o where 1=1 ";
//
//            query += SearchUtil.addConstraint( "o", "id","=",disciplineScientifiqueErcParentVo.getId());
//            query += SearchUtil.addConstraint( "o", "libelleFr","LIKE",disciplineScientifiqueErcParentVo.getLibelleFr());
//            query += SearchUtil.addConstraint( "o", "libelleEng","LIKE",disciplineScientifiqueErcParentVo.getLibelleEng());
//            query += SearchUtil.addConstraint( "o", "code","LIKE",disciplineScientifiqueErcParentVo.getCode());
//            query += SearchUtil.addConstraint( "o", "niveau","=",disciplineScientifiqueErcParentVo.getNiveau());
//            query += SearchUtil.addConstraint( "o", "archive","=",disciplineScientifiqueErcParentVo.getArchive());
//        query += SearchUtil.addConstraintDate( "o", "dateArchivage","=",disciplineScientifiqueErcParentVo.getDateArchivage());
//        query += SearchUtil.addConstraintDate( "o", "dateCreation","=",disciplineScientifiqueErcParentVo.getDateCreation());
//            query += SearchUtil.addConstraintMinMax("o","niveau",disciplineScientifiqueErcParentVo.getNiveauMin(),disciplineScientifiqueErcParentVo.getNiveauMax());
//            query += SearchUtil.addConstraintMinMaxDate("o","dateArchivage",disciplineScientifiqueErcParentVo.getDateArchivageMin(),disciplineScientifiqueErcParentVo.getDateArchivageMax());
//            query += SearchUtil.addConstraintMinMaxDate("o","dateCreation",disciplineScientifiqueErcParentVo.getDateCreationMin(),disciplineScientifiqueErcParentVo.getDateCreationMax());
//    query+= " ORDER BY o.code";
//return entityManager.createQuery(query).getResultList();
//}
//
//
//@Override
//@Transactional
//public void delete(List<DisciplineScientifiqueErcParent> disciplineScientifiqueErcParents){
//if(ListUtil.isNotEmpty(disciplineScientifiqueErcParents)){
//disciplineScientifiqueErcParents.forEach(e->disciplineScientifiqueErcParentDao.delete(e));
//}
//}
//@Override
//public void update(List<DisciplineScientifiqueErcParent> disciplineScientifiqueErcParents){
//if(ListUtil.isNotEmpty(disciplineScientifiqueErcParents)){
//disciplineScientifiqueErcParents.forEach(e->disciplineScientifiqueErcParentDao.save(e));
//}
//}
//
//
//
//
//
//    }
