package com.cadsoft.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.ZonedDateTime;

@Entity
public class Comment {

    @Id
    @GeneratedValue
    private Long id;
    private String commenter;
    private String ip;
    private String content;
    private ZonedDateTime date;

    public Comment() {
    }

    public Comment(String commenter, String content) {
        this.commenter = commenter;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCommenter() {
        return commenter;
    }

    public void setCommenter(String commenter) {
        this.commenter = commenter;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", commenter='" + commenter + '\'' +
                ", ip='" + ip + '\'' +
                ", content='" + content + '\'' +
                ", date=" + date +
                '}';
    }
}
