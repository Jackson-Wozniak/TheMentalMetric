package com.thementalmetric.app.games.gridrecall.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GridLevelPerformanceDto {
    private int level;
    @JsonProperty("averageTimeBetweenGuesses")
    private double averageMillisBetweenGuesses;
    @JsonProperty("totalTimeTaken")
    private double totalMillisTaken;
}
