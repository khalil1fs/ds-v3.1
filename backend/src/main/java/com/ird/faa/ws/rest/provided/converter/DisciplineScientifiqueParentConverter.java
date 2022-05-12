//package  com.ird.faa.ws.rest.provided.converter;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import com.ird.faa.service.util.*;
//
//
//import com.ird.faa.bean.DisciplineScientifiqueParent;
//import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueParentVo;
//
//@Component
//public class DisciplineScientifiqueParentConverter extends AbstractConverter<DisciplineScientifiqueParent,DisciplineScientifiqueParentVo>{
//
//
//public  DisciplineScientifiqueParentConverter(){
//init(true);
//}
//
//@Override
//public DisciplineScientifiqueParent toItem(DisciplineScientifiqueParentVo vo) {
//if (vo == null) {
//return null;
//} else {
//DisciplineScientifiqueParent item = new DisciplineScientifiqueParent();
//        if(StringUtil.isNotEmpty(vo.getId()))
//        item.setId(NumberUtil.toLong(vo.getId()));
//        if(StringUtil.isNotEmpty(vo.getLibelleFr()))
//        item.setLibelleFr(vo.getLibelleFr());
//        if(StringUtil.isNotEmpty(vo.getLibelleEng()))
//        item.setLibelleEng(vo.getLibelleEng());
//        if(StringUtil.isNotEmpty(vo.getCode()))
//        item.setCode(vo.getCode());
//        if(StringUtil.isNotEmpty(vo.getNiveau()))
//        item.setNiveau(NumberUtil.toLong(vo.getNiveau()));
//            if(vo.getArchive() != null)
//            item.setArchive(vo.getArchive());
//        if(StringUtil.isNotEmpty(vo.getDateArchivage()))
//        item.setDateArchivage(DateUtil.parse(vo.getDateArchivage()));
//        if(StringUtil.isNotEmpty(vo.getDateCreation()))
//        item.setDateCreation(DateUtil.parse(vo.getDateCreation()));
//
//
//return item;
//}
//}
//
//@Override
//public DisciplineScientifiqueParentVo toVo(DisciplineScientifiqueParent item) {
//if (item == null) {
//return null;
//} else {
//DisciplineScientifiqueParentVo vo = new DisciplineScientifiqueParentVo();
//        if(item.getId()!=null)
//        vo.setId(NumberUtil.toString(item.getId()));
//
//        if(StringUtil.isNotEmpty(item.getLibelleFr()))
//        vo.setLibelleFr(item.getLibelleFr());
//
//        if(StringUtil.isNotEmpty(item.getLibelleEng()))
//        vo.setLibelleEng(item.getLibelleEng());
//
//        if(StringUtil.isNotEmpty(item.getCode()))
//        vo.setCode(item.getCode());
//
//        if(item.getNiveau()!=null)
//        vo.setNiveau(NumberUtil.toString(item.getNiveau()));
//
//        if(item.getArchive()!=null)
//        vo.setArchive(item.getArchive());
//        if(item.getDateArchivage()!=null)
//        vo.setDateArchivage(DateUtil.formateDate(item.getDateArchivage()));
//        if(item.getDateCreation()!=null)
//        vo.setDateCreation(DateUtil.formateDate(item.getDateCreation()));
//
//return vo;
//}
//}
//
//public void init(Boolean value) {
//}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//}
