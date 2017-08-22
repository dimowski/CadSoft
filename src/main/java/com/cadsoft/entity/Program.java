package com.cadsoft.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.ZonedDateTime;
import java.util.Objects;

@Entity
public class Program {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private ZonedDateTime date;
    private String fullDescription;
    private String shortDescription;
    private byte[] data;

    public Program() {
    }

    public Program(String name, String fullDescription, String shortDescription, byte[] data) {
        this.name = name;
        this.fullDescription = fullDescription;
        this.shortDescription = shortDescription;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    public String getFullDescription() {
        return fullDescription;
    }

    public void setFullDescription(String fullDescription) {
        this.fullDescription = fullDescription;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Program{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", date=" + date +
                ", fullDescription='" + fullDescription + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", dataIsNull=" + Objects.isNull(data) +
                '}';
    }
}
