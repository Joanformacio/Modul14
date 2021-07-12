/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.botiguesquadres.botiguesquadres.controllers;

import com.botiguesquadres.botiguesquadres.bean.*;
import com.botiguesquadres.botiguesquadres.service.*;
import java.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;



/**
 *
 * @author Joan
 */
@RestController
@RequestMapping("/botigues")
@CrossOrigin("*")
@Slf4j
public class RestControlerBotiga {
    @Autowired
    private BotigaServiceImpl tbotiga;
    
    @Autowired 
    private QuadreServiceImpl tquadre;
    
    @GetMapping(value="/all")
    public List<Botiga> getBotigues(){
        return tbotiga.llistaBotigues();
    }
    
    @GetMapping(value="/one/{idBotiga}")
    public ResponseEntity<Botiga> getBotigaById(@PathVariable("idBotiga") int idBotiga){
        Botiga obj=tbotiga.obtenirBotiga(idBotiga);
        if(obj!=null){
            return new ResponseEntity<>(obj, HttpStatus.FOUND);
        }else{
            return new ResponseEntity<>(obj, HttpStatus.NOT_FOUND);
        }
    }
    
    @PostMapping(value="/save")
    public HttpStatus save(@RequestBody Botiga botiga){
        tbotiga.creaBotiga(botiga);
        
        return  HttpStatus.CREATED;
    }
    
    @PostMapping(value="/modificar")
    public ResponseEntity<Botiga> modificarBotiga(@RequestBody Botiga botiga){
       
        Botiga obj= tbotiga.obtenirBotiga(botiga.getIdBotiga());
        if(obj!=null){
            obj.setNom(botiga.getNom());
            obj.setCapacitat(botiga.getCapacitat());
            tbotiga.modificaBotiga(obj);
            return new ResponseEntity<>(obj, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(obj, HttpStatus.NOT_FOUND);
        }
            
        
    }
    
    @DeleteMapping(value="/delete/{idBotiga}")
    public HttpStatus delete(@PathVariable("idBotiga") int idBotiga){
       Botiga obj= tbotiga.obtenirBotiga(idBotiga);
       List<Quadre> quadresDelete= new ArrayList<Quadre>();
       quadresDelete= tquadre.llistaQuadresUnaBotiga(idBotiga);
       if (obj!=null){
           //tquadre.eliminaQuadresUnaBotiga(idBotiga);
           tbotiga.eleiminarUnaBotiga(obj);
          for (Quadre q:quadresDelete){
              tquadre.eleiminarUnQuadre(q);
          }
           return HttpStatus.OK;
       }else{
           return  HttpStatus.NOT_FOUND;
       }
                
        
    }
    
        //End point quadres
    
    @GetMapping(value="/botiga/{idBotiga}")
    public List<Quadre> getAllQuadresBotiga(@PathVariable("idBotiga") int idBotiga){
        List<Quadre> quadres= new ArrayList<Quadre>();
       
        quadres= tquadre.llistaQuadresUnaBotiga(idBotiga);
        return quadres;
    }
    
    @PostMapping(value="/botiga/crearquadre")
    public void crearQuadre(@RequestBody Quadre quadre){
        //Botiga botiga= tbotiga.obtenirBotiga(idbotiga);
       
        //quadre.setBotiga(botiga);
        tquadre.creaQuadre(quadre);
    }
    
    @DeleteMapping(value="/botiga/deletequadre")
    public HttpStatus deleQuadreIdQuadre(@RequestBody Quadre quadre){
        if(tquadre.obtenirQuadre(quadre)!=null){
            tquadre.eleiminarUnQuadre(quadre);
            return HttpStatus.OK;
        }else{
            return HttpStatus.NOT_IMPLEMENTED;
        }
        
    }
    
    
    @PostMapping(value="/botiga/modificarquadre")
    public ResponseEntity<Quadre> modificarQuadre(@RequestBody Quadre quadre){
       
        Quadre obj= tquadre.obtenirQuadre(quadre);
        if(obj!=null){
            obj.setIdquadre(quadre.getIdquadre());
            obj.setNom(quadre.getNom());
            obj.setAutor(quadre.getAutor());
            obj.setDataentrada(quadre.getDataEntrada());
            obj.setIdbotiga(quadre.getIdbotiga());
           tquadre.modificaQuadre(obj);
            return new ResponseEntity<>(obj, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(obj, HttpStatus.NOT_FOUND);
        }
            
        
    }
            
}
