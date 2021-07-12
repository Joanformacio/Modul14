/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.botiguesquadres.botiguesquadres.service;

import com.botiguesquadres.botiguesquadres.bean.Botiga;
import com.botiguesquadres.botiguesquadres.bean.Quadre;
import com.botiguesquadres.botiguesquadres.dao.IQuadreDao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

/**
 *
 * @author Joan
 */
@Service
public class QuadreServiceImpl implements IQuadreService{
    @Autowired
    private IQuadreDao tquadre;
    
    @Override
    public void creaQuadre(Quadre quadre) {
        tquadre.save(quadre);
    }

    @Override
    public List<Quadre> llistaQuadresExistens() {
       return tquadre.findAll();
    }

    @Override
    public Quadre obtenirQuadre(Quadre quadre) {
        return tquadre.findById(quadre.getIdquadre()).orElse(null);
    }

    @Override
    public void eleiminarUnQuadre(Quadre quadre) {
        tquadre.delete(quadre);
    }
    
    public List<Quadre> llistaQuadresUnaBotiga(int idbotiga){
        return tquadre.findQuadresByIdbotiga(idbotiga);
    }
    
    public void eliminaQuadresUnaBotiga(int idbotiga){
        tquadre.deleteByidbotiga(idbotiga);
    }

    @Override
    public Quadre modificaQuadre(Quadre quadre) {
        return tquadre.save(quadre);
    }
    
    
    
}
