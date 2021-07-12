/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.botiguesquadres.botiguesquadres.service;

import com.botiguesquadres.botiguesquadres.bean.Botiga;
import com.botiguesquadres.botiguesquadres.bean.Quadre;
import java.util.List;

/**
 *
 * @author Joan
 */
public interface IQuadreService {
    public void creaQuadre(Quadre quadre);
    public List<Quadre> llistaQuadresExistens();
    public Quadre obtenirQuadre(Quadre quadre);
    public Quadre modificaQuadre(Quadre quadre);
    public void eleiminarUnQuadre(Quadre quadre);
}
