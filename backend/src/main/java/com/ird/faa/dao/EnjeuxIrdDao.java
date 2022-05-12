package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.EnjeuxIrd;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface EnjeuxIrdDao extends JpaRepository<EnjeuxIrd,Long> {


    public List<EnjeuxIrd> findByUsername(String username);

    @Query("SELECT item FROM EnjeuxIrd item ORDER BY item.code ASC")
    List<EnjeuxIrd> findAll();

    EnjeuxIrd findByCode(String code);

    int deleteByCode(String code);



}
