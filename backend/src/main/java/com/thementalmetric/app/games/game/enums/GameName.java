package com.thementalmetric.app.games.game.enums;

import lombok.Getter;

@Getter
public enum GameName {
    GRID_RECALL("Grid Recall"),
    PERIPHERAL_FOCUS("Peripheral Focus"),
    SELECTIVE_ATTENTION("Selective Attention"),
    WORD_LINK("Word Link");

    private final String name;

    GameName(String name){
        this.name = name;
    }
}
