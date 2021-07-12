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
@Table(name="botigues")
public class Botiga implements Serializable{
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name="idbotiga")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int idBotiga;
    private String nom;
    private int capacitat;
    
    public Botiga(String nom, int capacitat){
        this.nom=nom;
        this.capacitat=capacitat;
    }
    public Botiga(){
        
    }

    public int getIdBotiga() {
        return idBotiga;
    }

    public void setIdBotiga(int idBotiga) {
        this.idBotiga = idBotiga;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getCapacitat() {
        return capacitat;
    }

    public void setCapacitat(int capacitat) {
        this.capacitat = capacitat;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 89 * hash + this.idBotiga;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Botiga other = (Botiga) obj;
        if (this.idBotiga != other.idBotiga) {
            return false;
        }
        return true;
    }
    
    
}
