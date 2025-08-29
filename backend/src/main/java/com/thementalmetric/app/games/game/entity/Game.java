package com.thementalmetric.app.games.game.entity;

import com.thementalmetric.app.core.entity.BaseEntity;
import com.thementalmetric.app.games.game.enums.GameName;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "game")
@Table(name = "games")
@Getter
@Setter
@NoArgsConstructor
public class Game extends BaseEntity {
    @Enumerated(EnumType.STRING)
    @Column(name = "name")
    private GameName name;

    public Game(GameName name){
        this.name = name;
    }
}
