package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.SemanticRelationship;
import com.ird.faa.ws.rest.provided.vo.SemanticRelationshipVo;

@Component
public class SemanticRelationshipConverter extends AbstractConverter<SemanticRelationship,SemanticRelationshipVo>{


public  SemanticRelationshipConverter(){
init(true);
}

@Override
public SemanticRelationship toItem(SemanticRelationshipVo vo) {
if (vo == null) {
return null;
} else {
SemanticRelationship item = new SemanticRelationship();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getLibelle()))
        item.setLibelle(vo.getLibelle());
        if(StringUtil.isNotEmpty(vo.getCode()))
        item.setCode(vo.getCode());
        if(StringUtil.isNotEmpty(vo.getNiveauExactitude()))
        item.setNiveauExactitude(NumberUtil.toLong(vo.getNiveauExactitude()));
            if(vo.getArchive() != null)
            item.setArchive(vo.getArchive());
        if(StringUtil.isNotEmpty(vo.getDateArchivage()))
        item.setDateArchivage(DateUtil.parse(vo.getDateArchivage()));
        if(StringUtil.isNotEmpty(vo.getDateCreation()))
        item.setDateCreation(DateUtil.parse(vo.getDateCreation()));


return item;
}
}

@Override
public SemanticRelationshipVo toVo(SemanticRelationship item) {
if (item == null) {
return null;
} else {
SemanticRelationshipVo vo = new SemanticRelationshipVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getLibelle()))
        vo.setLibelle(item.getLibelle());

        if(StringUtil.isNotEmpty(item.getCode()))
        vo.setCode(item.getCode());

        if(item.getNiveauExactitude()!=null)
        vo.setNiveauExactitude(NumberUtil.toString(item.getNiveauExactitude()));

        if(item.getArchive()!=null)
        vo.setArchive(item.getArchive());
        if(item.getDateArchivage()!=null)
        vo.setDateArchivage(DateUtil.formateDate(item.getDateArchivage()));
        if(item.getDateCreation()!=null)
        vo.setDateCreation(DateUtil.formateDate(item.getDateCreation()));

return vo;
}
}

public void init(Boolean value) {
}

















}
