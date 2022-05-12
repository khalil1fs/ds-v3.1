//package  com.ird.faa.ws.rest.provided.converter;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import com.ird.faa.service.util.*;
//
//
////import com.ird.faa.bean.DisciplineScientifiqueEr;
////import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueErcVo;
//
//@Component
//public class DisciplineScientifiqueErcParentConverter extends AbstractConverter<DisciplineScientifiqueEr,DisciplineScientifiqueErcVo>{
//
//
//public  DisciplineScientifiqueErcParentConverter(){
//init(true);
//}
//
//@Override
//public DisciplineScientifiqueEr toItem(DisciplineScientifiqueErcVo vo) {
//if (vo == null) {
//return null;
//} else {
//DisciplineScientifiqueEr item = new DisciplineScientifiqueEr();
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
//public DisciplineScientifiqueErcVo toVo(DisciplineScientifiqueEr item) {
//if (item == null) {
//return null;
//} else {
//DisciplineScientifiqueErcVo vo = new DisciplineScientifiqueErcVo();
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
