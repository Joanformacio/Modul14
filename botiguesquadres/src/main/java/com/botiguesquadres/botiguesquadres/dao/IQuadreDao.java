/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.botiguesquadres.botiguesquadres.dao;

import com.botiguesquadres.botiguesquadres.bean.Botiga;
import com.botiguesquadres.botiguesquadres.bean.Quadre;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Joan
 */
public interface IQuadreDao extends JpaRepository<Quadre,Integer>{
    List<Quadre> findQuadresByIdbotiga(int idbotiga);
    int deleteByidbotiga(int Idbotiga);
}
