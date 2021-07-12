/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.botiguesquadres.botiguesquadres.service;

import com.botiguesquadres.botiguesquadres.bean.Botiga;
import com.botiguesquadres.botiguesquadres.dao.IBotigaDao;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Joan
 */

@Service
public class BotigaServiceImpl implements IBotigaService{
    @Autowired
    private IBotigaDao tbotiga;
    @Override
    public void creaBotiga(Botiga botiga) {
         tbotiga.save(botiga);
    }

    @Override
    @Transactional(readOnly=true)
    public List<Botiga> llistaBotigues() {
       return (List<Botiga>) tbotiga.findAll();
    }

    @Override
    @Transactional(readOnly=true)
    public Botiga obtenirBotiga(int idBotiga) {
        
        return  tbotiga.findById(idBotiga).orElse(null);
    }

    @Override
    public void eleiminarUnaBotiga(Botiga botiga) {
        tbotiga.delete(botiga);
    }

    @Override
    public Botiga modificaBotiga(Botiga botiga) {
        return tbotiga.save(botiga);
    }
    
}
