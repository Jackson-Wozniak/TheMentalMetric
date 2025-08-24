package com.thementalmetric.app.games.gridrecall.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GridButtonAccuracyDto {
    private int index;
    private int correctGuesses;
    private int incorrectGuesses;
}
