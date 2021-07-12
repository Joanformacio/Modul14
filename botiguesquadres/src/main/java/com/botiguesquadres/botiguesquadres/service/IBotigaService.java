/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.botiguesquadres.botiguesquadres.service;

import com.botiguesquadres.botiguesquadres.bean.Botiga;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author Joan
 */

public interface IBotigaService {
    public void creaBotiga(Botiga botiga);
    public Botiga modificaBotiga( Botiga botiga);
    public List<Botiga> llistaBotigues();
    public Botiga obtenirBotiga(int idBotiga);
    public void eleiminarUnaBotiga(Botiga botiga);
}
