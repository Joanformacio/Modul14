/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.botiguesquadres.botiguesquadres.bean;


import java.io.Serializable;
import javax.persistence.*;


/**
 *
 * @author Joan
 */
@Entity
@Table(name="quadres")
public class Quadre implements Serializable{
    private static final long serialVersionUID = 1L;
    
    @Id
    @Column(name="idquadre")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int idquadre;
    
    @Column(name="nom", nullable= false, length=45)
    private String nom;
    
    private String autor;
    
    @Column(name="dataentrada", nullable= false, length=10)
    private String dataEntrada;
    
    
    @Column(name="idbotiga", nullable= false)
    private int idbotiga;
    
    public Quadre(String nom, String autor, String dataEntrada, int idbotiga){
        this.nom=nom;
        this.autor=autor;
        this.dataEntrada= dataEntrada;
        this.idbotiga= idbotiga;
    }
    public Quadre(){
        
    }

    public int getIdquadre() {
        return idquadre;
    }

    public void setIdquadre(int idquadre) {
        this.idquadre = idquadre;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getDataEntrada() {
        return dataEntrada;
    }

    public void setDataentrada(String dataentrada) {
        this.dataEntrada = dataentrada;
    }

    public int getIdbotiga() {
        return idbotiga;
    }

    public void setIdbotiga(int idbotiga) {
        this.idbotiga = idbotiga;
    }

        
    
}
